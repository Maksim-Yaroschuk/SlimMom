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
} from './RegisterPage.styled';
import { setCredentials } from '../redux/authSlice';
import { useDispatch } from 'react-redux';
import { useRegisterUserMutation } from '../redux/auth';

const schema = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().required(),
  password: yup.string().required(),
});

const initialValues = {
  name: '',
  email: '',
  password: '',
};

export const RegisterPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [registerUser] = useRegisterUserMutation();

  const formSubmit = async (value, { resetForm }) => {
    console.log(JSON.stringify(value));
    const user = await registerUser(value).unwrap();
    console.log(user);
    dispatch(setCredentials(value));
    console.log('log dispatch');
    resetForm();
  };

  return (
    <Wrapper>
      <RegisterHeader>REGISTER</RegisterHeader>
      <Formik
        initialValues={initialValues}
        onSubmit={formSubmit}
        validationSchema={schema}
      >
        <Form>
          <FormLabel>
            Name *
            <FormInput type="text" name="name" required />
            <ErrorMessage name="name" component="div" />
          </FormLabel>
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
          <RegisterButton type="submit">Register</RegisterButton>
        </Form>
      </Formik>
      <LoginButton type="button" onClick={() => navigate('/login')}>
        Log in
      </LoginButton>
    </Wrapper>
  );
};
