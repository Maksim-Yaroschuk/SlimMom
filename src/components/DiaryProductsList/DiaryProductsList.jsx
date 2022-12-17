import { DiaryProductsListItem } from "components/DiaryProductsListItem/DiaryProductsListItem"
import { List } from "./DiaryProductsList.styled"

const products = [
  {
    id: 1,
    name: "Egg",
    grams: 67,
    calories: 145
  },
  {
    id: 2,
    name: "Bacon",
    grams: 131,
    calories: 542
  },
  {
    id: 3,
    name: "Bread",
    grams: 83,
    calories: 223
  },
  {
    id: 4,
    name: "Puncakes",
    grams: 246,
    calories: 672
  },
  {
    id: 5,
    name: "Ice cream",
    grams: 143,
    calories: 254
  },
  {
    id: 6,
    name: "Cabbage",
    grams: 94,
    calories: 104
  },
]

export const DiaryProductsList = () => {
  return (
    <List>
      {products.map((product) => {
        return <DiaryProductsListItem key={product.id} id={product.id} name={product.name} grams={product.grams} calories={product.calories} />
      })}
    </List>
  )
}