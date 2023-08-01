import { BannerType, ThemeType } from "../lib/types";
import { BannerWrap, Text } from "../styles/components/banner";

type PropTypes = BannerType & ThemeType;

function Banner({ name, surname, margin, withWidth, theme }: PropTypes) {
  return (
    <BannerWrap theme={theme} style={{ marginBottom: `${margin}` }}>
      <Text className={withWidth && "with-width"}>
        {name} {surname}
      </Text>
    </BannerWrap>
  );
}

export default Banner;
