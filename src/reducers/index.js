import { combineReducers } from 'redux';

import display from './displayViews';
import data from './data';
import products from './products';
import auth from './auth';
import message from './message'
import addresses from './addresses';
import countryState from './countryState';
import commandes from './commandes';

export default combineReducers({ display,data,products,auth,message,addresses,countryState,commandes });