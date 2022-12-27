import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledLink = styled(NavLink)`
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
  text-align: center;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  text-decoration: none;
  color: #9b9faa;
  height: 100%;
  &.active {
    color: ${p => p.theme.colors.white};
  }
  @media (min-width: 426px) and (max-width: 1023px) {
    font-size: 24px;
    line-height: 29px;
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

export const Nav = styled.nav`
  position: absolute;
  top: 80px;
  z-index: 33;
  width: 100%;
  background: #264061;
  margin-left: -22px;
  padding-top: 60px;
  padding-right: 4px;
  padding-left: 4px;
  padding-bottom: 356px;
  display: grid;
  grid-template-columns: 1fr;
  gap: 40px;
  padding-bottom: 752px;

  @media (min-width: 426px) and (max-width: 1023px) {
    padding-top: 100px;
    margin-left: -35px;
    padding-bottom: 752px;
  }
  @media (min-width: 1024px) {
    top: 0px;
    z-index: 0;
    width: 100%;
    background: transparent;
    margin-left: 0;
    padding: 0;

    display: flex;
    gap: 18px;
    position: relative;
    &:before {
      content: '';
      position: absolute;
      top: -10px;
      left: -20px;
      height: 32px;
      width: 2px;
      background-color: #e0e0e0;
    }
  }
`;
