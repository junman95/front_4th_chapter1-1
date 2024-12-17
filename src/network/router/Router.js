import MainPage from "@/pages/app";
import ErrorPage from "@/pages/error";
import LoginPage from "@/pages/login";
import ProfilePage from "@/pages/profile";
import { log } from "@/util/common/log";

const STATIC_PAGES = {
  main: {
    path: "/",
    page: () => new MainPage(document.body),
  },
  profile: {
    path: "/profile",
    page: () => new ProfilePage(document.body),
  },
  login: { path: "/login", page: () => new LoginPage(document.body) },
  logout: { path: "/logout", page: () => {} },
  404: { path: "/404", page: () => new ErrorPage(document.body) },
};

class Router {
  static instance = null;
  constructor() {
    if (Router.instance) {
      return Router.instance;
    }
    Router.instance = this;
    this.routes = {};
    this.currentPage = null;
    window.addEventListener("popstate", this._handlePopState);
  }

  // TO ASK : 동적으로 라우트를 추가할 일이 있을까? 프라이빗으로 선언해야할까?
  addRoute = (path, handler) => {
    this.routes[path] = handler;
  };

  navigate = (path) => {
    history.pushState({}, "", path);
    this.route(path);
  };

  route = (path) => {
    const handler = this.routes[path];
    if (handler) {
      log(`Routing to ${path}`);
      handler();
    } else {
      log(`Cannot route to ${path}`);
      this.routes["/404"]();
    }
  };

  // popstate 발동 시 라우팅 해주는 함수(최초 인스턴스화 시에 이벤트 리스너로 등록)
  // TO ASK : 예제 코드에서는 메서드로 선언 되어 있어, this바인딩을 해주는데, 그러한 점을 화살표 함수로 변경해 해결했음.
  //          메서드 작성후 this바인딩을 해주는 이유가 무엇인지 궁금함.
  _handlePopState = () => {
    this.route(window.location.pathname);
  };

  replaceBodyHtml = (render, ...callback) => {
    if (this.currentPage) {
      this.currentPage.unmount();
    }
    this.currentPage = render();
    callback?.forEach((f) => f(this));
  };
}

const router = new Router();

// enumerable을 이용한 순회(배열을 만들지 않고 객체를 순회하여 최적화)
for (const key in STATIC_PAGES) {
  const value = STATIC_PAGES[key];
  router.addRoute(value.path, () => {
    router.replaceBodyHtml(value.page);
  });
}

window.addEventListener("load", () => router.route(window.location.pathname));

export default router;
export { STATIC_PAGES };
