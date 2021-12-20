import styled from "styled-components";

export const LabelContainer = styled.div`
  width: 100%;
  height: 46px;
  background: ${({ theme }) => theme.colors.background};
  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-radius: 10px;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  z-index: 3;
  cursor: pointer;

  label {
    text-align: center;
    font-size: 0.75rem;
    font-weight: 400;
    background: transparent;
    border: 0;
    width: 100%;
    margin: 0 20px;
    cursor: pointer;
  }
`;
