import axios from 'axios';

axios.defaults.baseURL = 'https://slimmom-oz0k.onrender.com';
// const API_KEY = '';

const END_POINTS = {
  DailyCalorieIntake: '/api/products',
  AddMyProduct: '/api/myProducts/addProduct',
  ListMyProducts: '/api/myProducts/listMyProduct',
  DeleteMyProduct: '/api/myProducts/',
  GetSearchProducts: '/api/products/searchProducts',
  UpdateUserInfo: '/api/users/infouser'
};

export const apiCalorieIntake = async body => {
  const res = await axios.post(END_POINTS.DailyCalorieIntake, body);
  return res.data;
};

export const apiUpdateInfoUser = async (token, body) => {
  const res = await axios.patch(END_POINTS.UpdateUserInfo, body, {
    headers: {
      Authorization: `Bearer ${token}`
    },
  })
  return res.data.result
}

export const apiAddMyProduct = async (body, token, date) => {
  const res = await axios.post(END_POINTS.AddMyProduct, body, {
    headers: {
      Authorization: `Bearer ${token}`
    },
  })

  const result = await res.data.newProduct.productInfo
  return result
}

export const apiDeleteMyProduct = async (id, token, date) => {
  const res = await axios.delete(END_POINTS.DeleteMyProduct + id, {
    headers: {
    Authorization: `Bearer ${token}` 
  },
  data: {
    date
  }
  })
  const result = await res.data.newProduct.productInfo
  return result
}

export const apiListMyProducts = async (date, token) => {
  const res = await axios.post(END_POINTS.ListMyProducts, {
    date
   }, {
   headers: {
     Authorization: `Bearer ${token}`
   },
  })
  const result = await res.data.productList;
  return result
}

export const apiGetSearchProducts = async (value) => {
  const res = await axios(END_POINTS.GetSearchProducts, {
    params: {
      title: value
    }
  })
  const result = await res.data.data
  return result
}