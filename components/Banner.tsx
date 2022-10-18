import { BannerWrap, Text } from "../styles/components/banner";

interface Banner {
  name: string;
  surname?: string;
}

function Banner({ name, surname }: Banner, theme: any) {
  return (
    <BannerWrap theme={theme}>
      <Text>{name}</Text>
      <Text>{surname}</Text>
    </BannerWrap>
  );
}

export default Banner;
