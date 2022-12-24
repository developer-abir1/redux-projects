import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cart: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const selectedProduct = state.cart.find(
        (product) => product.id === action.payload.id
      );
      // console.log('this is actction di', selectedProduct);
      if (!selectedProduct) {
        const product = { ...action.payload, qty: 1 };
        console.log('this is vitore er products', product);
        state.cart.push(product);
      } else {
        selectedProduct.qty += 1;

        state.cart
          .filter((products) => products.id !== selectedProduct.id)
          .push(selectedProduct);
        console.log('ami akhon plus bari teo pari', selectedProduct);
      }
    },
    removeQty: (state, action) => {
      if (action.payload.qty > 1) {
        const product = {
          ...action.payload,
          qty: action.payload.qty - 1,
        };

        state.cart = state.cart.filter(
          (product) => product.id !== action.payload.id
        );
        state.cart.push(product);
      }
    },

    removeProduct: (state, action) => {
      state.cart = state.cart.filter(
        (product) => product.id !== action.payload.id
      );
    },
  },
});

export const { addToCart, removeQty, removeProduct } = cartSlice.actions;

export default cartSlice.reducer;
