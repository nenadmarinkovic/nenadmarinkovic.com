import styled from "styled-components";

export const PostsWrap = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1.5rem;
`;

export const Post = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 3.5rem;

  :first-child {
    margin-top: 1.5rem;
  }
`;

export const Title = styled.h2`
  font-size: 2.05rem;
  font-weight: 900;
  color: ${({ theme }) => theme.color};
  cursor: pointer;
  margin: 0;
`;

export const Description = styled.div`
  margin-top: 0.75rem;
  color: ${({ theme }) => theme.colorLight};
  font-size: 1.15rem;
  line-height: 1.9;
`;

export const AdditionalInfo = styled.span`
  color: ${({ theme }) => theme.color};
  font-size: 0.9rem;
  line-height: 1.9;
`;

export const Date = styled.span`
  font-family: monospace;
  margin-left: 0.25rem;
`;
