import styled from 'styled-components';
import leaves from '../../images/diary-page/leaf-desk.png';
// import leavesRetina from '../../images/hero/desktop/leaves@2x.png';
// import leavesTabletRetina from '../../images/hero/tablet/leaves@2x.png';
import leavesTablet from '../../images/hero/tablet/leaves.png';
import SideBarBgDesk from '../../images/diary-page/sidebar-bg-desk.png';

export const WrapperAll = styled.div`

  @media (min-width: 768px) and (max-width: 1023px) {
    background-image: url(${leavesTablet});
    background-repeat: no-repeat;
    background-position: bottom 0px left 0px;
    background-size: auto;
  }
  @media (min-width: 1024px) and (max-width: 1120px) {
    padding: 300px 16px 55px 16px;
    display: flex;
    height: 100vh;
    justify-content: space-between;
    background-image: url(${leaves}), url(${SideBarBgDesk});
    background-repeat: no-repeat, no-repeat;
    background-size: auto, 50% 100%;
    background-position: top 0px right 0px, top 0px right -110px;
  }
  @media (min-width: 1121px) and (max-width: 1280px) {
    margin: 0 auto;
    /* height: 100vh; */
    padding: 300px 16px 55px 16px;
    display: flex;
    justify-content: space-between;
    background-image: url(${leaves}), url(${SideBarBgDesk});
    background-repeat: no-repeat, no-repeat;
    background-size: auto, 40% 100%;
    background-position: top 0px right 0px, top 0px right 0px;
  }
  @media (min-width: 1280px) {
    margin: 0 auto;
    padding: 300px 16px 55px 16px;
    display: flex;
    /* height: 100vh; */
    justify-content: space-between;
    background-image: url(${leaves}), url(${SideBarBgDesk});
    background-repeat: no-repeat, no-repeat;
    background-size: auto, 40% 100%;
    background-position: top 0px right 0px, top 0px right 0px;
  }
`;

export const CalculatorPageWrapper = styled.div`
  padding: 32px 20px 100px;

  @media (min-width: 426px) and (max-width: 1023px) {
    padding: 100px 32px 48px 32px;
  }
  @media (min-width: 1024px) {
    padding: 0px 16px 110px;
  }

  /* &::before {
    @media (min-width: 426px) and (max-width: 1023px) {
      object-fit: fill;
      width: 302px;
      height: 253px;
      bottom: 0;
      right: 10%;
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
      right: 0;
      position: absolute;
      content: '';
      z-index: -1;
      background-image: url(${leaves});
      background-repeat: no-repeat;
      background-position: center;
      background-size: auto;
    }
  } */
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
  }
`;
