import React from 'react';
import { useMediaQuery } from 'react-responsive';
import { Newh2 } from './Example.styled';

export const Example = () => {
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 1224px)',
  });
  const isBigScreen = useMediaQuery({ query: '(min-width: 1824px)' });
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' });
  const isPortrait = useMediaQuery({ query: '(orientation: portrait)' });
  const isRetina = useMediaQuery({ query: '(min-resolution: 2dppx)' });

  const mobile = useMediaQuery({ query: '(max-width: 426px)' });
  const tablet = useMediaQuery({
    query: '(min-width: 426px) and (max-width: 1023px)',
  });
  const laptop = useMediaQuery({ query: '(min-width: 1024px)' });

  return (
    <div>
      <h1 className="font-face-gm">Device Test!</h1>
      <Newh2>hello</Newh2>
      <Newh2>new</Newh2>
      {/* {isDesktopOrLaptop && <p>You are a desktop or laptop</p>}
      {isBigScreen && <p>You have a huge screen</p>}
      {isTabletOrMobile && <p>You are a tablet or mobile phone</p>}
      <p>Your are in {isPortrait ? 'portrait' : 'landscape'} orientation</p> */}
      {isRetina && <p>You are retina</p>}

      {mobile && <h2>mobile</h2>}
      {tablet && <h2>tablet</h2>}
      {laptop && <h2>laptop</h2>}
    </div>
  );
};
