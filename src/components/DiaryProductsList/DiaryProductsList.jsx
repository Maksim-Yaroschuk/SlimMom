import axios from "axios"
import { DiaryProductsListItem } from "components/DiaryProductsListItem/DiaryProductsListItem"
// import moment from "moment/moment"
import { useEffect } from "react"
// import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getToken } from "redux/authSelectors"
import { getProducts, selectDate } from "redux/productsSelectors"
import { setProducts } from "redux/productsSlice"
import { List } from "./DiaryProductsList.styled"

export const DiaryProductsList = () => {
  // const [products, setProducts] = useState([])
  const token = useSelector(getToken)
  const date = useSelector(selectDate)
  const dispatch = useDispatch()
  const products = useSelector(getProducts)
  useEffect(() => {
    const getProducts = async () => {
      try {
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
    } 
    getProducts()
  }, [date, dispatch, token])

  return (
    <List>
      {products.length !== 0 && products.map((product) => {
        return <DiaryProductsListItem key={product._id} id={product._id} name={product.productName} grams={product.productWeight} calories={product.productCalories} />
      })}
    </List>
  )
}