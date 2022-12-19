const body = document.querySelector('body');

export const christmasTheme = () => {
  const day = new Date().getDate();
  console.log('day', day);
  const month = new Date().getMonth();
  console.log('month', month);
  if (day === 19 && month === 11) {
    body.classList.add('christmas');
  } else if (day === 15 && month === 0) {
    body.classList.remove('christmas');
  }
};
