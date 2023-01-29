import { createElement } from "lwc";
import Numerator from "c/numerator";

describe("c-numerator", () => {
  afterEach(() => {
    // The jsdom instance is shared across test cases in a single file so reset the DOM
    while (document.body.firstChild) {
      document.body.removeChild(document.body.firstChild);
    }
  });

  it("should set the formatted number to 3", () => {
    const numerator = createElement("c-numerator", {
      is: Numerator
    });

    document.body.appendChild(numerator);

    const number = numerator.shadowRoot.querySelector(".counter");
    numerator.counter = 3;

    return Promise.resolve().then(() => {
      expect(number.value).toBe(3);
    });
  });

  it("should add one to the counter", () => {
    // Arrange
    const element = createElement("c-numerator", {
      is: Numerator
    });

    // Act
    document.body.appendChild(element);
    const formattedNumber = element.shadowRoot.querySelector(".counter");
    const controls = element.shadowRoot.querySelector("c-controls");
    controls.dispatchEvent(new CustomEvent("add"));

    // Assert
    return Promise.resolve().then(() => {
      expect(formattedNumber.value).toBe(1);
    });
  });

  it("should subtract one to the counter", () => {
    // Arrange
    const element = createElement("c-numerator", {
      is: Numerator
    });

    // Act
    document.body.appendChild(element);
    const formattedNumber = element.shadowRoot.querySelector(".counter");
    const controls = element.shadowRoot.querySelector("c-controls");
    controls.dispatchEvent(new CustomEvent("subtract"));

    // Assert
    return Promise.resolve().then(() => {
      expect(formattedNumber.value).toBe(-1);
    });
  });

  it("should multiply by 2 the counter", () => {
    // Arrange
    const element = createElement("c-numerator", {
      is: Numerator
    });

    // Act
    document.body.appendChild(element);
    const formattedNumber = element.shadowRoot.querySelector(".counter");
    const controls = element.shadowRoot.querySelector("c-controls");
    controls.dispatchEvent(new CustomEvent("add"));
    controls.dispatchEvent(
      new CustomEvent("multiply", {
        detail: 2
      })
    );

    // Assert
    return Promise.resolve().then(() => {
      expect(formattedNumber.value).toBe(2);
    });
  });

  it("should divide by 2 the counter", () => {
    const numerator = createElement("c-numerator", {
      is: Numerator
    });

    document.body.appendChild(numerator);

    const controls = numerator.shadowRoot.querySelector("c-controls");
    controls.dispatchEvent(new CustomEvent("add"));
    controls.dispatchEvent(
      new CustomEvent("multiply", {
        detail: 4
      })
    );
    controls.dispatchEvent(
      new CustomEvent("divide", {
        detail: 2
      })
    );

    return Promise.resolve().then(() => {
      const counter = numerator.shadowRoot.querySelector(".counter");
      expect(counter.value).toBe(2);
    });
  });

  it("should bump the count by one millon", () => {
    const numerator = createElement("c-numerator", {
      is: Numerator
    });

    document.body.appendChild(numerator);
    numerator.maximizeCounter(1000000);

    return Promise.resolve().then(() => {
      expect(numerator.counter).toBe(1000000);
    });
  });

  it("should hold the prior count after change the counter", () => {
    const numerator = createElement("c-numerator", {
      is: Numerator
    });

    document.body.appendChild(numerator);
    numerator.counter = 24;
    const controls = numerator.shadowRoot.querySelector("c-controls");
    controls.dispatchEvent(new CustomEvent("add"));

    return Promise.resolve().then(() => {
      const priorCount = numerator.shadowRoot.querySelector(".prior-count");
      expect(priorCount.value).toBe(24);
    });
  });
});
