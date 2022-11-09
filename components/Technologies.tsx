import React from "react";
import { Logos, Logo, Row } from "../styles/components/technologies";
import Image from "next/image";

function Technologies() {
  return (
    <Logos>
      <Row>
        <Logo title="React">
          <Image src="/logos/react.svg" alt="React" width={100} height={30} />
        </Logo>
        <Logo title="TypeScript">
          <Image src="/logos/ts.svg" alt="TypeScript" width={90} height={30} />
        </Logo>
        <Logo title="Next.js">
          <Image src="/logos/nextjs.svg" alt="Next.js" width={90} height={30} />
        </Logo>
        <Logo title="Node.js">
          <Image src="/logos/nodejs.svg" alt="Node.js" width={62} height={30} />
        </Logo>
        <Logo title="Vue.js">
          <Image src="/logos/vuejs.svg" alt="Vue.js" width={62} height={30} />
        </Logo>
      </Row>

      <Row>
        <Logo title="Sanity">
          <Image src="/logos/sanity.svg" alt="Sanity" width={90} height={30} />
        </Logo>
        <Logo title="Firebase">
          <Image
            src="/logos/firebase.svg"
            alt="Firebase"
            width={110}
            height={30}
          />
        </Logo>
        <Logo title="Figma">
          <Image src="/logos/figma.svg" alt="Figma" width={70} height={30} />
        </Logo>
      </Row>
    </Logos>
  );
}

export default Technologies;
