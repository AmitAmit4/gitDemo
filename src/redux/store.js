import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../redux/userSlice';
import cartReducer from '../redux/cartSlice';
import usingcartReducer from '../redux/usingcartSlice';

export const store = configureStore({
  reducer: {
    user : userReducer,
    cart : cartReducer,
    usingcart: usingcartReducer
  },
})