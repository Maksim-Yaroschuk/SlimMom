import { useLocation, useNavigate } from 'react-router-dom';
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

const DailyCalorieIntake = ({ backResponse }) => {
  const navigate = useNavigate();
  const dailyRate = backResponse.dailyRate;
  const notAllowedProducts = backResponse.notAllowedProducts;

  const calories = {
    fontSize: 15,
  };

  const location = useLocation();
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
      {location.pathname !== '/calculator' && (
        <ButtonWrapper onClick={() => navigate('/register')}>
          <ButtonForm type="button">Start losing weight</ButtonForm>
        </ButtonWrapper>
      )}
    </ModalWrapper>
  );
};
export default DailyCalorieIntake;
