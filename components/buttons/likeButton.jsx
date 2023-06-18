import React from "react";
import Button from "../buttons/customButton";

const LikeButton = ({ children }) => {
  return (
    <Button
      customStyle={{
        minWidth: "60px",
        justifyContent: "space-evenly",
        alignItems: "center",
        display: "flex",
      }}>
      {children}
    </Button>
  );
};

export default LikeButton;
