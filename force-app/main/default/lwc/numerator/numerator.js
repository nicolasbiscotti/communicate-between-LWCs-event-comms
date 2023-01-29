import { api, LightningElement } from "lwc";

export default class Numerator extends LightningElement {
  _currentValue = 0;
  divideBy = [2, 3, 4, 5, 6];

  setCurrentValue(value) {
    this._currentValue = value;
  }

  @api
  get counter() {
    return this._currentValue;
  }
  set counter(value) {
    this.setCurrentValue(value);
  }

  handleIncrement() {
    this.counter++;
  }
  handleDecrement() {
    this.counter--;
  }
  handleMultiply(event) {
    const factor = event.detail;
    this.setCurrentValue(this._currentValue * factor);
  }
  handleDivide(event) {
    const divisor = event.detail;
    this.setCurrentValue(this._currentValue / divisor);
  }
}
