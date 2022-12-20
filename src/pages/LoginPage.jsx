// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import { Formik, Form, ErrorMessage } from 'formik';
// import * as yup from 'yup';
// import {
//   FormInput,
//   Wrapper,
//   RegisterHeader,
//   FormLabel,
//   RegisterButton,
//   LoginButton,
// } from '../components/LoginPage/LoginPage.styled';
// import { setCredentials } from '../redux/authSlice';
// import { useDispatch } from 'react-redux';
// import { useLogInUserMutation } from '../redux/auth';

// const schema = yup.object().shape({
//   email: yup.string().required(),
//   password: yup.string().required(),
// });

// const initialValues = {
//   email: '',
//   password: '',
// };

// export const LoginPage = () => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const [logInUser] = useLogInUserMutation();

//   const formSubmit = async (value, { resetForm }) => {
//     console.log(JSON.stringify(value));
//     const user = await logInUser(value).unwrap();
//     console.log(user);
//     dispatch(setCredentials(value));
//     console.log('log dispatch');
//     resetForm();
//   };

//   return (
//     <Wrapper>
//       <RegisterHeader>Log in</RegisterHeader>
//       <Formik
//         initialValues={initialValues}
//         onSubmit={formSubmit}
//         validationSchema={schema}
//       >
//         <Form>
//           <FormLabel>
//             Email *
//             <FormInput type="email" name="email" required />
//             <ErrorMessage name="email" component="div" />
//           </FormLabel>
//           <FormLabel>
//             Password *
//             <FormInput type="password" name="password" required />
//             <ErrorMessage name="password" component="div" />
//           </FormLabel>
//           <LoginButton type="submit">Log in</LoginButton>
//         </Form>
//       </Formik>
//       <RegisterButton type="button" onClick={() => navigate('/register')}>
//         Register
//       </RegisterButton>
//     </Wrapper>
//   );
// };

import React from 'react';
import { Formik, ErrorMessage, Form } from 'formik';
import * as yup from 'yup';
import { Error, Input, List } from 'components/Form/Form.styled';
import { Button } from 'components/Button/Button';
import { useNavigate } from 'react-router-dom';
import { useLogInUserMutation } from 'redux/auth';
import { useDispatch } from 'react-redux';
import { setCredentials } from 'redux/authSlice';
import {
  ButtonWrapper,
  H2,
  Wrapper,
} from '../components/RegisterPage/RegisterPage.styled';
import { WrapperWithFruits } from 'components/RegisterPage/RegisterPage.styled';
import { Loader } from 'components/Loader/Loader';

const schema = yup.object().shape({
  email: yup.string().email().required('Email is required field'),
  password: yup
    .string()
    .min(6, 'Password must be more than or equal to 6 letters')
    .max(16, 'Pame must be more than or equal to 16 letters')
    .required('Password is required field'),
});

const initialValues = {
  email: '',
  password: '',
};

export const LoginPage = () => {
  const navigate = useNavigate();
  const [loginUser, { status }] = useLogInUserMutation();
  const dispatch = useDispatch();

  const handleSubmit = async (values, { resetForm }) => {
    const user = await loginUser(values).unwrap();
    dispatch(setCredentials(user));
    navigate('/');
    resetForm();
  };

  const handleClick = () => {
    navigate('/register');
  };

  return (
    <WrapperWithFruits>
      {status === 'pending' && <Loader />}
      <Wrapper style={{ paddingBottom: '255px' }}>
        <H2>Register</H2>
        <Formik
          initialValues={initialValues}
          onSubmit={handleSubmit}
          validationSchema={schema}
        >
          <Form>
            <List style={{ display: 'grid', gridTemplateColumns: 'revert' }}>
              <li>
                <label>
                  <Input type="email" name="email" placeholder="Email *" />
                  <ErrorMessage name="age" component={Error} />
                </label>
              </li>

              <li>
                <label>
                  <Input
                    type="password"
                    name="password"
                    placeholder="Password *"
                  />
                  <ErrorMessage name="password" component={Error} />
                </label>
              </li>
            </List>
            <ButtonWrapper>
              <Button type="submit" full={true} style={{ width: '200px' }}>
                Log In
              </Button>
              <div onClick={handleClick}>
                <Button type="button" full={false}>
                  Register
                </Button>
              </div>
            </ButtonWrapper>
          </Form>
        </Formik>
      </Wrapper>
    </WrapperWithFruits>
  );
};
