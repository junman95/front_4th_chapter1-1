import userStore from "@/stores/UserStore";
import NavTab from "./NavTab";
import Component from "@/lib/core/Component";

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

class NavBar extends Component {
  template(state) {
    console.log(state, "navbar state");
    console.log(userStore._getState(), "navbar userStore");
    const user = state?.user;
    const tabItems = user ? TABS_WITH_USER : TABS_WITHOUT_USER;
    return `
<nav id='root-nav' class="bg-white shadow-md p-2 sticky top-14">
        <ul class="flex justify-around">
          ${tabItems.map((item) => NavTab(item)).join("")} 
          
        </ul>
      </nav>
      `;
  }
}

export default NavBar;
