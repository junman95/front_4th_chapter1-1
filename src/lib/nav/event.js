import router, { STATIC_PAGES } from "@/network/router/Router";
import featureStore from "@/stores/FeatureStore";
import userStore from "@/stores/UserStore";

const onRenderNavBar = () => {
  const rootNav = document.querySelector("nav#root-nav");
  if (!rootNav) return;
  document.querySelector("nav#root-nav").addEventListener("click", (e) => {
    // 임의로 삽입한 data-path 가 없는 dom에서 발생한 이벤트는 무시
    if (!e.target.dataset.path) return;

    const path = e.target.dataset.path;
    featureStore.setFeature(path);
    e.preventDefault();
    router.navigate(STATIC_PAGES[path].path);
  });
};

// 상태 변경 테스트를 위한 임시 함수
const onTemp = () => {
  const tempBtn = document.querySelector("#temp");
  tempBtn.addEventListener("click", () => {
    userStore.getUser()
      ? userStore.clearUser()
      : userStore.setUser({
          username: "test",
          email: "",
          bio: "test",
        });
  });
};
export { onRenderNavBar, onTemp };
