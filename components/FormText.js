import React, { useState } from "react";
import { Text, Button } from "../styles/components/FormText";
import Rocket from "./Rocket";

function FormText() {
  const [launch, setLaunch] = useState(false);
  const [text, setText] = useState("the rocket with me?");

  return (
    <Text>
      <div
        style={{ paddingTop: "10px" }}
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
        From your idea and project's goals, to building and global
        deployment.
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
      </div>
      <Rocket launch={launch} />
    </Text>
  );
}

export default FormText;
