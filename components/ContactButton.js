import React from "react";
import { Button } from "../styles/components/ContactButton";
import ScrollIntoView from "react-scroll-into-view";

function ContactButton() {
  return (
    <a style={{display: "inline-block"}}>
      <ScrollIntoView selector="#contact">
        <Button>Contact me</Button>
      </ScrollIntoView>
    </a>
  );
}

export default ContactButton;
