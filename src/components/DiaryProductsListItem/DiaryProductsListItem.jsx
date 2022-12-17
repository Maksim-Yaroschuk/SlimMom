import { Item, Icon } from "./DiaryProductsListItem.styled"
import CrossIcon from "../../images/svg/cross.svg"

export const DiaryProductsListItem = ({id, name, grams, calories}) => {
  const handleDelete = (id) => {
    //deleting product by id
    console.log(id);
  }

  return (
    <Item>
      <p className="products-item-name">{name}</p>
      <p className="products-item-grams">{grams} g</p>
      <p className="products-item-calories">{calories} <span>kcal</span></p>
      <Icon src={CrossIcon} alt="delete product" onClick={() => {handleDelete(id)}}/>
    </Item>
  )
}