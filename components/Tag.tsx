import { TagSpan } from "../styles/components/tag";

interface Tag {
  color: string;
  text: string;
}

function Tag({ color, text }: Tag) {
  return <TagSpan className={color}>{text}</TagSpan>;
}

export default Tag;
