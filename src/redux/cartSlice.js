import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [], // Array of items in the cart
  totalQuantity: 0, // Total quantity of all items
  totalPrice: 0, // Total price of all items
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find(item => item.id === newItem.id);

      if (existingItem) {
        existingItem.quantity += newItem.quantity;
        existingItem.totalPrice += newItem.price * newItem.quantity;
      } else {
        state.items.push({
          ...newItem,
          totalPrice: newItem.price * newItem.quantity,
        });
      }

      state.totalQuantity += newItem.quantity;
      state.totalPrice += newItem.price * newItem.quantity;

      console.log("state of cart in store", state.items);
      
    },
    removeItem(state, action) {
      const id = action.payload;
      const existingItem = state.items.find(item => item.id === id);

      if (existingItem) {
        state.totalQuantity -= existingItem.quantity;
        state.totalPrice -= existingItem.totalPrice;
        state.items = state.items.filter(item => item.id !== id);
      }
    },
    updateItemQuantity(state, action) {
      const { id, quantity } = action.payload;
      const existingItem = state.items.find(item => item.id === id);

      if (existingItem) {
        const quantityDifference = quantity - existingItem.quantity;
        state.totalQuantity += quantityDifference;
        state.totalPrice += quantityDifference * existingItem.price;

        existingItem.quantity = quantity;
        existingItem.totalPrice = existingItem.price * quantity;
      }
    },
  },
});

export const { addItem, removeItem, updateItemQuantity } = cartSlice.actions;

export default cartSlice.reducer;
