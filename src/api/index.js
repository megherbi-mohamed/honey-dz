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
export const getProduct = (name) => API.get(`/products/name?name=${name}`);
export const insertCommande = (formData) => API.post(`/commande`,formData);

export const signIn = (formData) => API.post('/user/signin', formData);
export const signUp = (formData) => API.post('/user/signup', formData);