import styled from "styled-components";
import leaves from '../../images/hero/desktop/leaves.png';
// import leavesRetina from '../../images/hero/desktop/leaves@2x.png';
// import leavesTabletRetina from '../../images/hero/tablet/leaves@2x.png';
import leavesTablet from '../../images/hero/tablet/leaves.png';

export const CalculatorPageWrapper  = styled.div`
  padding: 32px 20px 100px;

  @media (min-width: 426px) and (max-width: 1023px) {
    padding: 100px 32px 0px;
  }
  @media (min-width: 1024px) {
    padding: 293px 16px 110px;
      
  }

  &::before {
    @media (min-width: 426px) and (max-width: 1023px) {
      object-fit: fill;
      width: 302px;
      height: 253px;
      bottom: 0;
      right 10%;
      position: absolute;
      content: '';
      z-index: -1;
      background-image: url(${leavesTablet});
      background-repeat: no-repeat;
      background-position: left;
      background-size: auto;
    }

    @media (min-width: 1024px) {
      width: 358px;
      height: 687px;
      top: 170px;
      left: 72%;
      position: absolute;
      content: '';
      z-index: -1;
      background-image: url(${leaves});
      background-repeat: no-repeat;
      background-position: center;
      background-size: auto;
    }

  }
`

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