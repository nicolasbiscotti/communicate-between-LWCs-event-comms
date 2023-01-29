import { createElement } from "lwc";
import Augmentor from "c/augmentor";

describe("c-augmentor", () => {
  afterEach(() => {
    // The jsdom instance is shared across test cases in a single file so reset the DOM
    while (document.body.firstChild) {
      document.body.removeChild(document.body.firstChild);
    }
  });

  it("TODO: test case generated by CLI command, please fill in test logic", () => {
    // Arrange
    const augmentor = createElement("c-augmentor", {
      is: Augmentor
    });

    // Act
    document.body.appendChild(augmentor);

    // Assert
    const startCounter = augmentor.shadowRoot.querySelector("lightning-input");
    expect(startCounter.value).toBe(0);
  });

  it("should handle the change event of startCounter", () => {
    const augmentor = createElement("c-augmentor", {
      is: Augmentor
    });

    document.body.appendChild(augmentor);

    const startCounter = augmentor.shadowRoot.querySelector("lightning-input");
    startCounter.value = 100;
    startCounter.dispatchEvent(new CustomEvent("change"));

    return Promise.resolve().then(() => {
      const numerator = augmentor.shadowRoot.querySelector("c-numerator");
      expect(numerator.counter).toBe(100);
    });
  });

  it("should bump the count by one millon", () => {
    const augmentor = createElement("c-augmentor", {
      is: Augmentor
    });

    document.body.appendChild(augmentor);
    const bumpCountButton =
      augmentor.shadowRoot.querySelector("lightning-button");
    bumpCountButton.dispatchEvent(new CustomEvent("click"));

    return Promise.resolve().then(() => {
      const numerator = augmentor.shadowRoot.querySelector("c-numerator");
      expect(numerator.counter).toBe(1000000);
    });
  });
});
