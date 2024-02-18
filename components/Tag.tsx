import { TagType } from '../lib/types';
import { TagSpan } from '../styles/components/tag';

function Tag({ color, text }: TagType) {
  return <TagSpan className={color}>{text}</TagSpan>;
}

export default Tag;
