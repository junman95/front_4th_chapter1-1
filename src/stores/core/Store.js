import Subject from "./Subject";

class Store extends Subject {
  constructor(initialState) {
    super();
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
