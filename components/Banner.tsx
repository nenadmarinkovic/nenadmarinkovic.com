import { Container } from "../styles/components/layout";
import { Main, Title, Text } from "../styles/components/banner";

interface Banner {
  name: string;
  surname: string;
  text: any;
}

function Banner({ name, surname, text }: Banner, theme: any) {
  return (
    <div>
      <Container theme={theme}>
        <Main>
          <Title>
            {name} <br />
            {surname}
          </Title>
          <Text>{text}</Text>
        </Main>
      </Container>
    </div>
  );
}

export default Banner;
