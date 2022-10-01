import { Container } from "../styles/components/layout";
import { Main, Title, Text } from "../styles/components/banner";

interface Banner {
  name: string;
  surname: string;
  text: string;
}

function Banner({ name, surname, text }: Banner) {
  return (
    <div>
      <Container>
        <Main>
          <Title>
            <span>{name}</span>
            <span>{surname}</span>
          </Title>
          <Text>{text}</Text>
        </Main>
      </Container>
    </div>
  );
}

export default Banner;
