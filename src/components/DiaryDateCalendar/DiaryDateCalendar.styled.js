import styled from 'styled-components';

export const DatePickerWrapper = styled.button`
  cursor: pointer;
  background-color: transparent;
  color: ${p => p.theme.colors.black};

  padding: 0px;
  border: ${p => p.theme.borders.none};
  outline: none;
  font-size: ${p => p.theme.fontSizes[1]};
  font-family: ${p => p.theme.fonts.body};
  @media (max-width: 425px) {
    margin-bottom: 12px;
  }
  @media (min-width: 426px) and (max-width: 1023px) {
    font-size: ${p => p.theme.fontSizes[3]};
  }
  @media (min-width: 1024px) {
    font-size: ${p => p.theme.fontSizes[3]};
  }
`;

export const Icon = styled.img`
  margin-left: 20px;
`;
