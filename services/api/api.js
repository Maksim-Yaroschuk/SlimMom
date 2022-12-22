import axios from 'axios';
axios.defaults.baseURL = 'https://slimmom-oz0k.onrender.com';
// const API_KEY = 'e8938dc969e4885481c1163e17374d0f';

const END_POINTS = {
  DailyCalorieIntake: '/api/products',
};

// export const apiCalorieIntak = async () => {
//   const res = await axios.get(`${END_POINTS.DailyCalorieIntake}`);
//   return res.data.results;
// };
export const apiCalorieIntake = async body => {
  const res = await axios.post(END_POINTS.DailyCalorieIntake, body);
  console.log('resData', res.data);
  return res.data;
};
