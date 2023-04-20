import React from "react";

// Imports

export default function GreetingComponent(props) {
  const { mainText, subText } = props;
  return (
    <h2 className="mb-3 unselectable-text">
      Chào mừng đến với <span className="aero-bg">Notezy</span>! 📝
      <br />
      <span className="aero-bg">{mainText}</span> {subText}
    </h2>
  );
}
