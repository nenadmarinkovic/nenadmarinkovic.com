import React from "react";
import { Button } from "../styles/components/ContactButton";
import ScrollIntoView from "react-scroll-into-view";

function ContactButton() {
  return (
    <ScrollIntoView selector="#contact" className="contact-button">
      <Button>Contact me</Button>
    </ScrollIntoView>
  );
}

export default ContactButton;
