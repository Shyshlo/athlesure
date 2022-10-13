import { createSlice } from '@reduxjs/toolkit';

export const slice = createSlice({
    name: 'cart',
    initialState: {
        cartItems: []
    },
    reducers: {
      addItemToCart: (state, action) => {
        const timeID = new Date().getTime()
        state.cartItems.push({
            id: timeID,
            clotherID: action.payload.elements.id,
            quantity: action.payload.quantity,
        /* clotherID - придумали название  - это id товара из компон Clother map  из  data, 
      quantity  - это количество товара, к-е П добавл в корзину из Clother.js  Changequntity*/
            totalPrice: action.payload.quantity * action.payload.elements.price
        });
          },
          removeItemFromCart: (state, action) => {
            state.cartItems = state.cartItems.filter(
              cartItem => cartItem.id !== action.payload.cartItemId
            )
          }
        }
        /*выше мы написали, чтобы при клике удалялись элементы*/
  })
  export const getTotalPrice = state => {
    return state.cart.cartItems.reduce((total, cartItems) => {
      return cartItems.totalPrice + total}, 0)
    }
  
  
  export const getCartItems = state => state.cart.cartItems;
  export const { addItemToCart, removeItemFromCart } = slice.actions;
  export default slice.reducer;