import Subject from "./Subject";

class Store extends Subject {
  static instance = null;
  constructor(initialState) {
    super();
    if (Store.instance) {
      return Store.instance;
    }
    Store.instance = this;
    this.state = initialState;
  }

  _setState = (newState) => {
    this.state = { ...this.state, ...newState };
    this.notifyObservers(this.state);
  };

  _getState = () => {
    return this.state;
  };
}

export default Store;
