import { ThemeContext } from 'components/Context/Context';
import React, { useContext } from 'react';
import { ThreeCircles } from 'react-loader-spinner';
import { LoaderWrapper, MainLoader } from './Loader.styled';

export const Loader = () => {
  const { isChristmas } = useContext(ThemeContext);

  return (
    <MainLoader>
      <LoaderWrapper>
        <ThreeCircles
          color={isChristmas ? '#D6001C' : '#FC842D'}
          arialLabel="loading-indicator"
          height="120"
          width="120"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
          ariaLabel="three-circles-rotating"
          outerCircleColor=""
          innerCircleColor=""
          middleCircleColor=""
        />
      </LoaderWrapper>
    </MainLoader>
  );
};
