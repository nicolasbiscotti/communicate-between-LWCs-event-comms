import { createElement } from "lwc";
import Numerator from "c/numerator";

describe("c-numerator", () => {
  afterEach(() => {
    // The jsdom instance is shared across test cases in a single file so reset the DOM
    while (document.body.firstChild) {
      document.body.removeChild(document.body.firstChild);
    }
  });

  it("should add one to the counter", () => {
    // Arrange
    const element = createElement("c-numerator", {
      is: Numerator
    });

    // Act
    document.body.appendChild(element);
    const p = element.shadowRoot.querySelector("p");
    const formattedNumber = p.querySelector("lightning-formatted-number");
    const controls = element.shadowRoot.querySelector("c-controls");
    controls.dispatchEvent(new CustomEvent("add"));

    // Assert
    return Promise.resolve().then(() => {
      expect(p.textContent).toBe("Count:");
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
    const p = element.shadowRoot.querySelector("p");
    const formattedNumber = p.querySelector("lightning-formatted-number");
    const controls = element.shadowRoot.querySelector("c-controls");
    controls.dispatchEvent(new CustomEvent("subtract"));

    // Assert
    return Promise.resolve().then(() => {
      expect(p.textContent).toBe("Count:");
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
    const p = element.shadowRoot.querySelector("p");
    const formattedNumber = p.querySelector("lightning-formatted-number");
    const controls = element.shadowRoot.querySelector("c-controls");
    controls.dispatchEvent(new CustomEvent("add"));
    controls.dispatchEvent(
      new CustomEvent("multiply", {
        detail: 2
      })
    );

    // Assert
    return Promise.resolve().then(() => {
      expect(p.textContent).toBe("Count:");
      expect(formattedNumber.value).toBe(2);
    });
  });
});
