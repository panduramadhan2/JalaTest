import {configureStore} from '@reduxjs/toolkit';
import {hitHomeJava} from '../api';

import {rootReducers} from './rootReducer';

export const store = configureStore({
  reducer: rootReducers,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: hitHomeJava,
        // hitLogin,
        // hitTransaksi,
      },
      serializableCheck: false,
    }),
});
