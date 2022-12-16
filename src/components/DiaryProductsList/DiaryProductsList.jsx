import { DiaryProductsListItem } from "components/DiaryProductsListItem/DiaryProductsListItem"
import { List } from "./DiaryProductsList.styled"

const products = [
  {
    id: 1,
    name: "egg",
    grams: 300,
    calories: 400
  },
  {
    id: 2,
    name: "egg",
    grams: 300,
    calories: 400
  },
  {
    id: 3,
    name: "egg",
    grams: 300,
    calories: 400
  },
  {
    id: 4,
    name: "egg",
    grams: 300,
    calories: 400
  },
  {
    id: 5,
    name: "egg",
    grams: 300,
    calories: 400
  },
  {
    id: 6,
    name: "egg",
    grams: 300,
    calories: 400
  },
]

export const DiaryProductsList = () => {
  return (
    <List>
      {products.map((product) => {
        return <DiaryProductsListItem key={product.id} name={product.name} grams={product.grams} calories={product.calories} />
      })}
    </List>
  )
}