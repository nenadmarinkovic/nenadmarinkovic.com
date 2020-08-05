import React, { useState } from "react";
import { Text, Button } from "../styles/components/FormText";
import Rocket from "./Rocket";

function FormText() {
  const [launch, setlaunch] = useState(false);

  return (
    <Text>
      <div>
        Ready to{" "}
        <Button
          style={
            launch
              ? { color: "unset", cursor: "auto", transition: ".3s" }
              : { color: "#2196f3", transition: ".3s" }
          }
          onClick={(e) => setlaunch(true)}>launch</Button> a new project with me?
      </div>
      <Rocket launch={launch} />
    </Text>
  );
}

export default FormText;
