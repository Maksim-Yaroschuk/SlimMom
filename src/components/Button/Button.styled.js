import styled from 'styled-components';

export const ButtonFull = styled.button`
  padding: 13px 25px;
  border-radius: 30px;
  border: ${p => p.theme.borders.none};
  font-family: ${p => p.theme.fonts.body};
  line-height: ${p => p.theme.lineHeights.body};
  font-size: ${p => p.theme.fontSizes[0]};
  letter-spacing: 0.04em;
  display: block;

  color: ${p => p.theme.colors.white};
  min-width: 182px;
  transition: background 250ms cubic-bezier(0.42, 0, 1, 1);
  background: ${p => p.theme.colors.orange};

  &:hover,
  &:focus {
    background: ${p => p.theme.colors.hover};
  }
`;

export const ButtonEmpty = styled.button`
  padding: 13px 25px;
  border-radius: 30px;
  border: ${p => p.theme.borders.none};
  font-family: ${p => p.theme.fonts.body};
  line-height: ${p => p.theme.lineHeights.body};
  font-size: ${p => p.theme.fontSizes[0]};
  letter-spacing: 0.04em;
  display: block;

  background: transparent;
  border: ${p => p.theme.borders.btn};
  color: ${p => p.theme.colors.orange};
  min-width: 182px;
  transition: background 250ms cubic-bezier(0.42, 0, 1, 1);
  &:hover,
  &:focus {
    background: ${p => p.theme.colors.hover};
    color: ${p => p.theme.colors.white};
  }
`;
