import React from "react";

const Button = (props) => {
  return (
    <div className="custom_button" style={props.customStyle}>
      {props.children}
    </div>
  );
};

export default Button;
