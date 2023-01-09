import styled from "styled-components";

export const PostsWrap = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Post = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 3.2rem;
`;

export const Title = styled.div`
  font-size: 2.05rem;
  font-weight: 900;
  color: ${({ theme }) => theme.color};
  cursor: pointer;
`;

export const Description = styled.div`
  margin-top: .75rem;
  color: ${({ theme }) => theme.color};
  font-size: 1.15rem;
  line-height: 1.9;
`;

export const AdditionalInfo = styled.span`
  color: ${({ theme }) => theme.color};
  font-size: 0.85rem;
  line-height: 1.9;
`;

export const Date = styled.span`
  font-family: monospace;
  margin-left: .25rem;
`;
