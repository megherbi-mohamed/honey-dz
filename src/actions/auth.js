import { AUTH } from '../constants/actionTypes';
import * as api from '../api/index.js';

export const signin = (formData, navigate) => async (dispatch) => {
  dispatch({ type: "loading", payload: {message: '',loading: true} });
  try {
    const { data } = await api.signIn(formData);
    dispatch({ type: AUTH, data });
    dispatch({ type: "loading", payload: {message:data.message, loading: false} });
    dispatch({ type: "reset" });
    if (data.result) {
      dispatch({ type: 'display', payload: {sideAccount:'',hideBody:''}})
      return navigate('/account');
    }
  } catch (error) {
    dispatch({ type: "loading", payload: {message:error.message, loading: false} });
    console.log(error);
  }
};

export const signup = (formData, navigate) => async (dispatch) => {
  dispatch({ type: "loading", payload: {message: '',loading: true} });
  try {
    const { data } = await api.signUp(formData);
    dispatch({ type: AUTH, data });
    dispatch({ type: "loading", payload: {message:data.message, loading: false} });
    dispatch({ type: "reset" });
    if (data.result) {
      dispatch({ type: 'display', payload: {sideAccount:'',hideBody:''}})
      return navigate('/account');
    }
  } catch (error) {
    dispatch({ type: "loading", payload: {message:error.message, loading: false} });
    console.log(error);
  }
};
