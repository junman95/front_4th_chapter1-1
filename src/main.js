import router from "./network/router/Router";
import MainPage from "./pages/app";
MainPage(document.body);
window.addEventListener("load", () => router.route(window.location.pathname));
