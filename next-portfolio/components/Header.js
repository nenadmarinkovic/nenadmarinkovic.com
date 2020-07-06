import React from "react";
import Link from "next/link";
import Toggle from "./Toggle";

import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
`;

function Header(props) {
  return (
    <div className="container">
      <Container>
        <Link href="/">Nenad Marinkovic</Link>
        <Toggle theme={props.theme} toggleTheme={props.toggleTheme} />
      </Container>
    </div>
  );
}

export default Header;
