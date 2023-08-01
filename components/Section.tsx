import React from "react";
import { Title } from "../styles/components/section";
import { TitleType } from "../lib/types";

function Section({ title }: TitleType) {
  return <Title>{title}</Title>;
}

export default Section;
