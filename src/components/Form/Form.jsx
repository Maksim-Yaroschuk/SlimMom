import React from 'react';
// import { useState, useEffect } from 'react';
import { Formik, ErrorMessage, Form } from 'formik';
import { useMediaQuery } from 'react-responsive';
import * as yup from 'yup';
// import { apiCalorieIntake } from '../../services/api/api';
// import { saveInSession, loadFromSession } from '../../services/session/storage';
import { Box } from 'components/Box';
import { ButtonForm } from './Form.styled';
// import { useNavigate } from 'react-router-dom';
import {
  ButtonWrapper,
  Checkbox,
  CheckboxContainer,
  Error,
  Input,
  Label,
  List,
  Paragraph,
} from './Form.styled';

const schema = yup.object().shape({
  height: yup
    .number('Height is use only number')
    .min(100, 'Please enter a number more than or equal to 100')
    .max(250, 'Please enter a number less than or equal to 250')
    .integer('Height must be a integer number')
    .required('Height is required field'),
  age: yup
    .number('Age is use only number')
    .min(18, 'Please enter a number more than or equal to 18')
    .max(100, 'Please enter a number less than or equal to 100')
    .required('Age is required field')
    .integer('Age must be a integer number'),
  currentWeight: yup
    .number('Current weight is use only number')
    .min(20, 'Please enter a number more than or equal to 20')
    .max(500, 'Please enter a number less than or equal to 500')
    .required('Current weight is required field')
    .integer('Current weight must be a integer number'),
  desiredWeight: yup
    .number('Desired weight is use only number')
    .min(20, 'Please enter a number more than or equal to 20')
    .max(500, 'Please enter a number less than or equal to 500')
    .required('Desired weight is required field')
    .integer('Desired weight must be a integer number'),
  bloodType: yup.string().required(),
});

export const WeightForm = ({ changeState, initialValues }) => {
  // const [param, setParam] = useState([]);
  const isMobile = useMediaQuery({ query: '(max-width: 554px)' });
  // const navigate = useNavigate();

  if (!initialValues) {
    initialValues = {
      height: '',
      age: '',
      currentWeight: '',
      desiredWeight: '',
      bloodType: '1',
    };
  }

  const handleSubmit = (values, { resetForm }) => {
    const params = { ...values };
    schema.validate(params);

    // setParam(params);
    // saveInSession('params', params);
    // resetForm();

  //   if (!changeState) {
  //     navigate('/diary');
  //   }
  };

  // useEffect(() => {
  //   const fetch = () => {
  //     apiCalorieIntake(param)
  //       .then(res => {
  //         saveInSession('products', res);
  //       })
  //       .catch(error => {
  //         console.log('error', error);
  //       });
  //   };
  //   fetch();
  // }, [param]);
  // console.log('loadFromSession', loadFromSession('products'));
  return (
    <Box>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={schema}
      >
        <Form>
          <List>
            <li
              style={
                isMobile
                  ? null
                  : {
                      gridColumnStart: '1',
                      gridColumnEnd: '1',
                      gridRowStart: '1',
                      gridRowEnd: '1',
                    }
              }
            >
              <label>
                <Input type="height" name="height" placeholder="Height, cm *" required/>
                <ErrorMessage name="height" component={Error} />
              </label>
            </li>

            <li
              style={
                isMobile
                  ? null
                  : {
                      gridColumnStart: '1',
                      gridColumnEnd: '1',
                      gridRowStart: '2',
                      gridRowEnd: '2',
                    }
              }
            >
              <label>
                <Input type="age" name="age" placeholder="Age *" required/>
                <ErrorMessage name="age" component={Error} />
              </label>
            </li>

            <li
              style={
                isMobile
                  ? null
                  : {
                      gridColumnStart: '1',
                      gridColumnEnd: '1',
                      gridRowStart: '3',
                      gridRowEnd: '3',
                      position: 'relative',
                      top: '-20px',
                    }
              }
            >
              <label>
                <Input
                  type="currentWeight"
                  name="currentWeight"
                  placeholder="Current weight, kg *"
                  required
                />
                <ErrorMessage name="currentWeight" component={Error} />
              </label>
            </li>

            <li>
              <label>
                <Input
                  type="desiredWeight"
                  name="desiredWeight"
                  placeholder="Desired weight, kg *"
                  required
                />
                <ErrorMessage name="desiredWeight" component={Error} />
              </label>
            </li>

            <li>
              <Paragraph>Blood type *</Paragraph>
              <CheckboxContainer role="group" aria-labelledby="my-radio-group">
                <Label>
                  <Checkbox type="radio" name="bloodType" value="1" checked />1
                </Label>
                <Label>
                  <Checkbox type="radio" name="bloodType" value="2" />2
                </Label>
                <Label>
                  <Checkbox type="radio" name="bloodType" value="3" />3
                </Label>
                <Label>
                  <Checkbox type="radio" name="bloodType" value="4" />4
                </Label>
              </CheckboxContainer>
            </li>
          </List>
          <ButtonWrapper
            onClick={() =>
              // setTimeout(() => {
                changeState(true)
              // }, 1000)
            }
          >
            <ButtonForm type="submit">Start losing weight</ButtonForm>
          </ButtonWrapper>
        </Form>
      </Formik>
    </Box>
  );
};
// import axios from 'axios';
// axios.defaults.baseURL = 'https://slimmom-oz0k.onrender.com';
// axios
//   .post('/api/products', param)
//   .then(function (response) {
//     // setProducts(response.data);

//     saveInSession('products', response.data);
//     console.log('response', response.data);
//     console.log('loadFromSession products', loadFromSession('products'));
//     console.log('response', response.data);
//   })
//   .catch(function (error) {
//     // setError(error);
//     console.log('error', error);
//   });
// // .finally(setLoading(false));
