class Subject {
  constructor() {
    this.observers = [];
  }

  addObserver(renderer) {
    this.observers.push(renderer);
  }

  // 컴포넌트 제거시 옵저버리스트에서 제거해 줘야할 듯.
  removeObserver(observer) {
    const index = this.observers.indexOf(observer);
    if (index > -1) {
      this.observers.splice(index, 1);
    }
  }

  // 컴포넌트 상태 업데이트 및 리렌더 하기 위해 옵저버들에게 데이터 전달
  notifyObservers(data) {
    // 옵저버블이 될수 있는 컴포넌트는 함수를 리턴하는 형태로 제공됩니다.
    // 고차함수 형태인데 좀더 설명하자면, 첫번쨰 인자는 여기에서는 쓰이지 않습니다.(자식 컴포넌트로 불릴때 부모 dom을 받는 용도입니다.)
    this.observers.forEach((renderer) => renderer()(data));
  }
}

export default Subject;
