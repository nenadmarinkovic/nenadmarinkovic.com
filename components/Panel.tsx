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
        <Title> Let&apos;s build together.</Title>
        <Text>
          Web is an unique platform for creativity, businesses, and growth.
          Let&apos;s combine your idea with my technical know-how to build amazing
          projects. Together.
        </Text>
      </PanelInside>
    </PanelWrap>
  );
}

export default Panel;
