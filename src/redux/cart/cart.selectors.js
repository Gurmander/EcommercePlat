import { createSelector } from 'reselect';
// Selectors- 
// 2 types
// Input Selector- doesn't use create Selector
// Output Selector- usees createSelector & input selector to build themselves

// Input Selector- Selector that takes in whole state and returns slice of it, one layer deep usually
// state.cart is cart state from rootreducer
const selectCart = state => state.cart;

// Output Selector-

// CreateSelector- takes in 2 arguments, one collection of array of input selectors, 2nd is fn that returns the value we want out of the selector
export const selectCartItems = createSelector(
  [selectCart],
  (cart) => cart.cartItems
);

export const selectCartHidden = createSelector(
  [selectCart],
  cart => cart.hidden
);


// Somehow, with help of createSelector and mentioned input selectors, this output selector has the memoization ability
export const selectCartItemsCount = createSelector(
  [selectCartItems],
  cartItems =>
  cartItems.reduce(
    (accumalatedQuantity, cartItem) => 
    accumalatedQuantity + cartItem.quantity, 0
  )
);

export const selectCartTotal = createSelector(
  [selectCartItems],
  cartItems =>
  cartItems.reduce(
    (accumalatedQuantity, cartItem) => accumalatedQuantity + cartItem.quantity * cartItem.price, 0
  )

)