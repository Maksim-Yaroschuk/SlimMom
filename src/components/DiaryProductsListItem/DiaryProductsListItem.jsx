import { Item, Icon } from "./DiaryProductsListItem.styled"
import CrossIcon from "../../images/svg/cross.svg"
import axios from "axios";
import { getToken } from "redux/authSelectors";
import { useDispatch, useSelector } from "react-redux";
import { selectDate } from "redux/productsSelectors";
import { setProducts } from "redux/productsSlice";

export const DiaryProductsListItem = ({id, name, grams, calories}) => {
  const date = useSelector(selectDate)
  const dispatch = useDispatch()
  const token = useSelector(getToken)
  const handleDelete = async (id) => {
    try {
      await axios.delete(`https://slimmom-oz0k.onrender.com/api/myProducts/${id}`, {
        headers: {
          Authorization: `Bearer ${token}` 
        },
        data: {
          date
        }
      })
      const res = await axios.post(`https://slimmom-oz0k.onrender.com/api/myProducts/`, {
         "date": date 
        }, {
        headers: {
          Authorization: `Bearer ${token}` 
        },
      })
      const result = await res.data.productList[0].productInfo
      dispatch(setProducts(result))
    } catch (err) {
      console.log(err);
    }
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