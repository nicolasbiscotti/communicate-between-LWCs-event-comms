import { MessageContext, subscribe } from "lightning/messageService";
import { LightningElement, wire } from "lwc";
import COUNT_UPDATED_CHANNEL from "@salesforce/messageChannel/Count_Updated__c";

export default class Counts extends LightningElement {
  subscription = null;
  priorCount = 0;
  counter = 0;

  @wire(MessageContext)
  messageContext;

  suscribeToMessageChanel() {
    this.subscription = subscribe(
      this.messageContext,
      COUNT_UPDATED_CHANNEL,
      (message) => this.handleMessage(message)
    );
  }

  handleMessage(message) {
    this.priorCount = this.counter;
    if (message.operator === "add") {
      this.counter += message.constant;
    } else if (message.operator === "subtract") {
      this.counter -= message.constant;
    } else if (message.operator === "multiply") {
      this.counter *= message.constant;
    }
  }

  connectedCallback() {
    this.suscribeToMessageChanel();
  }
}
