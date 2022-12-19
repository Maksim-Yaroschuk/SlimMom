import React from 'react';
import { ThreeCircles } from 'react-loader-spinner';
import { LoaderWrapper, MainLoader } from './Loader.styled';

export const Loader = () => {
  return (
    <MainLoader>
      <LoaderWrapper>
        <ThreeCircles
          color="#FC842D"
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