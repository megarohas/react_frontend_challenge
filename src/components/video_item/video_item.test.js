import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import VideoItem from "./video_item.jsx";

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
    render(<VideoItem />, container);
  });
  expect(container.textContent).toBe(
    "Name: Description: Price (Buy):Price (Rent): "
  );

  act(() => {
    render(
      <VideoItem
        current_category={"films"}
        video={{
          name: "Mulholland Drive",
          release: 2001,
          prices: {
            buy: 999,
            rent: 299
          },
          description:
            "Mulholland Drive (stylized as Mulholland Dr.) is a 2001 neo-noir mystery film written and directed by David Lynch and starring Naomi Watts, Laura Harring, Justin Theroux, Ann Miller, and Robert Forster. It tells the story of an aspiring actress named Betty Elms (Watts), newly arrived in Los Angeles, who meets and befriends an amnesiac woman (Harring) recovering from a car accident. The story follows several other vignettes and characters, including a Hollywood film director (Theroux)."
        }}
      />,
      container
    );
  });
  expect(container.textContent).toBe(
    "Name: Mulholland DriveDescription: Mulholland Drive (stylized as Mulholland Dr.) is a 2001 neo-noir mystery film written and directed by David Lynch and starring Naomi Watts, Laura Harring, Justin Theroux, Ann Miller, and Robert Forster. It tells the story of an aspiring actress named Betty Elms (Watts), newly arrived in Los Angeles, who meets and befriends an amnesiac woman (Harring) recovering from a car accident. The story follows several other vignettes and characters, including a Hollywood film director (Theroux).Price (Buy):999Price (Rent): 299"
  );
});
