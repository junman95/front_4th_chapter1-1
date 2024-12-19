import router from "./network/router/Router";
import MainPage from "./pages/app";

document.body.innerHTML = `<div id="root"></div>`;
MainPage(document.body, "#root");
window.addEventListener("load", () => router.route(window.location.pathname));
