import styled from "styled-components";

export const PostsWrap = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Post = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 2.5rem;
`;

export const Title = styled.div`
  font-size: 2.05rem;
  font-weight: 900;
  color: ${({ theme }) => theme.color};
  cursor: pointer;
`;

export const Description = styled.div`
  color: ${({ theme }) => theme.color};
  font-size: 1.15rem;
  line-height: 1.9;
`;

export const Date = styled.div`
  color: ${({ theme }) => theme.color};
  font-size: 0.85rem;
  line-height: 1.9;
  font-weight: 600;
`;
