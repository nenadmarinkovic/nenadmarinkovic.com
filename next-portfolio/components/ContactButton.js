import React from "react";

import styled from "styled-components";

const Button = styled.button`
  padding: 10px 15px;
  margin-top: 10px;
  color: ${({ theme }) => theme.buttonColor};
  border: ${({ theme }) => theme.buttonBorder};
  background: transparent;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  border-radius: 18px;
  padding-left: 18px;
  padding-right: 18px;
  padding-top: 7px;
  padding-bottom: 7px;
  font-family: "Steradian";
`;

function ContactButton() {
  return <Button>Contact me</Button>;
}

export default ContactButton;
