import React, { useState } from "react";
import axios from "axios";

import {
  FormWrap,
  FormContainer,
  FormLabel,
  FormInput,
  FormText,
  TextArea,
  FormBottom,
  Button,
  Error,
} from "../styles/components/form";
import { motion, AnimatePresence } from "framer-motion";

function ContactForm() {
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
    target: { id: string; value: string };
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
        handleServerResponse(true, "Your message has been submitted.");
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
          <FormBottom>
            <AnimatePresence mode="wait">
              {status.info.error && <Error>Error: {status.info.msg}</Error>}
              {!status.info.error && status.info.msg && (
                <motion.div
                  initial={{ y: 10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -10, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <FormText>{status.info.msg}</FormText>
                </motion.div>
              )}
            </AnimatePresence>
            {!status.submitted && (
              <FormText>
                Thanks for your interest in contacting me. I&apos;ll give my
                best to get back to you in less than 48 hours.
              </FormText>
            )}
            <Button
              type="submit"
              disabled={status.submitting || status.submitted}
            >
              <span>
                {!status.submitting
                  ? !status.submitted
                    ? "Send"
                    : "Sent"
                  : "Sending"}
              </span>
              {!status.submitted && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="contact-icon"
                >
                  <path
                    strokeLinecap="round"
                    stroke-linejoin="round"
                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                  />
                </svg>
              )}
            </Button>
          </FormBottom>
        </FormContainer>
      </FormWrap>
    </>
  );
}

export default ContactForm;
