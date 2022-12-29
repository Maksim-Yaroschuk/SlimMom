import React, { useContext, useState } from 'react';
import { Formik, ErrorMessage, Form } from 'formik';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';

import * as yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { useLogInUserMutation } from 'redux/auth';
import { useDispatch } from 'react-redux';
import { setUser } from 'redux/authSlice';
import Snowfall from 'react-snowfall';
import { Error, Input, List } from 'components/Form/Form.styled';
import { Button } from 'components/Button/Button';
import {
  ButtonWrapper,
  H2,
  Wrapper,
} from '../components/RegisterPage/RegisterPage.styled';
import { ButtonGoogle } from '../components/RegisterPage/RegisterPage.styled';
import { WrapperWithFruits } from 'components/RegisterPage/RegisterPage.styled';
import { Loader } from 'components/Loader/Loader';
import { ThemeContext } from 'components/Context/Context';
import { routes } from 'components/Routes/routes';

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

const LoginPage = () => {
  const navigate = useNavigate();
  const [loginUser, { status }] = useLogInUserMutation();
  const dispatch = useDispatch();
  const { isChristmas } = useContext(ThemeContext);
  const [isShowPassword, setIsShowPassword] = useState(false);

  const handleSubmit = async (values, { resetForm }) => {
    const user = await loginUser(values).unwrap();
    // console.log('login user', user);
    dispatch(setUser(user));
    navigate(routes.diary);
    resetForm();
  };

  const handleClick = () => {
    navigate(routes.register);
  };
  const handleShowPassword = () => {
    setIsShowPassword(!isShowPassword);
  };

  return (
    <WrapperWithFruits>
      {isChristmas && <Snowfall />}
      {status === 'pending' && <Loader />}
      <Wrapper style={{ paddingBottom: '255px' }}>
        <H2>Log In</H2>
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
                  <ErrorMessage name="email" component={Error} />
                  {status === 'rejected' && (
                    <Error>Email or password is wrong</Error>
                  )}
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
                  {status === 'rejected' && (
                    <Error>Email or password is wrong</Error>
                  )}
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
              <ButtonGoogle href="https://slimmom-oz0k.onrender.com/api/auth/google-login">
                log in Google
              </ButtonGoogle>
            </ButtonWrapper>
          </Form>
        </Formik>
      </Wrapper>
    </WrapperWithFruits>
  );
};

export default LoginPage;
