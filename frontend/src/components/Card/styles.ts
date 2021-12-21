import styled from "styled-components";

export const CardContainer = styled.div`
  background: #333;
  position: relative;
  height: 300px;
  width: 280px;
  margin: 0 auto;
  padding: 20px;
  flex: 1 1 300px;
  border-radius: 10px;
  box-sizing: border-box;
  text-align: center;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.5);
  overflow: hidden;
`;

export const CardLayer = styled.div`
  background: linear-gradient(#03a9f4, #e91ee3);
  height: 100%;
  width: 100%;
  position: absolute;
  top: calc(100% - 2px);
  left: 0;
  z-index: 1;
  transition: 0.5s;

  ${CardContainer}:hover & {
    top: 0;
  }
`;

export const CardContent = styled.div`
  position: relative;
  color: #fff;
  z-index: 2;

  h2 {
    font-size: 18px;
    margin: 10px 0 10px;
  }
`;

export const CardAvatar = styled.div`
  height: 100px;
  width: 100px;
  margin: 0 auto;
  border-radius: 50%;
  overflow: hidden;
  border: 4px solid #fff;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
`;

export const CardIcons = styled.div`
  margin-top: 40px;
  display: flex;
  gap: 20px;
  font-size: 24px;
  justify-content: center;
  align-items: center;

  a {
    display: flex;
    color: #fff;
  }

  button {
    display: flex;
    color: #fff;
    border: none;
    font-size: 24px;

    &:hover {
      border: none;
    }
  }

  svg {
    cursor: pointer;
  }
`;
