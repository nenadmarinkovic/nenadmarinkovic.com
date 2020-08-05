import React, { useState } from "react";
import { Text, Button } from "../styles/components/FormText";
import Rocket from "./Rocket";

function FormText() {
  const [lunch, setLunch] = useState(false);
  
  return (
    <Text>
      <div>
        Ready to{" "}
        <Button
          style={
            lunch ? { color: "unset", cursor: "auto" } : { color: "#2196f3" } 
          }
          onClick={(e) => setLunch(true)}
        >
          launch
        </Button>{" "}
        a new project with me?
      </div>
      <Rocket lunch={lunch} />
    </Text>
  );
}

export default FormText;
