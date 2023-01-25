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

    return Promise.resolve().then(() => {
      const p = element.shadowRoot.querySelector("p");
      const formattedNumber = p.querySelector("lightning-formatted-number");
      expect(p.textContent).toBe("Count: ");
      expect(formattedNumber.value).toBe(1);
    });
  });
});
