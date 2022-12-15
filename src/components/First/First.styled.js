import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 32px 20px 100px;
  @media (min-width: 426px) and (max-width: 1023px) {
    padding: 100px 32px 398px;
  }
  @media (min-width: 1024px) {
    padding: 293px 16px 110px;
  }
`;

export const H2 = styled.h2`
  line-height: ${p => p.theme.lineHeights.body};
  font-size: ${p => p.theme.fontSizes[1]};
  line-height: 1.4;
  margin-bottom: 34px;

  @media (min-width: 426px) and (max-width: 1023px) {
    font-size: ${p => p.theme.fontSizes[3]};
    line-height: 1.4;
    margin-bottom: 68px;
    max-width: 635px;
  }
  @media (min-width: 1024px) {
    font-size: ${p => p.theme.fontSizes[3]};
    line-height: 1.4;
    margin-bottom: 68px;
    max-width: 635px;
  }
`;
