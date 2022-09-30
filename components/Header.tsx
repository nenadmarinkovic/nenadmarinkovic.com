import { Container } from "../styles/components/layout";
import { Top, Main, Logo, Links, Link } from "../styles/components/header";

function Header() {
  return (
    <div>
      <Top />
      <Container>
        <Main>
          <Logo>Home</Logo>
          <Links>
            <Link>Work</Link>
            <Link>Projects</Link>
            <Link>Contact</Link>
            <Link>Dark mode</Link>
          </Links>
        </Main>
      </Container>
    </div>
  );
}

export default Header;
