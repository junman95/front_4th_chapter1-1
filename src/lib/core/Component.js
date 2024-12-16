class Component {
  constructor(targetDOM) {
    this.targetDOM = targetDOM;
    this.eventListeners = [];
    this.setup();
    this.setEvent();
    this.render();
    this.mounted();
  }

  setup() {}
  template() {
    return "";
  }
  render() {
    this.targetDOM.innerHTML = this.template();
  }
  setEvent() {}
  setState(newState) {
    this.state = { ...this.state, ...newState };
    this.render();
  }
  /**
   *
   * @param {*} eventType dom 이벤트 타입이 들어온다 (click, submit, change 등)
   * @param {*} selector 선택자
   * @param {*} callback 이벤트 발생 시 실행할 콜백 함수
   */
  addEvent(eventType, selector, callback) {
    const children = [...this.targetDOM.querySelectorAll(selector)];
    const isTarget = (target) =>
      children.includes(target) || target.closest(selector); // 버블링중 가까운 selector Dom 엘리먼트를 찾는다.
    const handler = (event) => {
      if (!isTarget(event.target)) return false;
      callback(event);
    };
    this.targetDOM.addEventListener(eventType, handler);

    this.eventListeners.push({ eventType, handler });
  }
  mounted() {}

  unmount() {
    this.targetDOM.innerHTML = "";
    this.eventListeners.forEach(({ eventType, handler }) => {
      this.targetDOM.removeEventListener(eventType, handler);
    });
    this.eventListeners = [];
  }
}

export default Component;
