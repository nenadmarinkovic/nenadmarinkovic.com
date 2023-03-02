import { TagCategory } from "../styles/components/tag";

interface TagButtonComponent {
  color: string;
  text: string;
  onClick?: React.MouseEventHandler<HTMLElement>;
  active?: string | boolean;
}

const TagButton: React.FC<TagButtonComponent> = ({
  onClick,
  text,
  color,
  active,
}) => (
  <TagCategory
    onClick={onClick}
    className={[color, active === text && "active-button"].join(" ")}
  >
    {text}
  </TagCategory>
);

export default TagButton;
