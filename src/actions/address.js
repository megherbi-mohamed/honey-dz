import * as api from '../api/index.js';

export const getUserAddresses = () => async (dispatch) => {
    try {
        const {data} = await api.getUserAddresses();
        dispatch({ type: "GET_USER_ADDRESSES", payload: data });
    } catch (error) {
        console.log(error);
    }
};

export const getUserAddress = (id) => async (dispatch) => {
    try {
        const {data}  = await api.getUserAddress(id);
        dispatch({ type: "GET_USER_ADDRESS", payload: data });
    } catch (error) {
        console.log(error);
    }
};

export const insertAddress = (formData,navigate) => async (dispatch) => {
    dispatch({ type: "loading", payload: {message: '',loading: true} });
    try {
        const {data} = await api.insertAddress(formData);
        dispatch({ type: "loading", payload: {message:data.message, loading: false} });
        dispatch(getUserAddresses());
        dispatch({ type: "reset" });
        navigate('/account/addresses');
    } catch (error) {
        dispatch({ type: "loading", payload: {message:error.message, loading: false} });
        console.log(error);
    }
};

export const updateAddress = (id, formData) => async (dispatch) => {
    dispatch({ type: "loading", payload: {message: '',loading: true} });
    try {
        const {data} = await api.updateAddress(id,formData);
        dispatch({ type: "loading", payload: {message:data.message, loading: false} });
        dispatch(getUserAddresses());
        dispatch({ type: "reset" });
    } catch (error) {
        dispatch({ type: "loading", payload: {message:error.message, loading: false} });
        console.log(error);
    }
};

export const deleteUserAddress = (id) => async (dispatch) => {
    dispatch({ type: "loading", payload: {message: '',loading: true} });
    try {
        const {data} = await api.deleteUserAddress(id);
        dispatch({ type: "loading", payload: {message:data.message, loading: false} });
        dispatch({type:'display',payload: {hideBody:'',confirmation:''}})
        dispatch(getUserAddresses());
        dispatch({ type: "reset" });
        
    } catch (error) {
        dispatch({ type: "loading", payload: {message:error.message, loading: false} });
        console.log(error);
    }
};