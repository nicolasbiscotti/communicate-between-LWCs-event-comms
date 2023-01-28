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
    const subtractBtn = controls.shadowRoot.querySelector(
      "[data-function='subtract']"
    );
    subtractBtn.dispatchEvent(new CustomEvent("click"));

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
    const addBtn = controls.shadowRoot.querySelector("[data-function='add']");
    addBtn.dispatchEvent(new CustomEvent("click"));

    // Assert
    expect(counter).toBe(1);
  });

  it("should dispatch multiply event with 3 as data when multiply by 3 button is clicked", () => {
    // Arrange
    const controlsTemplate = createElement("c-controls", {
      is: Controls
    });
    let multiplyBy = 0;
    controlsTemplate.addEventListener(
      "multiply",
      (event) => (multiplyBy = event.detail)
    );

    // Act
    document.body.appendChild(controlsTemplate);
    const multyplayByFour =
      controlsTemplate.shadowRoot.querySelector("[data-factor='4']");
    const byFourBtn =
      multyplayByFour.shadowRoot.querySelector("[data-factor='4']");
    byFourBtn.dispatchEvent(new CustomEvent("click"));

    // Assert
    expect(multiplyBy).toBe(4);
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
    const multyplayByTwo =
      controls.shadowRoot.querySelector("[data-factor='2']");
    const byTwoBtn =
      multyplayByTwo.shadowRoot.querySelector("[data-factor='2']");
    byTwoBtn.dispatchEvent(new CustomEvent("click"));

    // Assert
    expect(multiplyBy).toBe(2);
  });

  it("should dispatch divide event when the divide by button is clicked", () => {
    const controls = createElement("c-controls", {
      is: Controls
    });
    let divideBy = 0;
    controls.addEventListener("divide", (event) => {
      divideBy = event.detail;
    });

    document.body.appendChild(controls);
    const divideButton = controls.shadowRoot.querySelector(
      "[data-function='divideBy2']"
    );
    const button = divideButton.shadowRoot.querySelector("[data-factor='2']");
    button.dispatchEvent(new CustomEvent("click"));

    expect(divideBy).toBe(2);
  });

  it("should dispatch divide event with three as factor", () => {
    const controls = createElement("c-controls", {
      is: Controls
    });
    controls.divisors = 3;

    let divideBy = 0;
    controls.addEventListener("divide", (event) => {
      divideBy = event.detail;
    });

    document.body.appendChild(controls);
    const divideButton = controls.shadowRoot.querySelector(
      "[data-function='divideBy3']"
    );
    const button = divideButton.shadowRoot.querySelector("[data-factor='3']");
    button.dispatchEvent(new CustomEvent("click"));

    expect(divideBy).toBe(3);
  });

  it("should dispatch divide event with three or five as factor", () => {
    const controls = createElement("c-controls", {
      is: Controls
    });
    controls.divisors = [3, 5];

    let divideBy = 0;
    controls.addEventListener("divide", (event) => {
      divideBy = event.detail;
    });

    document.body.appendChild(controls);
    const divideButton = controls.shadowRoot.querySelector(
      "[data-function='divideBy5']"
    );
    const button = divideButton.shadowRoot.querySelector("[data-factor='5']");
    button.dispatchEvent(new CustomEvent("click"));

    expect(divideBy).toBe(5);
  });
});
