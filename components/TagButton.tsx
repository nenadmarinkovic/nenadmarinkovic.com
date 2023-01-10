import { TagCategory } from "../styles/components/tag";

interface TagButtonComponent {
  color: string;
  text: string;
  onClick?: React.MouseEventHandler<HTMLElement>;
}

const TagButton: React.FC<TagButtonComponent> = ({ onClick, text, color }) => (
  <TagCategory onClick={onClick} className={color}>
    {text}
  </TagCategory>
);

export default TagButton;
