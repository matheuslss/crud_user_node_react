import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const Card = styled.div`
  background: ${({ theme }) => theme.colors.background};
  height: 520px;
  width: 400px;
  margin-top: 40px;
  padding: 20px 20px 10px;
  display: flex;
  border-radius: 20px;
  box-shadow: 5px 4px 6px rgba(0, 0, 0, 0.25);
  align-items: center;
  flex-direction: column;
  z-index: 5000;

  input[type="file"] {
    display: none;
  }

  h1 {
    margin-bottom: 40px;
  }

  h2 {
    align-self: flex-start;

    &:not(:last-child) {
      margin-bottom: 10px;
    }
  }

  button {
    margin-top: 20px;
    cursor: pointer;
  }
`;

export const InputContainer = styled.div`
  width: 100%;
  height: 46px;
  background: ${({ theme }) => theme.colors.background};
  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-radius: 10px;
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
  z-index: 5000;
  input {
    font-size: 0.75rem;
    font-weight: 400;
    background: transparent;
    border: 0;
    width: 100%;
    margin: 0 20px;
  }
`;
