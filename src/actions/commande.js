// import { AUTH } from '../constants/actionTypes';
import * as api from '../api/index.js';
// import { useAlert } from 'react-alert'


export const insertCommande = async (formData, navigate) => {
    // const alert = useAlert()
    try {
        const {data} = await api.insertCommande(formData);
        if (data) {
            // alert.success('Commande sent with success',{ timeout: 4000});
            navigate('/account');
        }
    } catch (error) {
        console.log(error);
        // alert.error('Error to sent commande, try again please',{ timeout: 4000});
    }
};