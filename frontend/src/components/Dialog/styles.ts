import styled from "styled-components";

export const DialogContainer = styled.div`
  height: 200px;
  width: 50%;
  margin-top: -150px;
  margin-bottom: 20px;
  margin-left: -150px;
  position: absolute;
  left: 50%;
  top: 50%;
  z-index: 3;

  dialog {
    border-radius: 10px;
    height: 100%;
    width: 100%;
    border: none;
    text-align: center;

    h2 {
      align-self: flex-start;
      margin: 30px 0;
    }

    div {
      width: 100%;
      height: 50px;
      position: absolute;
      bottom: 0;
      display: flex;
      gap: 10px;
      justify-content: flex-end;
      align-items: center;

      button {
        background-color: red;
        height: 30px;
        width: 50px;
        border: none;
        border-radius: 5px;
        color: #fff;
        cursor: pointer;

        &:last-child {
          background-color: blue;
          margin-right: 20px;
        }

        &:hover {
          opacity: 0.5;
        }
      }
    }
  }
`;
