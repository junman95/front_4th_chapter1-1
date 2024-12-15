import router from "./network/router/Router";

window.addEventListener("load", () => router.route(window.location.pathname));
