const body = document.querySelector('body');

const christmasTheme = () => {
  const day = new Date().getDate();
  const month = new Date().getMonth();
  if (day >= 19 && month === 11) {
    body.classList.add('christmas');
  } else if (day >= 15 && month === 0) {
    body.classList.remove('christmas');
  }
};
christmasTheme();

const isChristmas = () => {
  return body.classList.contains('christmas');
};
const isChristmasNow = isChristmas();

export const theme = {
  colors: {
    black: '#212121',
    gray: '#9B9FAA',
    orange: `${isChristmasNow ? '#D6001C' : '#FC842D'}`,
    blue: '#264061',
    backgroundGray: '#F0F1F3',
    white: '#ffffff',
    hover: `${isChristmasNow ? '#B10522' : '#f07116'}`,
  },
  fonts: {
    body: 'VerdanaBold, sans-serif',
    secondary: 'VerdanaRegular, sans-serif',
    tertiary: 'GothamProBold',
  },
  space: [0, 4, 8, 16, 20, 32, 64, 128, 256, 512].map(n => n + 'px'),
  fontSizes: [14, 18, 24, 34, 36].map(n => n + 'px'),
  lineHeights: {
    body: 1.2,
    heading: 1.125,
  },
  borders: {
    none: 'none',
    normal: '1px solid #E0E0E0',
    btn: `${isChristmasNow ? '2px solid #D6001C' : '2px solid #FC842D'}`,
    hover: `${isChristmasNow ? '2px solid #D6001C' : '2px solid #f07116'}`,
  },
};
