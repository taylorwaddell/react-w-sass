import React from "react";
import "../scss/components/_button.scss";

function Button({
  buttonText = "button",
  buttonType = "button",
  classes = "bg-primary text-light"
}) {
  return (
    <button className={classes} typeof={buttonType}>
      {buttonText}
    </button>
  );
}

export default Button;
