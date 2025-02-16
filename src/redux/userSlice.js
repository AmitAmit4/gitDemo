import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: 0,
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    reset:(state) => {
      state.value = 0
    },
    incrementByAmount: (state, action) => {
      state.value += Number(action.payload)
    },
    decrementByAmount: (state, action) => {
      state.value -= Number(action.payload)
    },
    multiplyByAmount: (state, action) => {
      state.value = state.value * Number(action.payload)
    },
    divideByAmount: (state, action) => {
      state.value = state.value / Number(action.payload)
    },
    roundof: (state) => {
      state.value = Math.round(state.value) 
    },
     
  },
})

export const { increment, decrement, incrementByAmount, decrementByAmount, reset, multiplyByAmount, divideByAmount, roundof } = userSlice.actions

export default userSlice.reducer