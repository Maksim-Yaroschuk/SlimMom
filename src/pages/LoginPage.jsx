import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Formik, Form, ErrorMessage } from 'formik';
import * as yup from 'yup';
import {
  FormInput,
  Wrapper,
  RegisterHeader,
  FormLabel,
  RegisterButton,
  LoginButton,
} from '../components/LoginPage/LoginPage.styled';
import { setCredentials } from '../redux/authSlice';
import { useDispatch } from 'react-redux';
import { useLogInUserMutation } from '../redux/auth';

const schema = yup.object().shape({
  email: yup.string().required(),
  password: yup.string().required(),
});

const initialValues = {
  email: '',
  password: '',
};

export const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [logInUser] = useLogInUserMutation();

  const formSubmit = async (value, { resetForm }) => {
    console.log(JSON.stringify(value));
    const user = await logInUser(value).unwrap();
    console.log(user);
    dispatch(setCredentials(value));
    console.log('log dispatch');
    resetForm();
  };

  return (
    <Wrapper>
      <RegisterHeader>Log in</RegisterHeader>
      <Formik
        initialValues={initialValues}
        onSubmit={formSubmit}
        validationSchema={schema}
      >
        <Form>
          <FormLabel>
            Email *
            <FormInput type="email" name="email" required />
            <ErrorMessage name="email" component="div" />
          </FormLabel>
          <FormLabel>
            Password *
            <FormInput type="password" name="password" required />
            <ErrorMessage name="password" component="div" />
          </FormLabel>
          <LoginButton type="submit">Log in</LoginButton>
        </Form>
      </Formik>
      <RegisterButton type="button" onClick={() => navigate('/register')}>
        Register
      </RegisterButton>
    </Wrapper>
  );
};
