import styled from "styled-components";

export const Flex = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  border-radius: 18px;
  margin-bottom: 80px;

  @media (max-width: 800px) {
    flex-direction: column;
    padding: 0;
  }
`;

export const Text = styled.div`
  font-size: 18px;
  line-height: 1.8;
  width: 55%;
  margin-left: 30px;

  @media (max-width: 800px) {
    width: 100%;
    margin-left: 0;
  }
`;

export const Social = styled.div`
  color: rgb(14, 144, 219);
  text-transform: uppercase;
  font-weight: 700;
  letter-spacing: 0.5px;
  font-size: 14px;
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
`;

export const SocialLink = styled.a`
  margin-left: 15px;
  width: 25px;
`;

export const Image = styled.img`
  width: 205px;
  margin: 30px;
  border-radius: 18px;
  position: relative;
  background: #e3f0fa;
  padding-right: 10px;
  pointer-events: none;

  @media (max-width: 960px) {
    width: 260px;
    padding-right: 0;
  }

  @media (max-width: 480px) {
    width: 100%;
    padding-right: 0;
  }
`;

export const CenterMain = styled.div`
  font-size: 2rem;
  font-weight: 700;
  text-align: center;
  color: #040428;
  padding-top: 20px;
  margin-top: -200px;

  @media (max-width: 960px) {
    margin-top: 0;
  }
`;

export const CenterSecond = styled.div`
  font-size: 21px;
  font-weight: 400;
  color: #040428;
  margin: 0 auto;
  padding-top: 20px;
  line-height: 1.5;
  width: 50%;
  padding-bottom: 60px;
  text-align: center;

  @media (max-width: 960px) {
    width: 100%;
  }
`;
