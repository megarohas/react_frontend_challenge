import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import CategorySwitch from "./category_switch.jsx";

let container = null;
beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it("renders with empty/non empty props", () => {
  act(() => {
    render(<CategorySwitch />, container);
  });
  expect(container.textContent).toBe("");

  act(() => {
    render(
      <CategorySwitch
        categories={[
          {
            label: "Films",
            value: "films"
          },
          {
            label: "TV Seasons",
            value: "tv_seasons"
          }
        ]}
        current_category={"films"}
        changeCategory={() => {}}
      />,
      container
    );
  });
  expect(container.textContent).toBe("FilmsTV Seasons");
});
