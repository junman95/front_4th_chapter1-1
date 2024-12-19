import router from "./network/router/Router";
import MainPage from "./pages/app";
import featureStore from "./stores/FeatureStore";

const init = () => {
  document.body.innerHTML = `<div id="root"></div>`;
  featureStore.setFeature(window.location.pathname);
  MainPage(document.body, "#root");
};
init();

window.addEventListener("load", () => router.route(window.location.pathname));
