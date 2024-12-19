import User from "./lib/auth/User";
import router from "./network/router/Router";
import featureStore from "./stores/FeatureStore";
import userStore from "./stores/UserStore";

const init = () => {
  userStore.setUser(User.getUser());
  document.body.innerHTML = `<div id="root"></div>`;
  featureStore.setFeature(window.location.pathname);
};
init();

window.addEventListener("load", () => router.route(window.location.pathname));
