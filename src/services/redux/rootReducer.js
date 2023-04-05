import hargaUdangReducer from './ActionReducer/hargaUdangSlice';
import globalReducer from './ActionReducer/globalSlice';

export const rootReducers = {
  global: globalReducer,
  hargaUdang: hargaUdangReducer,
};
