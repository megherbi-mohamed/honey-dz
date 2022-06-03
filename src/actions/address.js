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

export const insertAddress = (formData) => async (dispatch) => {
    dispatch({ type: "loading", payload: {button: true} });
    try {
        const {data} = await api.insertAddress(formData);
        console.log(data);
        dispatch({ type: "loading", payload: {button: false} });
        // navigate('/account');
    } catch (error) {
        console.log(error);
    }
};

export const updateAddress = (id, formData) => async (dispatch) => {
    dispatch({ type: "loading", payload: {button: true} });
    try {
        const {data} = await api.updateAddress(id,formData);
        dispatch({ type: "UPDATE_USER_ADDRESS", payload: data.message });
        dispatch({ type: "UPDATE_USER_ADDRESS", payload:'' });
        dispatch({ type: "loading", payload: {button: false} });
    } catch (error) {
        console.log(error);
    }
};