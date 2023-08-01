import { TagButtonType } from "../lib/types";
import { TagCategory } from "../styles/components/tag";

export default function TagButton({
  onClick,
  text,
  color,
  active,
}: TagButtonType) {
  return (
    <TagCategory
      onClick={onClick}
      className={[color, active === text && "active-button"].join(" ")}
    >
      {text}
    </TagCategory>
  );
}
