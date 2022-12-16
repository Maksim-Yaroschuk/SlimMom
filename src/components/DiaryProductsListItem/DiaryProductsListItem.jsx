import { Item } from "./DiaryProductsListItem.styled"

export const DiaryProductsListItem = ({name, grams, calories}) => {
  return (
    <Item>
      <p>{name}</p>
      <p>{grams} g</p>
      <p>{calories} kcal</p>
      <button>x</button>
    </Item>
  )
}