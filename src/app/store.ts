import {
  combineReducers,
  configureStore
} from "@reduxjs/toolkit";

import storage from 'redux-persist/lib/storage'
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { persistReducer } from 'redux-persist'
import authSlice from "features/api/authSlice";
import {apiSlice} from "features/api/apiSlice";


const rootReducer = combineReducers({
  authState: authSlice,
  [apiSlice.reducerPath] : apiSlice.reducer
})


const persistConfig = {
  key: 'root',
  storage,

  blacklist: ["stepState"]
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export type RootState = ReturnType<typeof rootReducer>;

const store = configureStore({
  devTools: process.env.NODE_ENV !== 'production',
  reducer:persistedReducer,
});

export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;

