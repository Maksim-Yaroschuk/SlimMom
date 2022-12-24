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
import { useDispatch, useSelector } from 'react-redux';
import { getToken } from 'redux/authSelectors';
import { selectDate } from 'redux/productsSelectors';
import { setProducts } from 'redux/productsSlice';

const schema = yup.object().shape({
  productName: yup.string().required(),
  productWeight: yup.number().required()
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

  const search = async (value) => {
    try {
      const res = await axios(`https://slimmom-oz0k.onrender.com/api/products/searchProducts?title=${value}`)
      const result = await res.data.data
      setSearchProducts(result)
    } catch (error) {
      setSearchProducts([])
    }
  }


  const handleSubmit = async (values, { resetForm }) => {
    schema.validate(values)
    const {productName, productWeight} = values
    try {
      await axios.post(`https://slimmom-oz0k.onrender.com/api/myProducts/addProduct`, {
        productName,
        productWeight,
        date
      }, {
      headers: {
        Authorization: `Bearer ${token}` 
      },
      })
      const res = await axios.post(`https://slimmom-oz0k.onrender.com/api/myProducts/`, {
         "date": date 
        }, {
        headers: {
          Authorization: `Bearer ${token}` 
        },
      })
      const result = await res.data.productList
      if(result.length>0) {
        dispatch(setProducts(result[0].productInfo))
      } else {
        dispatch(setProducts([]))
      }
    } catch (error) {
      console.log(error);
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
              />
              <GramsInput
                type="productWeight"
                placeholder="Grams"
                name="productWeight"
              />
              {mobile ? <Button type="submit">Add</Button> : <Button type="submit"><img src={AddIcon} alt="add product" /></Button>}
            </FormWrapper>
            <SearchBox className={visible ? "visible" : null}>
              {searchProducts !=="" && searchProducts.length !== 0 && searchProducts.map((product) => {
                return <SearchItem key={product._id} onClick={() => handleClick(setFieldValue, product.title.ua)}>{product.title.ua}</SearchItem>
              })}
            </SearchBox>
          </Box>
        )}
      </Formik>
    </Box>
  )
}