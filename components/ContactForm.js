import React, { useState } from "react";
import axios from "axios";
import FormText from "../components/FormText";
import {
  FlexContainer,
  MainForm,
  FormContainer,
  FormLabel,
  FormInput,
  TextArea,
  Button,
  Error,
  Message,
  Copyright,
} from "../styles/components/ContactForm";

export default function ContactForm() {
  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null },
  });
  const [inputs, setInputs] = useState({
    email: "",
    message: "",
  });
  const handleServerResponse = (ok, msg) => {
    if (ok) {
      setStatus({
        submitted: true,
        submitting: false,
        info: { error: false, msg: msg },
      });
      setInputs({
        email: "",
        message: "",
      });
    } else {
      setStatus({
        info: { error: true, msg: msg },
      });
    }
  };
  const handleOnChange = (e) => {
    e.persist();
    setInputs((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
    setStatus({
      submitted: false,
      submitting: false,
      info: { error: false, msg: null },
    });
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    setStatus((prevStatus) => ({ ...prevStatus, submitting: true }));
    axios({
      method: "POST",
      url: "https://formspree.io/mlepzoay",
      data: inputs,
    })
      .then((response) => {
        handleServerResponse(
          true,
          "Thank you, your message has been submitted."
        );
      })
      .catch((error) => {
        handleServerResponse(false, error.response.data.error);
      });
  };

  return (
    <>
      <FlexContainer>
        <FormText />
        <MainForm>
          <FormContainer onSubmit={handleOnSubmit}>
            <FormLabel htmlFor="email">Your Email</FormLabel>
            <FormInput
              id="email"
              type="email"
              name="_replyto"
              onChange={handleOnChange}
              required
              value={inputs.email}
            />
            <FormLabel htmlFor="message">Your Message</FormLabel>
            <TextArea
              id="message"
              name="message"
              onChange={handleOnChange}
              required
              value={inputs.message}
            />
            <Button type="submit" disabled={status.submitting}>
              {!status.submitting
                ? !status.submitted
                  ? "Submit"
                  : "Submitted"
                : "Submitting..."}
            </Button>
          </FormContainer>
          {status.info.error && <Error>Error: {status.info.msg}</Error>}
          {!status.info.error && status.info.msg && (
            <Message>{status.info.msg}</Message>
          )}
        </MainForm>
      </FlexContainer>
      <Copyright>© {new Date().getFullYear()} Nenad Marinković</Copyright>
    </>
  );
};
