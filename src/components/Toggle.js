import React, { useState } from "react";

function Toggle() {
  // To create a state variable in our component, we need to call useState
  // and provide an initial value
  const [isOn, setIsOn] = useState(false);

  // Call the setter function to update our state variable
  function handleClick() {
    setIsOn((isOn) => !isOn);
  }

  const color = isOn ? "red" : "white";

  // Use the isOn variable to determine what text to display in the button and its color
  return (
    <button style={{ background: color }} onClick={handleClick}>
      {isOn ? "ON" : "OFF"}
    </button>
  );
}

export default Toggle;
