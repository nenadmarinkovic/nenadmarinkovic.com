import Image from "next/image";

interface PhotoProps {
  src: string;
  alt: string;
}

const Photo: React.FC<PhotoProps> = ({ src, alt }) => {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <Image
        alt={alt}
        className="photo"
        src={`/photography/${src}.JPG`}
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
