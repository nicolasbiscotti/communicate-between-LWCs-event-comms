import { LightningElement } from "lwc";

export default class Numerator extends LightningElement {
  counter = 0;
  divideBy = [2, 3, 4, 5, 6];
  handleIncrement() {
    this.counter++;
  }
  handleDecrement() {
    this.counter--;
  }
  handleMultiply(event) {
    const factor = event.detail;
    this.counter *= factor;
  }
  handleDivide(event) {
    const divisor = event.detail;
    this.counter /= divisor;
  }
}
