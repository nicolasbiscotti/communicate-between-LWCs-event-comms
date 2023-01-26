import { createElement } from "lwc";
import Controls from "c/controls";

describe("c-controls", () => {
  afterEach(() => {
    // The jsdom instance is shared across test cases in a single file so reset the DOM
    while (document.body.firstChild) {
      document.body.removeChild(document.body.firstChild);
    }
  });

  function dispatchClickOnLWCButton(label, container) {
    const lwcButtons =
      container.shadowRoot.querySelectorAll("lightning-button");
    Array.from(lwcButtons).forEach((button) => {
      if (button.label === label)
        button.dispatchEvent(new CustomEvent("click"));
    });
  }

  it("should dispatch subtract custom event when subtract button is clicked", () => {
    // Arrange
    const controls = createElement("c-controls", {
      is: Controls
    });
    let counter = 1;
    controls.addEventListener("subtract", () => counter--);

    // Act
    document.body.appendChild(controls);
    dispatchClickOnLWCButton("Subtract", controls);

    // Assert
    expect(counter).toBe(0);
  });

  it("should dispatch add custom event when add button is clicked", () => {
    // Arrange
    const controls = createElement("c-controls", {
      is: Controls
    });
    let counter = 0;
    controls.addEventListener("add", () => counter++);

    // Act
    document.body.appendChild(controls);
    dispatchClickOnLWCButton("Add", controls);

    // Assert
    expect(counter).toBe(1);
  });

  it("should dispatch multiply event with 3 as data when multiply by 3 button is clicked", () => {
    // Arrange
    const controls = createElement("c-controls", {
      is: Controls
    });
    let multiplyBy = 0;
    controls.addEventListener(
      "multiply",
      (event) => (multiplyBy = event.detail)
    );

    // Act
    document.body.appendChild(controls);
    dispatchClickOnLWCButton("3", controls);

    // Assert
    expect(multiplyBy).toBe(3);
  });

  it("should dispatch multiply event with 2 as data when multiply by 2 button is clicked", () => {
    // Arrange
    const controls = createElement("c-controls", {
      is: Controls
    });
    let multiplyBy = 0;
    controls.addEventListener(
      "multiply",
      (event) => (multiplyBy = event.detail)
    );

    // Act
    document.body.appendChild(controls);
    dispatchClickOnLWCButton("2", controls);

    // Assert
    expect(multiplyBy).toBe(2);
  });
});
