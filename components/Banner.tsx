import { BannerWrap, Text } from "../styles/components/banner";

interface Banner {
  name: string;
  surname?: string;
  margin?: string;
  withWidth?: Boolean;
}

function Banner({ name, surname, margin, withWidth }: Banner, theme: any) {
  return (
    <BannerWrap theme={theme} style={{ marginBottom: `${margin}` }}>
      <Text className={withWidth && "with-width"}>
        {name} {surname}
      </Text>
    </BannerWrap>
  );
}

export default Banner;
