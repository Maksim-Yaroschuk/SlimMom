import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledLink = styled(NavLink)`
  padding: 0;
  border: ${p => p.theme.borders.none};
  font-family: ${p => p.theme.fonts.tertiary};
  line-height: ${p => p.theme.lineHeights.body};
  font-size: ${p => p.theme.fontSizes[0]};
  text-align: right;
  letter-spacing: 0.04em;

  text-transform: uppercase;
  background: ${p => p.theme.colors.white};
  color: ${p => p.theme.colors.black};
  text-decoration: none;

  &.active {
    color: ${p => p.theme.colors.gray};
  }
  &:hover,
  &:focus {
    color: ${p => p.theme.colors.gray};
  }
`;

export const Nav = styled.nav`
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
`;
