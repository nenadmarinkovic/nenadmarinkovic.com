import { TagSpan } from "../styles/components/tag";

interface Tag {
  color: string;
  text: string;
  cursor?: boolean;
  filterCategory?: (...args: any[]) => any;
  onClick?: (...args: any[]) => any;
}

function Tag({ color, text, cursor }: Tag) {
  return (
    <TagSpan className={`${color} ${cursor && "show-cursor"}`}>{text}</TagSpan>
  );
}

export default Tag;
