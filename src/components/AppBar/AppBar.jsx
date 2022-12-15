import logoMobile from '../../images/logo/logoMobile.png';
import logoMobileRetina from '../../images/logo/logoMobile@2x.png';
import logoTablet from '../../images/logo/logoTablet.png';
import logoTabletRetina from '../../images/logo/logoTablet@2x.png';
import logoDesktop from '../../images/logo/logoDesktop.png';
import logoDesktopRetina from '../../images/logo/logoDesktop@2x.png';
import { useMediaQuery } from 'react-responsive';
import React, { useEffect, useState } from 'react';
import { BtnList, Header, HeaderBtn, Logo } from './AppBar.styled';
import { GiHamburgerMenu } from 'react-icons/gi';
import { BottomSection } from './BottomSection/BottomSection';
import { Menu } from './Menu/Menu';

export const AppBar = () => {
  const [isUser, setUser] = useState('');

  //TODO: fix this
  useEffect(() => {
    setUser({ name: 'Nick' });
  }, []);

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
      <Header>
        <Logo src={takeLogo()} />
        {isUser ? (
          <>
            {isTablet && <BottomSection name={isUser.name} />}
            {isDesktop && (
              <>
                <Menu />
                <BottomSection name={isUser.name} />
              </>
            )}
            {!isDesktop && (
              <GiHamburgerMenu style={{ width: '24px', height: '24px' }} />
            )}
          </>
        ) : (
          <BtnList>
            <li>
              <HeaderBtn>Sign in</HeaderBtn>
            </li>
            <li>
              <HeaderBtn>Registration</HeaderBtn>
            </li>
          </BtnList>
        )}
      </Header>
      {isMobile && <BottomSection name={isUser.name} />}
    </>
  );
};
