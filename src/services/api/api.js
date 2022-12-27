import axios from 'axios';

axios.defaults.baseURL = 'https://slimmom-oz0k.onrender.com';
// const API_KEY = '';

const END_POINTS = {
  DailyCalorieIntake: '/api/products',
  AddMyProduct: '/api/myProducts/addProduct',
  ListMyProducts: '/api/myProducts/listMyProduct',
  DeleteMyProduct: '/api/myProducts/',
  GetSearchProducts: 'api/products/searchProducts'
};

export const apiCalorieIntake = async body => {
  const res = await axios.post(END_POINTS.DailyCalorieIntake, body);
  return res.data;
};

export const apiAddMyProduct = async (body, token, date) => {
  await axios.post(END_POINTS.AddMyProduct, body, {
    headers: {
      Authorization: `Bearer ${token}`
    },
  })
  const res = await axios.post(END_POINTS.ListMyProducts, {
         date
        }, {
        headers: {
          Authorization: `Bearer ${token}`
        },
      })
  const result = await res.data.productList
  return result
}

export const apiDeleteMyProduct = async (id, token, date) => {
  await axios.delete(END_POINTS.DeleteMyProduct + id, {
    headers: {
    Authorization: `Bearer ${token}` 
  },
  data: {
    date
  }
  })
  const res = await axios.post(END_POINTS.ListMyProducts, {
    date
   }, {
   headers: {
     Authorization: `Bearer ${token}`
   },
  })
  const result = await res.data.productList[0].productInfo
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