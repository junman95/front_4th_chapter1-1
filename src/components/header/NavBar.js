import featureStore from "@/stores/FeatureStore";
import NavTab from "./NavTab";
import userStore from "@/stores/UserStore";
import { onRenderNavBar } from "@/lib/nav/event";

const TAB_ITEMS = {
  main: {
    path: "main",
    label: "홈",
  },
  profile: {
    path: "profile",
    label: "프로필",
  },
  login: {
    path: "login",
    label: "로그인",
  },
  logout: {
    path: "logout",
    label: "로그아웃",
  },
};

const TABS_WITHOUT_USER = [TAB_ITEMS.main, TAB_ITEMS.login];
const TABS_WITH_USER = [TAB_ITEMS.main, TAB_ITEMS.profile, TAB_ITEMS.logout];

const addEventListeners = () => {
  onRenderNavBar();
};

const render = (selector, state) => {
  const rootNav = selector
    ? document.querySelector(selector)
    : document.querySelector("#nav-container");

  if (!rootNav) return;

  const tabItems = state.user ? TABS_WITH_USER : TABS_WITHOUT_USER;

  rootNav.innerHTML = `
<nav id='root-nav' class="bg-white shadow-md p-2 sticky top-14">
        <ul class="flex justify-around">
          ${tabItems
            .map((item) =>
              NavTab({ ...item, active: state.currentFeature === item.path }),
            )
            .join("")} 
          
        </ul>
      </nav>
      `;
};

function navBar(dom) {
  // 최초 init state
  let state = {
    user: userStore.getUser(),
    currentFeature: featureStore.getFeature(),
  };

  // TO ASK : 클로저를 이용해서 짜봤는데 어떤가요? (기존 state를 캐싱해 두고싶어서 이렇게 했습니다.)
  // newState 는 notify시 넘어옵니다.
  return (newState) => {
    render(dom, { ...state, ...newState });
    addEventListeners();
  };
}

userStore.addObserver(navBar);
featureStore.addObserver(navBar);

export default navBar;
