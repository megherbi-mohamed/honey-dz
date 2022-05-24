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

export const getProduct = (name) => async (dispatch) => {
  try {
    const { data } = await api.getProduct(name);
    const product = [{id:data[0]._id,front:data[0].front,side:data[0].side,nom:data[0].nom,price:data[0].prix,color:data[0].color,size:''}];
    dispatch({ type: "GET_PRODUCT", payload: product });
  } catch (error) {
    console.log(error.message);
  }
};

