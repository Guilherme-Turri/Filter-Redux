import { configureStore, combineReducers } from '@reduxjs/toolkit';
import prodcts from './products';

const reducer = combineReducers({ prodcts });
const store = configureStore({ reducer });
export default store;
