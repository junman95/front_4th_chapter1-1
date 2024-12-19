// 자식 요소를 추가하는 함수
// children: [component, dom] 형태의 배열
// 스토어에서 옵저버블로 등록된 컴포넌트들은 고차함수 형태이기 때문에
// 타입체크 후 한번 더 실행시켜주는 형태로 구현 했습니다.
const addChildComponents = (children) => {
  for (const [component, dom] of children) {
    const res = component(dom);
    if (typeof res === "function") {
      res();
    }
  }
};

export default addChildComponents;
