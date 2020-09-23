import React from "react";
import { Button } from "../styles/components/ContactButton";
import ScrollIntoView from "react-scroll-into-view";

function ContactButton() {
  return (
    <Button>
      <ScrollIntoView selector="#contact">Contact me</ScrollIntoView>
    </Button>
  );
}

export default ContactButton;
