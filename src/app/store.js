import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import CartSlice from '../features/cartSlice/CartSlice';
import ProductsSlics from '../features/productsSlice/ProductsSlics';

export const store = configureStore({
  reducer: {
    products: ProductsSlics,
    cart: CartSlice,
  },
});
