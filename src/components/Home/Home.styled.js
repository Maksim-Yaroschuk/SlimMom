import styled from 'styled-components';
import leaves from '../../images/hero/desktop/leaves.png';
import banana from '../../images/hero/desktop/banana.png';
import Strawberry from '../../images/hero/desktop/Strawberry.png';
import Vector from '../../images/hero/desktop/Vector.png';
import leavesRetina from '../../images/hero/desktop/leaves@2x.png';
import bananaRetina from '../../images/hero/desktop/banana@2x.png';
import StrawberryRetina from '../../images/hero/desktop/Strawberry@2x.png';
import VectorRetina from '../../images/hero/desktop/Vector@2x.png';

import bananaTablet from '../../images/hero/tablet/banana.png';
import bananaTabletRetina from '../../images/hero/tablet/banana@2x.png';
import StrawberryTablet from '../../images/hero/tablet/Strawberry.png';
import StrawberryTabletRetina from '../../images/hero/tablet/Strawberry@2x.png';
import leavesTablet from '../../images/hero/tablet/leaves.png';
import leavesTabletRetina from '../../images/hero/tablet/leaves@2x.png';
import VectorTablet from '../../images/hero/tablet/Vector.png';
import VectorTabletRetina from '../../images/hero/tablet/Vector@2x.png';

export const WrapperWtithFruits = styled.div`
  padding: 32px 20px 100px 20px;
  @media (min-width: 426px) and (max-width: 1023px) {
    padding: 100px 32px 398px;
    background-image: url(${leavesTablet}), url(${StrawberryTablet}),
      url(${bananaTablet}), url(${VectorTablet});
    background-repeat: no-repeat, no-repeat, no-repeat, no-repeat;
    background-position: bottom 0px left 0px, bottom 200px right 40px,
      bottom 0px right 0px, bottom 0px right 0px;
    background-size: auto, auto, auto, auto;

    @media (min-resolution: 2dppx) {
      background-image: url(${leavesTabletRetina}),
        url(${StrawberryTabletRetina}), url(${bananaTabletRetina}),
        url(${VectorTabletRetina});
      background-repeat: no-repeat, no-repeat, no-repeat, no-repeat;
      background-position: bottom 0px left 0px, bottom 200px right 40px,
        bottom 0px right 0px, bottom 0px right 0px;
      background-size: 531px 553px, 208px 208px, 491px 431px, 494px 563px;
    }
  }
  @media (min-width: 1024px) {
    padding: 293px 16px 110px;

    background-image: url(${leaves}), url(${Strawberry}), url(${banana}),
      url(${Vector});
    background-repeat: no-repeat, no-repeat, no-repeat, no-repeat;
    background-position: top 0px right 195px, top 506px right 30px,
      top 0px right 0px, bottom -43px right 0px;
    background-size: auto, auto, auto, 602px 816px;
    @media (min-resolution: 2dppx) {
      background-image: url(${leavesRetina}), url(${StrawberryRetina}),
        url(${bananaRetina}), url(${VectorRetina});
      background-repeat: no-repeat, no-repeat, no-repeat, no-repeat;
      background-position: top 0px right 195px, top 526px right 50px,
        top 0px right 0px, bottom -43px right 0px;
      background-size: 746px 846px, 286px 279px, 498px 450px, 602px 816px;
    }
  }
`;

export const H2 = styled.h2`
  line-height: ${p => p.theme.lineHeights.body};
  font-size: ${p => p.theme.fontSizes[1]};
  line-height: 1.4;
  margin-bottom: 34px;
  color: ${p => p.theme.colors.black};


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
    height: 85px;
  }
`;
