import router, { STATIC_PAGES } from "@/network/router/Router";

const delegateNavButtonEvents = (e) => {
  if (!e.target.dataset.path) return;

  const path = e.target.dataset.path;
  e.preventDefault(); // TO CHECK: 이벤트 전파 왜 막는거지? -> a태그의 기본 동작인 페이지 이동을 막기 위함
  router.navigate(STATIC_PAGES[path].path);
};

export { delegateNavButtonEvents };
