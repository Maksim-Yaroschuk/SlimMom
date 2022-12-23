import axios from "axios"
import { DiaryProductsListItem } from "components/DiaryProductsListItem/DiaryProductsListItem"
// import moment from "moment/moment"
import { useEffect } from "react"
import { useState } from "react"
import { useSelector } from "react-redux"
import { getToken } from "redux/authSelectors"
import { selectDate } from "redux/dateSelectors"
import { List } from "./DiaryProductsList.styled"


// const products = [
//   {
//     id: 1,
//     name: "Egg",
//     grams: 67,
//     calories: 145
//   },
//   {
//     id: 2,
//     name: "Bacon",
//     grams: 131,
//     calories: 542
//   },
//   {
//     id: 3,
//     name: "Bread",
//     grams: 83,
//     calories: 223
//   },
//   {
//     id: 4,
//     name: "Puncakes",
//     grams: 246,
//     calories: 672
//   },
//   {
//     id: 5,
//     name: "Ice cream",
//     grams: 143,
//     calories: 254
//   },
//   {
//     id: 6,
//     name: "Cabbage",
//     grams: 94,
//     calories: 104
//   },
// ]

export const DiaryProductsList = () => {
  const [products, setProducts] = useState([])
  const token = useSelector(getToken)
  const date = useSelector(selectDate)
  const getProducts = async () => {
    console.log(typeof date);
    try {
      const res = await axios.get(`https://slimmom-oz0k.onrender.com/api/myProducts/`, {
      headers: {
        Authorization: `Bearer ${token}` 
      },
      params: { "date": date },
    })
    const result = await res.data.data
    setProducts(result)
    } catch (error) {
      console.log(error);
    }
    
  } 

  useEffect(() => {
    getProducts()
  })

  return (
    <List>
      {products.map((product) => {
        return <DiaryProductsListItem key={product.id} id={product.id} name={product.name} grams={product.grams} calories={product.calories} />
      })}
    </List>
  )
}