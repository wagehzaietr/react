import styled from "styled-components";

export const Btn = styled.button`
  outline: none;
  border: none;
  border-radius: 20px;
  background-color: ${({ bg }) => bg || "fff"};
  color: ${({ color }) => color || "333"};
  padding: 13px 45px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  font-weight: 700;
  &:hover {
    opacity: 0.9;
    transform: scale(0.98);
  }
`;
