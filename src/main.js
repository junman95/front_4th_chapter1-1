import router from "./network/router/Router";
import MainPage from "./pages/app";
document.body.innerHTML = MainPage();
window.addEventListener("load", () => router.route(window.location.pathname));
