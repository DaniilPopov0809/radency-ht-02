import styled from "@emotion/styled";

export const TextLogo = styled.span`
  font-size: 28px;
  margin-left: 8px;
  font-weight: 600;
`;

export const Link = styled.a`
  transition: scale 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    scale: 1.02;
  }
`;
