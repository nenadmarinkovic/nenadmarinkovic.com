import styled from "styled-components";

export const WorkSection = styled.div`
  text-align: center;
`;

export const WorkItem = styled.div``;
export const ItemText = styled.div`
  color: rgb(14, 144, 219);
  text-transform: uppercase;
  font-weight: 700;
  letter-spacing: 0.5px;
  font-size: 14px;
  margin-left: 10px;

`;

export const ItemTitle = styled.div`
  padding-bottom: 10px;
  display: flex;
  align-center: center;
`;

export const CenterMain = styled.div`
  font-size: 2rem;
  font-weight: 700;
  text-align: center;
  color: #040428;
  padding-top: 20px;

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
  line-height: 1.9;
  width: 60%;
  text-align: center;

  @media (max-width: 960px) {
    width: 100%;
  }
`;

export const WorkWrap = styled.div`
  text-align: start;
  margin-top: 80px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 120px;

  @media (max-width: 960px) {
    flex-direction: column;
    text-align: center;
    margin-top: 0;
  }
`;

export const WorkDetails = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-size: 18px;
  width: 50%;
  margin-left: 30px;

  @media (max-width: 960px) {
    width: 100%;
    margin-left: 0;
  }
`;

export const ListItem = styled.div`
  list-style: none;
  line-height: 1.8;
`;
