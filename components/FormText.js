import React, { useState } from "react";
import { Text } from "../styles/components/FormText";
import Rocket from "./Rocket";

function FormText() {
  const [lunch, setLunch] = useState(false);

  return (
    <Text>
      <div>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna{" "}
        <button onClick={(e) => setLunch(true)}>LUNCH</button>.
      </div>
      <Rocket lunch={lunch} />
    </Text>
  );
}

export default FormText;
