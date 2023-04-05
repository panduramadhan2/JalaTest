/* eslint-disable no-param-reassign */
import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';

const initialState = {
  isToggleLocationSearch: false,
  isToggSizeSearch: false,
};

export const globalSlice = createSlice({
  name: 'global',
  initialState,
  reducers: {
    setIshandleToggleLocationSearch: (state, action) => {
      state.isToggleLocationSearch = action.payload;
    },
    setIshandleToggSizeSearch: (state, action) => {
      state.isToggSizeSearch = action.payload;
    },
  },
});

export const {setIshandleToggleLocationSearch, setIshandleToggSizeSearch} =
  globalSlice.actions;

export default globalSlice.reducer;
