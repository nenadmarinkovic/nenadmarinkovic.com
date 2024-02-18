import Image from 'next/image';
import { PhotoType } from '../lib/types';

const Photo = ({ id, alt, title, text }: PhotoType) => {
  return (
    <>
      <div>
        <h2>{title}</h2>
        <p>{text}</p>
      </div>
      <div style={{ width: '100%' }}>
        <Image
          alt={alt}
          className="photo"
          src={`/photography/${id}.JPG`}
          layout="responsive"
          width={0}
          height={0}
          quality={100}
        />
      </div>
    </>
  );
};

export default Photo;
