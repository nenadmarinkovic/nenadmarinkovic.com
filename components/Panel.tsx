import {
  PanelInside,
  PanelWrap,
  Title,
  Text,
} from "../styles/components/panel";

function Panel() {
  return (
    <PanelWrap>
      <PanelInside>
        <Title> Lorem ipsum dolor sit amet</Title>
        <Text>
          Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, Lorem ipsum
          dolor sit amet
        </Text>
      </PanelInside>
    </PanelWrap>
  );
}

export default Panel;
