import styled from 'styled-components';
import { Field } from 'formik';

export const FormLabel = styled.label`
  :last-child {
    padding-bottom: 0px;
  }

  display: block;
  font-family: ${p => p.theme.fonts.body};
  height: 36px;
  padding-bottom: 40px;
  font-style: normal;
  font-size: ${p => p.theme.fontSizes[0]};
  line-height: 17px;
  letter-spacing: 0.04em;
  color: ${p => p.theme.colors.gray};
`;

export const LoginButton = styled.button`
  cursor: pointer;
  margin-top: 20px;
  width: 182px;
  height: 44px;

  color: #ffffff;
  background-color: #fc842d;
  border-radius: 30px;
  box-shadow: 0px 4px 10px rgba(252, 132, 45, 0.5);
  border: none;
  font-family: ${p => p.theme.fonts.body};
  font-size: ${p => p.theme.fontSizes[0]};
  line-height: 17px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  letter-spacing: 0.04em;
`;

export const RegisterButton = styled.button`
  cursor: pointer;
  margin-top: 20px;
  width: 182px;
  height: 44px;

  color: #fc842d;
  background-color: #ffffff;
  border-radius: 30px;
  border: 2px solid #fc842d;
  font-family: ${p => p.theme.fonts.body};
  font-size: ${p => p.theme.fontSizes[0]};
  line-height: 17px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  letter-spacing: 0.04em;
`;

export const FormInput = styled(Field)`
  display: block;
  height: 20px;
  width: 280px;
  padding: 0px;
  border-bottom: ${p => p.theme.borders.normal};
  border-top: ${p => p.theme.borders.none};
  border-right: ${p => p.theme.borders.none};
  border-left: ${p => p.theme.borders.none};
  outline: none;
  :focus {
    border-color: ${p => p.theme.colors.orange};
  }
`;

// export const RegisterForm = styled(Form)`
//   margin-bottom: 60px;
// `;

export const Wrapper = styled.div`
  padding-top: 40px;
  width: 285px;
  margin-left: auto;
  margin-right: auto;
`;

export const RegisterHeader = styled.h2`
  font-family: ${p => p.theme.fonts.body};
  margin-bottom: 60px;
  font-size: ${p => p.theme.fontSizes[0]};
  line-height: 17px;
  text-align: center;
  letter-spacing: 0.04em;
  color: ${p => p.theme.colors.orange};
`;
