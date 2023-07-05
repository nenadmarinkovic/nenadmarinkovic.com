import { BannerWrap, Text } from "../styles/components/banner";

interface Banner {
  name: string;
  surname?: string;
  margin?: string;
}

function Banner({ name, surname, margin }: Banner, theme: any) {
  return (
    <BannerWrap theme={theme} style={{ marginBottom: `${margin}` }}>
      <Text>
        {name} {surname}
      </Text>
    </BannerWrap>
  );
}

export default Banner;
