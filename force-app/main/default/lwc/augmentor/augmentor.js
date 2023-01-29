import { LightningElement } from "lwc";

export default class Augmentor extends LightningElement {
  startCounter = 0;

  handleStartChange(event) {
    this.startCounter = Number(event.target.value);
  }
}
