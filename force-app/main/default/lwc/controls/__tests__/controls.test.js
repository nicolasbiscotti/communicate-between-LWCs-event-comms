import { createElement } from "lwc";
import Controls from "c/controls";

describe("c-controls", () => {
  afterEach(() => {
    // The jsdom instance is shared across test cases in a single file so reset the DOM
    while (document.body.firstChild) {
      document.body.removeChild(document.body.firstChild);
    }
  });

  it("should dispatch subtract custom event when subtract button is clicked", () => {
    // Arrange
    const controls = createElement("c-controls", {
      is: Controls
    });
    let counter = 1;
    controls.addEventListener("subtract", () => counter--);

    // Act
    document.body.appendChild(controls);

    const subtractButton = controls.shadowRoot.querySelector(".subtract");
    subtractButton.dispatchEvent(new CustomEvent("click"));

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

    const addButton = controls.shadowRoot.querySelector(".add");
    addButton.dispatchEvent(new CustomEvent("click"));

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

    const multiplayBy3Button = controls.shadowRoot.querySelector(".by3");
    multiplayBy3Button.dispatchEvent(new CustomEvent("click"));

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

    const multiplayBy2Button = controls.shadowRoot.querySelector(".by2");
    multiplayBy2Button.dispatchEvent(new CustomEvent("click"));

    // Assert
    expect(multiplyBy).toBe(2);
  });
});
