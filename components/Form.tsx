import React, { useState } from "react";
import axios from "axios";

import {
  FormWrap,
  FormContainer,
  FormLabel,
  FormInput,
  TextArea,
  Button,
  Error,
  Message,
} from "../styles/components/form";

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
  const handleServerResponse = (ok: boolean, msg: any) => {
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
    }
  };
  const handleOnChange = (e: {
    persist: () => void;
    target: { id: any; value: any };
  }) => {
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
  const handleOnSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setStatus((prevStatus) => ({ ...prevStatus, submitting: true }));
    axios({
      method: "POST",
      url: "https://formspree.io/f/mlepzoay",
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
      <FormWrap>
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
            <span>
              {!status.submitting
                ? !status.submitted
                  ? "Send"
                  : "Sent"
                : "Sending..."}
            </span>

            <svg
              width="13"
              height="11"
              viewBox="0 0 13 11"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <mask
                maskUnits="userSpaceOnUse"
                x="0"
                y="0"
                width="13"
                height="11"
                fill="black"
              >
                <rect fill="white" width="13" height="11" />
                <path d="M7.14645 1.14645C7.34171 0.951182 7.65829 0.951182 7.85355 1.14645L11.8536 5.14645C12.0488 5.34171 12.0488 5.65829 11.8536 5.85355L7.85355 9.8536C7.65829 10.0488 7.34171 10.0488 7.14645 9.8536C6.95118 9.6583 6.95118 9.3417 7.14645 9.1464L10.2929 6H1.5C1.22386 6 1 5.77614 1 5.5C1 5.22386 1.22386 5 1.5 5H10.2929L7.14645 1.85355C6.95118 1.65829 6.95118 1.34171 7.14645 1.14645Z" />
              </mask>
              <path
                d="M7.14645 1.14645C7.34171 0.951182 7.65829 0.951182 7.85355 1.14645L11.8536 5.14645C12.0488 5.34171 12.0488 5.65829 11.8536 5.85355L7.85355 9.8536C7.65829 10.0488 7.34171 10.0488 7.14645 9.8536C6.95118 9.6583 6.95118 9.3417 7.14645 9.1464L10.2929 6H1.5C1.22386 6 1 5.77614 1 5.5C1 5.22386 1.22386 5 1.5 5H10.2929L7.14645 1.85355C6.95118 1.65829 6.95118 1.34171 7.14645 1.14645Z"
                fill="black"
              />
              <path
                d="M7.14645 1.14645C7.34171 0.951182 7.65829 0.951182 7.85355 1.14645L11.8536 5.14645C12.0488 5.34171 12.0488 5.65829 11.8536 5.85355L7.85355 9.8536C7.65829 10.0488 7.34171 10.0488 7.14645 9.8536C6.95118 9.6583 6.95118 9.3417 7.14645 9.1464L10.2929 6H1.5C1.22386 6 1 5.77614 1 5.5C1 5.22386 1.22386 5 1.5 5H10.2929L7.14645 1.85355C6.95118 1.65829 6.95118 1.34171 7.14645 1.14645Z"
                stroke="black"
                strokeWidth="0.5"
                mask="url(#path-1-outside-1_408_3)"
              />
            </svg>
          </Button>
        </FormContainer>
        {status.info.error && <Error>Error: {status.info.msg}</Error>}
        {!status.info.error && status.info.msg && (
          <Message>{status.info.msg}</Message>
        )}
      </FormWrap>
    </>
  );
}
