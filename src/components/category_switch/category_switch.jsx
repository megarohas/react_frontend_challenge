import React from "react";

const CategorySwitch = props => {
  let categories = props.categories || [];
  let current_category = props.current_category || "";
  let changeCategory = props.changeCategory || (() => {});

  let renderButtons = buttons =>
    buttons.map((button, index) => (
      <button
        style={{ marginRight: "10px" }}
        key={`CategorySwitch_renderButtons_${index}`}
        disabled={current_category === button.value}
        onClick={() => {
          changeCategory(button.value);
        }}
      >
        {button.label}
      </button>
    ));

  return (
    <div style={{ marginBottom: "20px" }}>{renderButtons(categories)}</div>
  );
};

export default CategorySwitch;
