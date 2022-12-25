import styled from 'styled-components';

export const MainLoader = styled.div`
  position: fixed;
  z-index: 10;
  top: 0;
  left: 0;

  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
`;

export const LoaderWrapper = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
`;
