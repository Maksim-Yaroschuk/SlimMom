import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const HeaderStyled = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  padding-bottom: 16px;
  border-bottom: ${p => p.theme.borders.header};
  @media (max-width: 425px) {
    position: relative; // set position relative in order to see header when modal on phone is opened
    z-index: 22;
  }
  @media (min-width: 426px) and (max-width: 1023px) {
    padding: 20px 32px;
    /* width: calc(100% - 32px); */
  }
  @media (min-width: 1024px) {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translate(-50%, 0);
    justify-content: flex-start;
    align-items: flex-end;
    padding: 80px 16px;
    border: none;
    width: calc(100% - 32px);
    margin: 0 auto;
  }
  /* @media (min-width: 1280px) {
    width: 1280px;
  } */
`;

export const Logo = styled.img`
  height: 44px;
  filter: ${p => p.theme.colors.filter};
  @media (min-width: 426px) and (max-width: 1023px) {
  }
  @media (min-width: 1024px) {
    height: 66px;
    margin-right: 40px;
  }
`;

export const BtnList = styled.ul`
  display: flex;
  gap: 16px;
  top: -4px;

  @media (min-width: 426px) and (max-width: 1023px) {
  }
  @media (min-width: 1024px) {
    position: relative;
    &:before {
      content: '';
      position: absolute;
      top: -5px;
      left: -20px;
      height: 32px;
      width: 2px;
      background-color: #e0e0e0;
    }
    align-items: flex-end;
  }
`;

export const HeaderBtn = styled.button`
  padding: 0;
  border: ${p => p.theme.borders.none};
  font-family: ${p => p.theme.fonts.tertiary};
  line-height: ${p => p.theme.lineHeights.body};
  font-size: ${p => p.theme.fontSizes[0]};
  text-align: right;
  letter-spacing: 0.04em;

  background: ${p => p.theme.colors.white};
  text-transform: uppercase;

  @media (min-width: 426px) and (max-width: 1023px) {
  }
  @media (min-width: 1024px) {
  }
`;

export const StyledLink = styled(NavLink)`
  padding: 0px;
  border: none;
  font-family: GothamProBold;
  line-height: 1.2;
  font-size: 14px;
  text-align: right;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  background: rgb(255, 255, 255);
  color: rgb(33, 33, 33);
  text-decoration: none;
  &.active {
    color: ${p => p.theme.colors.gray};
  }
  @media (min-width: 426px) and (max-width: 1023px) {
  }
  @media (min-width: 1024px) {
    padding: 0;
    border: ${p => p.theme.borders.none};
    font-family: ${p => p.theme.fonts.tertiary};
    line-height: ${p => p.theme.lineHeights.body};
    font-size: ${p => p.theme.fontSizes[0]};
    text-align: right;
    letter-spacing: 0.04em;

    text-transform: uppercase;
    background: transparent;
    color: ${p => p.theme.colors.black};
    text-decoration: none;

    &.active {
      color: ${p => p.theme.colors.gray};
    }
    &:hover,
    &:focus {
      color: ${p => p.theme.colors.gray};
    }
  }
`;
