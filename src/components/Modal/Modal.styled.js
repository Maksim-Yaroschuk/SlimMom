import styled from 'styled-components';
import { MdClose } from 'react-icons/md';
import { FiCornerDownLeft } from 'react-icons/fi';

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
  border-radius: 5px;
  @media (max-width: 767px) {
    top: 470px;
    border-radius: 0px;
    box-shadow: none;
  }
  @media (min-width: 767px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 672px;
    height: 572px;
  }
`;

export const ButtonClose = styled(MdClose)`
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;
  width: 20px;
  height: 20px;
  padding: 0;
  z-index: 10;
  &:hover,
  :focus {
    color: ${p => p.theme.colors.hover};
  }
  @media (max-width: 767px) {
    display: none;
  }
`;

export const CloseArrow = styled(FiCornerDownLeft)`
  position: absolute;
  top: -30px;
  left: 20px;
  color: ${p => p.theme.colors.black};
  &:hover,
  :focus {
    color: ${p => p.theme.colors.hover};
  }
  @media (min-width: 767px) {
    display: none;
    visibility: hidden;
  }
`;

export const InnerInfo = styled.div`
  padding: 10px;
`;
