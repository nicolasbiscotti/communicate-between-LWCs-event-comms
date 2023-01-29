import { api, LightningElement } from "lwc";

export default class Numerator extends LightningElement {
  _currentCount = 0;

  _setCurrentCount(value) {
    this.priorCount = this._currentCount;
    this._currentCount = value;
  }

  priorCount = 0;
  divideBy = [2, 3, 4, 5, 6];

  @api
  get counter() {
    return this._currentCount;
  }
  set counter(value) {
    this._setCurrentCount(value);
  }

  handleIncrement() {
    this._setCurrentCount(this._currentCount + 1);
  }
  handleDecrement() {
    this._setCurrentCount(this._currentCount - 1);
  }
  handleMultiply(event) {
    const factor = event.detail;
    this._setCurrentCount(this._currentCount * factor);
  }
  handleDivide(event) {
    const divisor = event.detail;
    this._setCurrentCount(this._currentCount / divisor);
  }
  @api
  maximizeCounter(value) {
    this._setCurrentCount(this._currentCount + value);
  }
}
