import { configureStore } from '@reduxjs/toolkit';
import themesReducer from '../reducers/themesReducer';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, themesReducer);

const store = configureStore({
  reducer: {
    themes: persistedReducer,
  },
});

export const persistor = persistStore(store);
export default store;
