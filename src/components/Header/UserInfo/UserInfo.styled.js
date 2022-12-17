import styled from 'styled-components';

export const Section = styled.div`
  display: flex;
  gap: 32px;
  justify-content: flex-end;
  padding: 15px 20px 8px;
  background-color: #eff1f3;
  @media (max-width: 425px) {
    position: relative; // set position relative in order to see user section when modal on phone is opened
    z-index: 22;
  }
  @media (min-width: 426px) and (max-width: 1023px) {
    background: ${p => p.theme.colors.white};
    margin-left: auto;
    margin-right: 48px;
    padding: 0;
  }
  @media (min-width: 1024px) {
    background: ${p => p.theme.colors.white};
    padding: 0;
    margin-left: auto;
  }
`;

export const Name = styled.button`
  padding: 0;
  border: ${p => p.theme.borders.none};
  font-family: ${p => p.theme.fonts.tertiary};
  line-height: ${p => p.theme.lineHeights.body};
  font-size: ${p => p.theme.fontSizes[0]};
  text-align: right;
  letter-spacing: 0.04em;

  text-transform: uppercase;

  @media (min-width: 426px) and (max-width: 1023px) {
    background: ${p => p.theme.colors.white};
  }
  @media (min-width: 1024px) {
    background: ${p => p.theme.colors.white};
  }
`;

export const Exit = styled.button`
  padding: 0;
  border: ${p => p.theme.borders.none};
  font-family: ${p => p.theme.fonts.tertiary};
  line-height: ${p => p.theme.lineHeights.body};
  font-size: ${p => p.theme.fontSizes[0]};
  text-align: right;
  letter-spacing: 0.04em;

  color: ${p => p.theme.colors.gray};
  text-transform: uppercase;
  position: relative;
  cursor: pointer;
  &:before {
    content: '';
    position: absolute;
    top: -10px;
    left: -20px;
    height: 32px;
    width: 2px;
    background-color: #e0e0e0;
  }

  @media (min-width: 426px) and (max-width: 1023px) {
    background: ${p => p.theme.colors.white};
  }
  @media (min-width: 1024px) {
    background: ${p => p.theme.colors.white};
  }
`;
