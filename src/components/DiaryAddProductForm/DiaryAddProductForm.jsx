import { Box } from 'components/Box';
import React from 'react';
import { useMediaQuery } from 'react-responsive';
import { ErrorMessage, Formik } from 'formik';
import * as yup from 'yup';
import {
  NameInput,
  GramsInput,
  Button,
  FormWrapper,
  SearchBox,
  SearchItem,
  NameError,
  GramsError,
  SearchItemNotRecommended
} from './DiaryAddProductForm.styled';
import AddIcon from "../../images/svg/add.svg"
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getToken } from 'redux/authSelectors';
import { selectDate } from 'redux/productsSelectors';
import { setProducts } from 'redux/productsSlice';
import { apiAddMyProduct, apiGetSearchProducts } from 'services/api/api';
import { getUserInfo } from 'redux/authSelectors';

const schema = yup.object().shape({
  productName: yup
    .string()
    .required('Name is required field'),
  productWeight: yup
    .number('Grams must be a number')
    .typeError('Grams must be a number')
    .required('Grams is required field')
})

export const DiaryAddProductForm = ({onClose, isModalOpened}) => {
  const token = useSelector(getToken)
  const dispatch = useDispatch()
  const date = useSelector(selectDate)
  const mobile = useMediaQuery({ query: '(max-width: 426px)' });
  const initialValues = {
    productName: '',
    productWeight: '',
  };
  const [searchProducts, setSearchProducts] = useState([])
  const [visible, setVisible] = useState(false)
  const userInfo = useSelector(getUserInfo)

  const search = async (value) => {
    try {
      const result = await apiGetSearchProducts(value)
      setSearchProducts(result)
    } catch (error) {
      setSearchProducts([])
    }
  }

  const handleSubmit = async (values, { resetForm }) => {
    schema.validate(values)
    const {productName, productWeight} = values
    const body = {productName, productWeight: parseInt(productWeight), date}
    try {
      const result = await apiAddMyProduct(body, token, date)
      if(result.length>0) {
        dispatch(setProducts(result))
      } else {
        dispatch(setProducts([]))
      }
    } catch (error) {
      alert("Oops.. Product not found!")
    }
    mobile && onClose()
    resetForm()
  }

  const handleChange = (e) => {
    const productName = e.target.value
    if (e.target.name === "productName") {
      if(productName !== "" && productName.length > 1) {
        search(productName)
        setVisible(true)
      } else {
        setVisible(false)
        setSearchProducts([])
      }
    }
  }

  const handleClick = (setFieldValue, title) => {
    setVisible(false)
    setFieldValue("productName", title)
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
                type="productName"
                placeholder="Enter product name"
                name="productName"
                autoComplete="off"
              />
              <ErrorMessage name='productName' component={NameError} />
              <GramsInput
                type="productWeight"
                placeholder="Grams"
                name="productWeight"
                autoComplete="off"
              />
              <ErrorMessage name='productWeight' component={GramsError} />
              {mobile ? <Button type="submit">Add</Button> : <Button type="submit"><img src={AddIcon} alt="add product" /></Button>}
            </FormWrapper>
            <SearchBox className={visible ? "visible" : null}>
              {searchProducts !=="" && searchProducts.length !== 0 && searchProducts.map((product) => {
                if(userInfo.notAllowedProductsAll.find(el => el === product.title.ua)) {
                  return <SearchItemNotRecommended key={product._id} onClick={() => handleClick(setFieldValue, product.title.ua)}>{product.title.ua}</SearchItemNotRecommended>
                }
                return <SearchItem key={product._id} onClick={() => handleClick(setFieldValue, product.title.ua)}>{product.title.ua}</SearchItem>
              })}
            </SearchBox>
          </Box>
        )}
      </Formik>
    </Box>
  )
}
