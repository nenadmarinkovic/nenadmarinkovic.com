const backgroundLight =
  "linear-gradient(0deg, rgba(254,227,153,1) 0%, rgba(170,211,242,1) 73%)";
const backgroundDark =
  "linear-gradient(0deg, rgba(2,0,36,1) 0%, rgba(34,79,142,1) 61%);";

const buttonBorderDark = "1.5px solid #FAFAFA";
const buttonColorDark = "#FAFAFA";
const buttonBorderLight = "1.5px solid #363537";
const buttonColorLight = "#363537";

const subtitleTextLight = "#363537";

export const lightTheme = {
  background: backgroundLight,
  text: "#363537",
  gradient: "linear-gradient(#39598A, #79D7ED)",
  wave: "#FEE399",
  display: "none",
  buttonBorder: buttonBorderLight,
  buttonColor: buttonColorLight,
  subtitleText: subtitleTextLight,
  toggleBorder: '#fff',
  gradient: 'linear-gradient(#39598A, #79D7ED)',

 
};

export const darkTheme = {
  background: backgroundDark,
  text: "#FAFAFA",
  gradient: "linear-gradient(#091236, #1E215D)",
  wave: "linear-gradient(180deg, rgba(1, 0, 27, 1) 90%, rgba(0, 0, 0, 1) 10%);",
  display: "unset",
  buttonBorder: buttonBorderDark,
  buttonColor: buttonColorDark,
  toggleBorder: '#6B8096',
  gradient: 'linear-gradient(#091236, #1E215D)',
};
