import { createSlice } from '@reduxjs/toolkit';
import { RootState } from './store';
import type { PayloadAction } from "@reduxjs/toolkit";

export const filterSlice = createSlice({
  name: 'filter',
  initialState: { value: '' },
  reducers: {
    changeFilter(state, action:PayloadAction<string>) {
      state.value = action.payload;
    },
  },
});

export const { changeFilter } = filterSlice.actions;

export const changeFilterValue = (state:RootState) => state.filter.value;
