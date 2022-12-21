import { H1, H2, H4, LI, ModalWrapper } from './DailyCalorieIntake.styled';
import { ButtonWrapper, ButtonForm } from '../Form/Form.styled';
const DailyCalorieIntake = ({ changeState }) => {
  // { dailyRate, notAllowedProducts }
  const dailyRate = 1420;
  const notAllowedProducts = [
    'Пластівці Агро-Альянс 5 злаків',
    'Каша 4-х зернова Myllyn Paras',
    'Полба',
    'Яйце куряче (варене всмятку)',
    'Булгур приготований',
  ];
  // const calories = dailyRate;

  // const list = notAllowedProducts;
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
          <LI>
            {index + 1}. {prod}
          </LI>
        ))}
      </ul>
      <ButtonWrapper onClick={() => changeState(true)}>
        <ButtonForm type="submit">Start losing weight</ButtonForm>
      </ButtonWrapper>
    </ModalWrapper>
  );
};
export default DailyCalorieIntake;
// color="gray"
// <ul>
// {/* {list.lice(0, 5)}  key={id}*/}
// {list.foreach(({ id, catigorie }) => (
// 	<li>
// 		{id + 1}. {catigorie}
// 	</li>
// ))}
// </ul>
// {
//   /* ,<LI>Пластівці Агро-Альянс 5 злаків</LI>
//         <LI>Каша 4-х зернова Myllyn Paras</LI>
//         <LI>Полба</LI>
//         <LI>Яйце куряче (варене всмятку)</LI>
//         <LI>Булгур приготований</LI> */
// }
// {index}. {prod}
// console.log(index + 1, prod);
