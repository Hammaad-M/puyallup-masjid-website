import React from "react";

const PrimaryButton = ({ text, icon = null, inversed = false }) => {
  function getColor() {
    return inversed
      ? " text-primary bg-white hover:border-white hover:text-white hover:bg-primary"
      : " text-white bg-primary hover:border-orange-700 hover:text-orange-700 hover:bg-white";
  }
  return icon === null ? (
    <button
      className={
        "px-6 py-2 text-lg rounded-sm hover:shadow-lg border border-1 " +
        getColor()
      }
    >
      {text}
    </button>
  ) : (
    <button
      className={
        "px-6 py-2 text-lg rounded-sm hover:shadow-lg border border-1 flex items-center gap-3" +
        getColor()
      }
    >
      {icon} <span>{text}</span>
    </button>
  );
};

export default PrimaryButton;
