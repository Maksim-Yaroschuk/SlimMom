import styled from 'styled-components';

export const ButtonFull = styled.button`
  padding: 13px 25px;
  border-radius: 30px;
  border: ${p => p.theme.borders.none};
  font-family: ${p => p.theme.fonts.body};
  line-height: ${p => p.theme.lineHeights.body};
  font-size: ${p => p.theme.fontSizes[0]};
  text-align: center;
  letter-spacing: 0.04em;

  color: ${p => p.theme.colors.white};
  background: ${p => p.theme.colors.orange};
  box-shadow: 0px 4px 10px rgba(252, 132, 45, 0.5);
`;

export const ButtonEmpty = styled.button`
  padding: 13px 25px;
  border-radius: 30px;
  border: ${p => p.theme.borders.none};
  font-family: ${p => p.theme.fonts.body};
  line-height: ${p => p.theme.lineHeights.body};
  font-size: ${p => p.theme.fontSizes[0]};
  text-align: center;
  letter-spacing: 0.04em;

  background: ${p => p.theme.colors.white};
  border: ${p => p.theme.borders.btn};
  color: ${p => p.theme.colors.orange};
  box-shadow: none;
`;
