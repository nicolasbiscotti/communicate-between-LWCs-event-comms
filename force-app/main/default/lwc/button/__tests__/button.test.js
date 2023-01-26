import { createElement } from "lwc";
import Button from "c/button";

describe("c-button", () => {
  afterEach(() => {
    // The jsdom instance is shared across test cases in a single file so reset the DOM
    while (document.body.firstChild) {
      document.body.removeChild(document.body.firstChild);
    }
  });

  it("should bubble the buttonclick event", () => {
    // Arrange
    const buttonTemplate = createElement("c-button", {
      is: Button
    });
    let buttonClickEvent = 0;
    document.body.addEventListener("buttonclick", () => buttonClickEvent++);

    // Act
    document.body.appendChild(buttonTemplate);
    const btn = buttonTemplate.shadowRoot.querySelector("lightning-button");
    btn.dispatchEvent(new CustomEvent("click"));

    // Assert
    expect(buttonClickEvent).toBe(1);
  });

  it("should set label, data-factor and icon-name", () => {
    // Arrange
    const buttonTemplate = createElement("c-button", {
      is: Button
    });
    buttonTemplate.label = "Add";
    buttonTemplate.icon = "2";

    // Act
    document.body.appendChild(buttonTemplate);
    const btn = buttonTemplate.shadowRoot.querySelector("lightning-button");

    // Assert
    expect(btn.label).toBe("Add");
    expect(btn.dataset.factor).toBe("Add");
    expect(btn.iconName).toBe("2");
  });
});
