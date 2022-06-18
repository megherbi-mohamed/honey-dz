import axios from 'axios';

const API = axios.create({ baseURL: 'https://honey-dz.herokuapp.com/' });

API.interceptors.request.use((req) => {
  if (localStorage.getItem('profile')) {
    req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
  }
  return req;
});

export const getAllProducts = () => API.get(`/products`);
export const getCategoryProducts = (category) => API.get(`/products/category?category=${category}`);
export const getProduct = (id) => API.get(`/products/${id}`);

export const getUserCommandes = () => API.get(`/commande`);
export const insertOnlineCommande = (formData) => API.post(`/commande/online`,formData);
export const insertOfflineCommande = (formData) => API.post(`/commande/offline`,formData);

export const getUserAddresses = () => API.get(`/address`);
export const getUserAddress = (id) => API.get(`/address/${id}`);
export const insertAddress = (formData) => API.post(`/address`,formData);
export const updateAddress = (id,formData) => API.patch(`/address/${id}`,formData);
export const deleteUserAddress = (id) => API.delete(`/address/${id}`);

export const signIn = (formData) => API.post('/user/signin', formData);
export const signUp = (formData) => API.post('/user/signup', formData);