import { AUTH } from '../constants/actionTypes';
import * as api from '../api/index.js';

export const signin = (formData, navigate) => async (dispatch) => {
  dispatch({ type: "loading", payload: {message: '',loading: true} });
  try {
    const { data } = await api.signIn(formData);
    console.log(data);
    dispatch({ type: AUTH, data });
    dispatch({ type: "loading", payload: {message:data.message, loading: false} });
    navigate('/account');
  } catch (error) {
    // console.log(error);
    dispatch({ type: "loading", payload: {message:error.message, loading: false} });
    console.log(error);
  }
};

export const signup = (formData, navigate) => async (dispatch) => {
  dispatch({ type: "loading", payload: {button: true} });
  try {
    const { data } = await api.signUp(formData);
    dispatch({ type: AUTH, data });
    dispatch({ type: "loading", payload: {button: false} });
    navigate('/account');
  } catch (error) {
    console.log(error);
  }
};
