import { StyledBurger } from "../styles/components/StyledBurger";

const Burger = ({ open, setOpen }) => {
  return (
    <StyledBurger open={open} onClick={() => setOpen(!open)}>
      <div />
      <div />
    </StyledBurger>
  );
};

export default Burger;
