// import styled from "styled-components"; // import leaves from
'../../images/hero/desktop/leaves.png'; // import leavesTablet from
'../../images/hero/tablet/leaves.png';

// export const Wrapper = styled.div` // margin: 0px auto; // padding: 100px
15px 0; // @media (max-width: 425px) { // max-width: 280px; // } // @media
(min-width: 426px) and (max-width: 1023px) { // padding-top: 100px; //
padding-left: 32px // } // @media (min-width: 1024px) { // padding-top: 250px;
// padding-left: 16px // } // &::before { // @media (min-width: 426px) and
(max-width: 1023px) { // object-fit: fill; // width: 302px; // height: 253px; //
bottom: 0; // right 10%; // position: absolute; // content: ''; // z-index: -1;
// background-image: url(${leavesTablet}); // background-repeat: no-repeat; //
background-position: left; // background-size: auto; // }

// @media (min-width: 1024px) { // width: 358px; // height: 687px; // top:
170px; // left: 69%; // position: absolute; // content: ''; // z-index: -1; //
background-image: url(${leaves}); // background-repeat: no-repeat; //
background-position: center; // background-size: auto; // } // `

// export const Button =
styled.button`// padding: 12px 13px 11px; // border-radius: 50%; // border: ${p => p.theme.borders.none}; // background: ${p => p.theme.colors.orange}; // cursor: pointer; // box-shadow: 0px 4px 10px rgba(252, 132, 45, 0.5); // margin-top: 60px; //`

import styled from "styled-components"; import leaves from
'../../images/diary-page/leaf-desk.png'; import leavesTablet from
'../../images/hero/tablet/leaves.png'; import SideBarBgDesk from
'../../images/diary-page/sidebar-bg-desk.png';

export const WrapperAll =
styled.div` /* &::before { @media (min-width: 768px) and (max-width: 1023px) { object-fit: fill; width: 302px; bottom: -269px; left: 400px; position: absolute; content: ''; z-index: 2; height: 100%; background-image: url(${leavesTablet}); background-repeat: no-repeat; background-position: left; background-size: auto; } @media (min-width: 1024px) { width: 100%; top: 170px; left: 69%; position: absolute; content: ''; z-index: -1; background-image: url(${leaves}); background-repeat: no-repeat; background-position: center; background-size: auto; } } */ /* @media (min-width: 768px) and (max-width: 1023px) { background-image: url(${leavesTablet}); background-repeat: no-repeat; background-position: bottom 0px left 0px; background-size: auto; } */ @media (min-width: 1024px) and (max-width: 1120px) { padding: 300px 16px 55px 16px; display: flex; height: 100vh; justify-content: space-between; background-image: url(${leaves}), url(${SideBarBgDesk}); background-repeat: no-repeat, no-repeat; background-size: auto, 50% 100%; background-position: top 0px right 0px, top 0px right -110px; } @media (min-width: 1121px) and (max-width: 1280px) { margin: 0 auto; height: 100vh; padding: 300px 16px 55px 16px; display: flex; justify-content: space-between; background-image: url(${leaves}), url(${SideBarBgDesk}); background-repeat: no-repeat, no-repeat; background-size: auto, 40% 100%; background-position: top 0px right 0px, top 0px right 0px; } @media (min-width: 1280px) { margin: 0 auto; padding: 300px 16px 55px 16px; display: flex; height: 100vh; justify-content: space-between; background-image: url(${leaves}), url(${SideBarBgDesk}); background-repeat: no-repeat, no-repeat; background-size: auto, 40% 100%; background-position: top 0px right 0px, top 0px right 0px; }`;

export const Wrapper =
styled.div` margin: 0px auto; padding: 100px 20px 60px 20px; max-width: 610px; /* @media (max-width: 425px) { max-width: 610px; } */ @media (min-width: 768px) and (max-width: 1023px) { margin: 0; padding: 100px 0px 55px 32px; } @media (min-width: 1024px) { padding: 0px; margin: 0; } /* &::before { @media (min-width: 768px) and (max-width: 1279px) { object-fit: fill; width: 302px; bottom: 40px; right: 10%; position: absolute; content: ''; z-index: -1; background-image: url(${leavesTablet}); background-repeat: no-repeat; background-position: left; background-size: auto; } @media (min-width: 1024px) { width: 358px; top: 170px; left: 69%; position: absolute; content: ''; z-index: -1; background-image: url(${leaves}); background-repeat: no-repeat; background-position: center; background-size: auto; } } */`

export const Button =
styled.button` padding: 12px 13px 11px; border-radius: 50%; border: ${p => p.theme.borders.none}; background: ${p => p.theme.colors.orange}; cursor: pointer; box-shadow: 0px 4px 10px rgba(252, 132, 45, 0.5); margin-top: 60px;`
