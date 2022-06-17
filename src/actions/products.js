import * as api from "../api";

export const getAllProducts = () => async (dispatch) => {
  try {
    const { data } = await api.getAllProducts();
    dispatch({ type: "GET_ALL_PRODUCTS", payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const getCategoryProducts = (category) => async (dispatch) => {
  try {
    const { data } = await api.getCategoryProducts(category);
    dispatch({ type: "GET_CATEGORY_PRODUCTS", payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const getProduct = (id) => async (dispatch) => {
  try {
    const { data } = await api.getProduct(id);
    const product = [{id:data._id,front:data.front,side:data.side,nom:data.nom,price:data.prix,color:data.color,size:''}];
    // const result = Object.keys(product).map((key) => [Number(key), product[key]]);
    // console.log(result);
    dispatch({ type: "GET_PRODUCT", payload: product });
  } catch (error) {
    console.log(error.message);
  }
};

