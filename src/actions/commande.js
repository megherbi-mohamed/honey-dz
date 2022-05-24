// import { AUTH } from '../constants/actionTypes';
import * as api from '../api/index.js';

export const insertCommande = async (formData, navigate) => {
    console.log(formData);

    try {
        const {data} = await api.insertCommande(formData);
        console.log(data);
        // dispatch({ type: AUTH, data });
        // navigate('/account');
    } catch (error) {
        console.log(error);
    }
};