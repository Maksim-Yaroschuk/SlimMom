import styled from 'styled-components';

export const MainLoader = styled.div`
  position: fixed;
  z-index: 10;
  top: 0;
  left: 0;
  border-radius: 0 px;
  width: 100%;
  height: 100%;
  background-color: rgba(192, 192, 192);
  @media screen and (min-width: 767px) {
    border-radius: 5px;
  }
`;

export const LoaderWrapper = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
`;
