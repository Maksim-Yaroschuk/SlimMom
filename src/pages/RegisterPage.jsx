import React, { useContext, useState } from 'react';
import { Formik, ErrorMessage, Form } from 'formik';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';

import * as yup from 'yup';
import { Error, Input, List } from 'components/Form/Form.styled';
import { Button } from 'components/Button/Button';
import { useLocation, useNavigate } from 'react-router-dom';
import { useLogInUserMutation, useRegisterUserMutation } from 'redux/auth';
import { useDispatch } from 'react-redux';
import { setCredentials, setUser } from 'redux/authSlice';
import {
  ButtonWrapper,
  H2,
  Wrapper,
  ButtonGoogle,
} from '../components/RegisterPage/RegisterPage.styled';
import { WrapperWithFruits } from 'components/RegisterPage/RegisterPage.styled';
import { Loader } from 'components/Loader/Loader';
import Snowfall from 'react-snowfall';
import { ThemeContext } from 'components/Context/Context';
import { routes } from 'components/Routes/routes';

const schema = yup.object().shape({
  name: yup
    .string()
    .min(4, 'Name must be more than or equal to 4 letters')
    .max(50, 'Name must be less than or equal to 50 letters')
    .required('Name is required field'),
  password: yup
    .string()
    .min(6, 'Password must be more than or equal to 6 letters')
    .max(16, 'Password must be less than or equal to 16 letters')
    .required('Password is required field'),
  email: yup
    .string()
    .email('Invalid email')
    .typeError('Email must be an email')
    .required('Email is required field'),
});

const initialValues = {
  name: '',
  email: '',
  password: '',
};

const RegisterPage = () => {
  const { isChristmas } = useContext(ThemeContext);
  const location = useLocation();
  const userDataForRegister = location.state?.userDataForRegister;
  localStorage.setItem('params', JSON.stringify(userDataForRegister));

  const navigate = useNavigate();
  const [registerUser, { status }] = useRegisterUserMutation();
  const dispatch = useDispatch();
  const [loginUser] = useLogInUserMutation();
  const [isShowPassword, setIsShowPassword] = useState(false);

  const handleSubmit = async (values, { resetForm }) => {
    const userDataForRegisterAll = { ...values, ...userDataForRegister };
    const user = await registerUser(userDataForRegisterAll).unwrap();
    const loginValues = { ...values };
    delete loginValues.name;
    const userLogin = await loginUser(loginValues).unwrap();
    dispatch(setCredentials(user));
    dispatch(setUser(userLogin));
    navigate(routes.diary);
    resetForm();
  };
  const handleClick = () => {
    navigate(routes.login);
  };
  const handleShowPassword = () => {
    setIsShowPassword(!isShowPassword);
  };

  return (
    <WrapperWithFruits>
      {isChristmas && <Snowfall />}
      {status === 'pending' && <Loader />}
      <Wrapper>
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
                  <Input type="name" name="name" placeholder="Name *" />
                  <ErrorMessage name="name" component={Error} />
                </label>
              </li>

              <li>
                <label>
                  <Input type="email" name="email" placeholder="Email *" />
                  <ErrorMessage name="email" component={Error} />
                </label>
              </li>

              <li>
                <label style={{ position: 'relative' }}>
                  <Input
                    type={isShowPassword ? 'text' : 'password'}
                    name="password"
                    placeholder="Password *"
                    maxLength="16"
                  />
                  {isShowPassword ? (
                    <AiFillEyeInvisible
                      onClick={handleShowPassword}
                      style={{
                        position: 'absolute',
                        top: '0px',
                        left: '250px',
                        color: '#FC842D',
                      }}
                    />
                  ) : (
                    <AiFillEye
                      onClick={handleShowPassword}
                      style={{
                        position: 'absolute',
                        top: '0px',
                        left: '250px',
                        color: '#FC842D',
                      }}
                    />
                  )}
                  <ErrorMessage name="password" component={Error} />
                </label>
              </li>
            </List>
            <ButtonWrapper>
              <Button type="submit" full={true} style={{ width: '200px' }}>
                Register
              </Button>
              <div onClick={handleClick}>
                <Button type="button" full={false}>
                  Log In
                </Button>
              </div>
              <ButtonGoogle href="https://slimmom-oz0k.onrender.com/api/auth/google-signup">
                Register Google
              </ButtonGoogle>
            </ButtonWrapper>
          </Form>
        </Formik>
      </Wrapper>
    </WrapperWithFruits>
  );
};

export default RegisterPage;
