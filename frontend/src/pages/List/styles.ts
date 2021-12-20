import styled from "styled-components";

export const ListContainer = styled.div`
  margin: 25px auto 25px;
  padding: 0 20px;
  display: grid;
  grid-area: content;
  grid-gap: 20px;
  grid-template-columns: repeat(3, 1fr);

  @media (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 850px) {
    grid-template-columns: 1fr;
  }
`;
