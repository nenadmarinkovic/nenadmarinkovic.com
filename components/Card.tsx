import { Container } from "../styles/components/layout";
import {
  Item,
  Text,
  Box,
  Title,
  Description,
  BoxTitle,
  BoxText,
  BoxIcon,
} from "../styles/components/card";

interface Card {
  title: string;
  description: string;
  reversed: boolean;
  boxColor: string;
  boxTitle: string;
  boxText: string;
}

function Card({
  title,
  description,
  reversed,
  boxColor,
  boxTitle,
  boxText,
}: Card) {
  const setBoxColor = () =>
    boxColor === "pink" ? "pink" : boxColor === "blue" ? "blue" : "green";

  return (
    <Container>
      <Item className={reversed ? "row-reverse" : "row"}>
        <Text>
          <Title>{title}</Title>
          <Description>{description}</Description>
        </Text>
        <Box className={setBoxColor()}>
          <div>
            <BoxTitle>{boxTitle}</BoxTitle>
            <BoxText>{boxText}</BoxText>
          </div>
          <BoxIcon>
            <svg
              width="37"
              height="37"
              viewBox="0 0 86 87"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M42.3718 29.6195L43.5265 57.1536M56.5964 43.3866L29.3019 43.3866M83.891 43.3866C84.1184 48.8103 83.2846 54.181 81.4372 59.1918C79.5899 64.2027 76.765 68.7558 73.1241 72.5909C69.4831 76.4261 65.0973 79.4683 60.217 81.5439C55.3368 83.6195 50.0577 84.6878 44.6811 84.6878C39.3045 84.6878 33.9358 83.6195 28.8815 81.5439C23.8272 79.4683 19.1862 76.4261 15.2236 72.5909C11.261 68.7558 8.05429 64.2027 5.78664 59.1918C3.51899 54.181 2.23478 48.8103 2.00734 43.3866C1.548 32.4328 5.42097 21.9277 12.7742 14.1822C20.1275 6.43669 30.3588 2.08533 41.2172 2.08533C52.0756 2.08533 62.6718 6.43669 70.6747 14.1822C78.6776 21.9277 83.4316 32.4328 83.891 43.3866Z"
                stroke="white"
                stroke-width="3.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </BoxIcon>
        </Box>
      </Item>
    </Container>
  );
}

export default Card;
