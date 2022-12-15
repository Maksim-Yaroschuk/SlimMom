export const theme = {
  colors: {
    black: '#212121',
    gray: '#9B9FAA',
    orange: '#FC842D',
    blue: '#264061',
    backgroundGray: '#F0F1F3',
    white: '#ffffff',
  },
  fonts: {
    body: 'VerdanaBold, sans-serif',
    secondary: 'VerdanaRegular, sans-serif',
    tertiary: 'GothamProBold',
  },
  space: [0, 4, 8, 16, 20, 32, 64, 128, 256, 512].map(n => n + 'px'),
  fontSizes: [14, 18, 24, 36, 34].map(n => n + 'px'),
  // fontWeights: {
  //   body: 400,
  //   heading: 700,
  //   bold: 700,
  // },
  lineHeights: {
    body: 1.2,
    heading: 1.125,
  },
  borders: {
    none: 'none',
    normal: '1px solid #E0E0E0',
    btn: '2px solid #FC842D',
  },
};
