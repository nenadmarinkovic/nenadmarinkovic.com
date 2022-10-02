import { Container } from "../styles/components/layout";
import { BannerWrap, Title, Text } from "../styles/components/banner";

interface Banner {
  name: string;
  surname: string;
  text: any;
}

function Banner({ name, surname, text }: Banner, theme: any) {
  return (
    <div>
      <Container theme={theme}>
        <BannerWrap >
          <Title>
            {name} <br />
            {surname}
          </Title>
          <Text>{text}</Text>
        </BannerWrap>
      </Container>
    </div>
  );
}

export default Banner;
