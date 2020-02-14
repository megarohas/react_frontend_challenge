import React from "react";

const CategorySwitch = props => {
  console.log("CategorySwitch", props);
  let renderButtons = buttons =>
    buttons.map((button, index) => (
      <button
        style={{ marginRight: "10px" }}
        key={`CategorySwitch_renderButtons_${index}`}
        disabled={props.current_category === button.value}
        onClick={() => {
          props.changeCategory(button.value);
        }}
      >
        {button.label}
      </button>
    ));

  return (
    <div style={{ marginBottom: "20px" }}>
      {renderButtons(props.categories)}
    </div>
  );
};

export default CategorySwitch;
