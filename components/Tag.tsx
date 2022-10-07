import React, { useState } from "react";
import { TagWrap } from "../styles/components/tag";

interface Tag {
  color: string;
  text: string;
}

function Tag({ color, text }: Tag) {
  return <TagWrap className={color}>{text}</TagWrap>;
}

export default Tag;
