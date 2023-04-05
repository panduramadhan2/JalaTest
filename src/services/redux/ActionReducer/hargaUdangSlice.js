/* eslint-disable no-param-reassign */
import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import {hitHomeJava} from '../../api';

const initialState = {
  //   value: 0,
  data: null,
  dataJava: null,
  // data1: null,
  //   username: null,
  //   email: null,
};

export const hargaUdangSlice = createSlice({
  name: 'hargaUdang',
  initialState,
  reducers: {
    // setLogin: (state, action) => {
    //   state.data = action.payload;
    //   // console.log(state.data);
    // },
    setLoginJava: (state, action) => {
      state.dataJava = action.payload;
      // console.log(state.data);
    },
  },
});

export const getLoginJava = request => async dispatch => {
  try {
    const response = await hitHomeJava(request);
    dispatch(setLoginJava(response.data.data));
    // dispatch(setLogin(response.data.nameAlias));
  } catch (err) {
    throw new Error(err);
  }
};

// Action creators are generated for each case reducer function
export const {setLoginJava} = hargaUdangSlice.actions;

export default hargaUdangSlice.reducer;
