import styled from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(33, 33, 33, 0.12);
  z-index: 1200;
`;

export const ModalWindow = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: 672px;
  border-radius: 10px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  background: #ffffff;
  width: 100vw;
  height: 100vh;
  @media screen and (max-width: 767px) {
    top: 485px;
    border-radius: 0px;
    box-shadow: none;
  }
  @media screen and (min-width: 767px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 672px;
    height: 572px;
  }
`;

