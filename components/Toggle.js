import React from "react";
import {
  ToggleContainer,
  Slider,
  SwitchInput,
} from "../styles/components/Toggle";

const Toggle = (props) => {
  return (
    <ToggleContainer for="lab">
      .
      <SwitchInput
        name="lab"
        id="lab"
        type="checkbox"
        onClick={props.toggleTheme}
        className="slider"
        defaultChecked={props.theme == "dark" ? "on" : null}
      />
      <Slider />
    </ToggleContainer>
  );
};

export default Toggle;
