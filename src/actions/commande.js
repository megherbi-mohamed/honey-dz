import * as api from '../api/index.js';

export const insertCommande = (formData, navigate) => async (dispatch) => {
    dispatch({ type: "loading", payload: {button: true} });
    try {
        const {data} = await api.insertCommande(formData);
        dispatch({ type: "loading", payload: {button: false} });
        navigate('/account');
    } catch (error) {
        console.log(error);
    }
};