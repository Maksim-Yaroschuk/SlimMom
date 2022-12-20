import logoMobile from '../../images/logo/logoMobile.png';
import logoMobileRetina from '../../images/logo/logoMobile@2x.png';
import logoTablet from '../../images/logo/logoTablet.png';
import logoTabletRetina from '../../images/logo/logoTablet@2x.png';
import logoDesktop from '../../images/logo/logoDesktop.png';
import logoDesktopRetina from '../../images/logo/logoDesktop@2x.png';
import { useMediaQuery } from 'react-responsive';
import React, { useState } from 'react';
import { BtnList, HeaderStyled, Logo } from './Header.styled';
import { GiHamburgerMenu } from 'react-icons/gi';
import { BottomSection } from './UserInfo/UserInfo';
import { Menu } from './Navigation/Navigation';
import { Link } from 'react-router-dom';
import { StyledLink } from './Navigation/Navigation.styled';
import { useSelector } from 'react-redux';
import { getUserName } from 'redux/authSelectors';
import { useLocation } from 'react-router-dom';

export const Header = () => {
  const [openNavigation, setOpenNavigation] = useState(false);
  const userName = useSelector(getUserName);
  const { pathname } = useLocation();

  const isRetina = useMediaQuery({ query: '(min-resolution: 2dppx)' });
  const isMobile = useMediaQuery({ query: '(max-width: 426px)' });
  const isTablet = useMediaQuery({
    query: '(min-width: 426px) and (max-width: 1023px)',
  });
  const isDesktop = useMediaQuery({ query: '(min-width: 1024px)' });
  const takeLogo = () => {
    if (isMobile) {
      return logoMobile;
    } else if (isTablet) {
      return logoTablet;
    } else if (isDesktop) {
      return logoDesktop;
    } else if (isMobile && isRetina) {
      return logoMobileRetina;
    } else if (isTablet && isRetina) {
      return logoTabletRetina;
    } else if (isDesktop && isRetina) {
      return logoDesktopRetina;
    }
  };

  return (
    <>
      <HeaderStyled>
        <Link to={'/'}>
          <Logo src={takeLogo()} />
        </Link>

        {userName ? (
          <>
            {isTablet && <BottomSection name={userName} />}
            {isDesktop && (
              <>
                <Menu />
                <BottomSection name={userName} />
              </>
            )}
            {!isDesktop && (
              <>
                <GiHamburgerMenu
                  style={{ width: '24px', height: '24px' }}
                  onClick={() => setOpenNavigation(true)}
                />
                {openNavigation && <Menu />}
              </>
            )}
          </>
        ) : (pathname === '/register' || pathname === '/login') &&
          isDesktop ? null : (
          <BtnList>
            <li>
              <StyledLink to="login">Log in</StyledLink>
            </li>
            <li>
              <StyledLink to="register">Registration</StyledLink>
            </li>
          </BtnList>
        )}
      </HeaderStyled>
      {isMobile && userName && <BottomSection name={userName} />}
    </>
  );
};
