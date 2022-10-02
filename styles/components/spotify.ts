import styled from "styled-components";

export const SpotifyText = styled.div`
  margin-left: 10px;
  line-height: 1.8;

  a {
    color: white;
    margin-left: 5px;
    transition: all 0.25s linear;

    :hover {
      color: #08d55a;
    }
  }
`;

export const SpotifyIcon = styled.div`
  width: 30px;
  height: 30px;
`;

export const Spotify = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 1080px) {
    justify-content: center;
  }
`;

export const BoldText = styled.span`
  font-family: "Studio-Feixen-Sans Black";
`;