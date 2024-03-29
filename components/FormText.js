import React, { useState } from "react";
import { Text, Button, RocketText } from "../styles/components/FormText";
import Rocket from "./Rocket";

function FormText() {
  const [launch, setLaunch] = useState(false);
  const [text, setText] = useState("the rocket with me?");

  return (
    <Text>
      <RocketText
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
        From idea and goals, to design and global deployment.
        <br></br> Ready to{" "}
        <Button
          style={
            launch
              ? {
                  fontWeight: "normal",
                  color: "unset",
                  cursor: "auto",
                  transition: ".3s",
                }
              : { color: "#0e90db", transition: ".3s", fontWeight: "normal" }
          }
          onClick={(e) => setLaunch(true)}
        >
          launch
        </Button>{" "}
        {text}
      </RocketText>
      <Rocket launch={launch} />
    </Text>
  );
}

export default FormText;
