import { api, LightningElement } from "lwc";

export default class Controls extends LightningElement {
  divisorsFactors = [{ factor: 2, fun: "divideBy2" }];
  factors = ["0", "1", "2", "3", "4"];

  @api get divisors() {
    return this.divisorsFactors;
  }

  set divisors(divisors) {
    if (typeof divisors === "number") {
      divisors = [divisors];
    }
    this.divisorsFactors = divisors.map((divisor) => {
      return { factor: divisor, fun: `divideBy${divisor}` };
    });
  }

  handleAdd() {
    this.dispatchEvent(new CustomEvent("add"));
  }
  handleSubtract() {
    this.dispatchEvent(new CustomEvent("subtract"));
  }
  handleMultiply(event) {
    const factor = event.target.dataset.factor;
    this.dispatchEvent(
      new CustomEvent("multiply", {
        detail: Number(factor)
      })
    );
  }
  handleDivide(event) {
    const factor = event.target.dataset.factor;
    this.dispatchEvent(
      new CustomEvent("divide", {
        detail: Number(factor)
      })
    );
  }
}
