import styled, { css } from "styled-components";

const dragActive = css`
  border-color: #78e5d5;
`;

const dragReject = css`
  border-color: #e57878;
`;

export const DropContainer = styled.div.attrs({
  className: "dropzone",
})`
  height: 46px;
  width: 100%;
  margin-bottom: 20px;
  border: 3px dashed #ddd;
  border-radius: 4px;
  cursor: pointer;
  transition: height 0.2s ease;
  ${(props) => props.isDragActive && dragActive};
  ${(props) => props.isDragReject && dragReject};
`;

const messageColors = {
  default: "#999",
  error: "#e57878",
  success: "#78e5d5",
};

export const UploadMessage = styled.p`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(props) => messageColors[props.type || "default"]};
  z-index: 3;
`;
