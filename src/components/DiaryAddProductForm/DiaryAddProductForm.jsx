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
  SearchBox,
  SearchItem
} from './DiaryAddProductForm.styled';
import AddIcon from "../../images/svg/add.svg"
import axios from 'axios';
import { useState } from 'react';



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
  const [products, setProducts] = useState([])
  const [visible, setVisible] = useState(false)

  const search = async (value) => {
    try {
      const res = await axios(`https://slimmom-oz0k.onrender.com/api/products/searchProducts?title=${value}`)
      const result = await res.data.data
      setProducts(result)
    } catch (error) {
      setProducts([])
    }
  }


  const handleSubmit = (values, { resetForm }) => {
    const params = { ...values }
    schema.validate(params)
    console.log('params', params);
    mobile && onClose()
    resetForm()
  }

  const handleChange = (e) => {
    const productName = e.target.value
    if(productName !== "" && productName.length > 1) {
      search(productName)
      setVisible(true)
    } else {
      setVisible(false)
      setProducts([])
    }
  }

  const handleClick = (setFieldValue, title) => {
    setVisible(false)
    setFieldValue("name", title)
  }

  return (
      <Box position="relative" my="40px">
      <Formik
        enableReinitialize={true}
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={schema}
      >
        {({formikProps, setFieldValue }) => (
          <Box>
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
            <SearchBox className={visible ? "visible" : null}>
              {products !=="" && products.length !== 0 && products.map((product) => {
                return <SearchItem key={product._id} onClick={() => handleClick(setFieldValue, product.title.ua)}>{product.title.ua}</SearchItem>
              })}
            </SearchBox>
          </Box>
        )}
      </Formik>
    </Box>
  )
}