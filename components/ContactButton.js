import React from "react";
import { Button } from "../styles/components/ContactButton";
import ScrollIntoView from "react-scroll-into-view";

function ContactButton() {
  return (
    <ScrollIntoView
      selector="#contact"
      style={{ display: "inline-block" }}
    >
      <a>
      <Button>Contact me</Button>
      </a>
     
    </ScrollIntoView>
  );
}

export default ContactButton;
