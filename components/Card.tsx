import { Container, Flex } from "../styles/components/layout";

interface Card {
  title: string;
  text: string;
  reversed: boolean;
}

function Card({ title, text, reversed }: Card) {
  return (
    <Container>
      <Flex className={reversed ? "row-reverse" : "row"}>
        <div>{title}</div>
        <div>{text}</div>
      </Flex>
    </Container>
  );
}

export default Card;
