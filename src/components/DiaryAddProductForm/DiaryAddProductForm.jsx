import { Box } from 'components/Box';
import React from 'react';
import { useMediaQuery } from 'react-responsive';
import { Formik } from 'formik';
import * as yup from 'yup';
import {
  NameInput,
  GramsInput,
  Button,
  FormWrapper,
} from './DiaryAddProductForm.styled';
import AddIcon from "../../images/svg/add.svg"
// import { useState } from 'react';

const schema = yup.object().shape({
  name: yup.string().required(),
  grams: yup.number().required()
})

export const DiaryAddProductForm = ({onClose, isModalOpened}) => {
  const mobile = useMediaQuery({ query: '(max-width: 426px)' });
  const initialValues = {
    name: '',
    grams: '',
  };

  // const [productName, setProductName] = useState('')

  const handleSubmit = (values, { resetForm }) => {
    const params = { ...values }
    schema.validate(params)
    console.log('params', params);
    mobile && onClose()
    resetForm()
  }

  const handleChange = (e) => {
    if(e.target.name === "name") {
      console.log(e.target.value);
    }
  }

  return (
      <Box position="relative" my="40px">
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={schema}
      >
        {formikProps => (
            <FormWrapper onChange={handleChange}>
            <NameInput
              type="text"
              placeholder="Enter product name"
              name="name"
            />
            <GramsInput
              type="text"
              placeholder="Grams"
              name="grams"
            />
            {mobile ? <Button type="submit">Add</Button> : <Button type="submit"><img src={AddIcon} alt="add product" /></Button>}
          </FormWrapper>
          )}
      </Formik>
    </Box>
    )
}