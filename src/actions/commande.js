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

export const insertCommande = (formData, navigate) => async (dispatch) => {
    dispatch({ type: "loading", payload: {message: '',loading: true} });
    try {
        const {data} = await api.insertCommande(formData);
        dispatch({ type: "loading", payload: {message:data.message, loading: false} });
        dispatch({ type: "reset" });
        navigate('/account');
    } catch (error) {
        dispatch({ type: "loading", payload: {message:error.message, loading: false} });
        console.log(error);
    }
}