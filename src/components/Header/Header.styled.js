import styled from 'styled-components';

export const HeaderStyled = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  border: 2px solid #e0e0e0;
  @media (max-width: 425px) {
    position: relative; // set position relative in order to see header when modal on phone is opened
    z-index: 22;
  }
  @media (min-width: 426px) and (max-width: 1023px) {
    padding: 20px 32px;
  }
  @media (min-width: 1024px) {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translate(-50%, 0);
    justify-content: space-between;
    align-items: flex-end;
    padding: 80px 16px;
    border: none;
    min-width: 1024px;
    margin: 0 auto;
  }
  @media (min-width: 1280px) {
    width: 1280px;
  }
`;

export const Logo = styled.img`
  @media (min-width: 426px) and (max-width: 1023px) {
  }
  @media (min-width: 1024px) {
    margin-right: 40px;
  }
`;

export const BtnList = styled.ul`
  display: flex;
  gap: 16px;

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
