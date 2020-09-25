import React, { useState } from "react";
import { Text, Button } from "../styles/components/FormText";
import Rocket from "./Rocket";

function FormText() {
  const [launch, setLaunch] = useState(false);
  const [text, setText] = useState("the rocket with me?");

  return (
    <Text>
      <div
        onTouchEnd={() => {
          !launch
            ? setText("the rocket with me?")
            : setText("a new project with me?");
        }}
        onMouseUp={() => {
          setTimeout(() => {
            setText("a new project with me?");
          }, 2000);
        }}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor. <br></br> Ready to{" "}
        <Button
          style={
            launch
              ? { color: "unset", cursor: "auto", transition: ".3s" }
              : { color: "#2366ce", transition: ".3s" }
          }
          onClick={(e) => setLaunch(true)}
        >
          launch
        </Button>{" "}
        {text}
      </div>
      <Rocket launch={launch} />
    </Text>
  );
}

export default FormText;
