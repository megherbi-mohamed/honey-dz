import * as api from '../api/index.js';

export const getUserCommandes = () => async (dispatch) => {
    try {
        const {data} = await api.getUserCommandes();
        dispatch({type:'GET_USER_COMMANDES', payload: data});
    } catch (error) {
        dispatch({ type: "loading", payload: {message:error.message, loading: false} });
        console.log(error);
    }
}

export const insertOnlineCartCommande = (formData, navigate, emptyCart) => async (dispatch) => {
    dispatch({ type: "loading", payload: {message: '',loading: true} });
    try {
        const {data} = await api.insertOnlineCommande(formData);
        dispatch({ type: "loading", payload: {message:data.message, loading: false} });
        dispatch({ type: "reset" });
        emptyCart();
        navigate('/account');
    } catch (error) {
        dispatch({ type: "loading", payload: {message:error.message, loading: false} });
        console.log(error);
    }
}

export const insertOnlineProductCommande = (formData, navigate) => async (dispatch) => {
    dispatch({ type: "loading", payload: {message: '',loading: true} });
    try {
        const {data} = await api.insertOnlineCommande(formData);
        dispatch({ type: "loading", payload: {message:data.message, loading: false} });
        dispatch({ type: "reset" });
        navigate('/account');
    } catch (error) {
        dispatch({ type: "loading", payload: {message:error.message, loading: false} });
        console.log(error);
    }
}

export const insertOfflineCartCommande = (formData, navigate, emptyCart) => async (dispatch) => {
    dispatch({ type: "loading", payload: {message: '',loading: true} });
    try {
        const {data} = await api.insertOfflineCommande(formData);
        dispatch({ type: "loading", payload: {message:data.message, loading: false} });
        dispatch({ type: "reset" });
        emptyCart();
        navigate('/');
    } catch (error) {
        dispatch({ type: "loading", payload: {message:error.message, loading: false} });
        console.log(error);
    }
}

export const insertOfflineProductCommande = (formData, navigate) => async (dispatch) => {
    dispatch({ type: "loading", payload: {message: '',loading: true} });
    try {
        const {data} = await api.insertOfflineCommande(formData);
        dispatch({ type: "loading", payload: {message:data.message, loading: false} });
        dispatch({ type: "reset" });
        navigate('/');
    } catch (error) {
        dispatch({ type: "loading", payload: {message:error.message, loading: false} });
        console.log(error);
    }
}