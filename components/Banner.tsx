import { BannerWrap, Title, Text } from "../styles/components/banner";

interface Banner {
  name: string;
  surname: string;
  text: any;
}

function Banner({ name, surname, text }: Banner, theme: any) {
  return (
    <div>
      <BannerWrap theme={theme}>
        <Title>
          {name} <br />
          {surname}
        </Title>
        <Text>{text}</Text>
      </BannerWrap>
    </div>
  );
}

export default Banner;
