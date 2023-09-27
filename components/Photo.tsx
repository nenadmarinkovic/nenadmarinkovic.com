import Image from "next/image";
import { PhotoProps } from "../lib/types";

const Photo = ({ id, alt, title, text }: PhotoProps) => {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div>
        <h2>{title}</h2>
        <p>{text}</p>
      </div>
      <Image
        alt={alt}
        className="photo"
        src={`/photography/${id}.JPG`}
        layout="responsive"
        width={0}
        height={0}
        style={{
          width: "100%",
          height: "auto",
        }}
        quality={100}
      />
    </div>
  );
};

export default Photo;
