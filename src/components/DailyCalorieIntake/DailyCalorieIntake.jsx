import { loadFromSession } from '../../services/session/storage';
import {
  H1,
  H2,
  H4,
  LI,
  BOX,
  ModalWrapper,
  ButtonWrapper,
  ButtonForm,
} from './DailyCalorieIntake.styled';

const DailyCalorieIntake = ({ changeState }) => {
  const response = loadFromSession('products');
  const dailyRate = response.dailyRate;
  const notAllowedProducts = response.notAllowedProducts;

  const calories = {
    fontSize: 15,
  };
  return (
    <ModalWrapper>
      <H2>
        Your recommended daily<br></br> calorie intake is
      </H2>

      <H1>
        {dailyRate}
        <span style={calories}>calories</span>
      </H1>
      <hr></hr>
      <H4>Foods you should not eat</H4>

      <ul>
        {notAllowedProducts.map((prod, index) => (
          <LI key={index}>
            <BOX>
              {index + 1}. {prod}
            </BOX>
          </LI>
        ))}
      </ul>
      <ButtonWrapper onClick={() => changeState(true)}>
        <ButtonForm type="button">Start losing weight</ButtonForm>
      </ButtonWrapper>
    </ModalWrapper>
  );
};
export default DailyCalorieIntake;

// import { apiCalorieIntake } from '../../services/api/api';
// import axios from 'axios';
// import { useState, useEffect } from 'react';

// axios.defaults.baseURL = 'https://slimmom-oz0k.onrender.com';
// const [products, setProducts] = useState({});
// const [error, setError] = useState(null);
// const [loading, setLoading] = useState(true);
// const params = loadFromSession('params');
// // console.log('paramsApi', params);
// axios
//   .post('/api/products', params)
//   .then(function (response) {
//     setProducts(response.data);

//     saveInSession('products', response.data);
//     console.log('response', response.data);
//     console.log('loadFromSession products', loadFromSession('products'));
//     console.log('response', response.data);
//   })
//   .catch(function (error) {
//     setError(error);
//     console.log('error', error);
//   })
//   .finally(setLoading(false));

// useEffect(() => {
// const fetch = () => {
//   setLoading(true);
//   apiCalorieIntake(params)
//     .then(res => {
//       setProducts(res);
//       console.log('productsRes', products);
//       saveInSession('products', res);
//     })
//     .catch(error => {
//       setError('UPS, this is pipez');
//     })
//     .finally(setLoading(false));
// };

// fetch();
// }); //, [params]
// console.log('products1', products);
// const response = products;
