import { Container } from "../styles/components/layout";
import {
  PanelInside,
  PanelWrap,
  Title,
  Text,
} from "../styles/components/panel";

function Panel() {
  return (
    <>
      <Container>
        <PanelWrap>
          <PanelInside>
            <Title> Lorem ipsum dolor sit amet</Title>
            <Text>
              Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, Lorem
              ipsum dolor sit amet
            </Text>
          </PanelInside>
        </PanelWrap>
      </Container>
    </>
  );
}

export default Panel;
