import React from "react";
import { Button } from "../styles/components/ContactButton";
import ScrollIntoView from "react-scroll-into-view";
import Fade from "react-reveal/Fade";

function ContactButton() {
  return (
    <Fade delay={300}>

        <ScrollIntoView selector="#contact">
          <Button>Contact me</Button>
        </ScrollIntoView>

    </Fade>
  );
}

export default ContactButton;
