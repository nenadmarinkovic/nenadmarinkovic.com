import React from "react";
import Image from "next/image";
import { QrWrap } from "../styles/components/qr";

function Qr({ image }: any) {
  return (
    <QrWrap>
      <Image src={image} width={150} height={150} alt={"QR"} />
    </QrWrap>
  );
}

export default Qr;