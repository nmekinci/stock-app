import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import authReducer from "../features/authSlice";
import stockReducer from "../features/stockSlice";

import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage/session"; // default localstorage but use with session for using sessionstorage

const persistConfig = {
  key: "root",
  storage,
};
const persistedReducer = persistReducer(persistConfig, authReducer);

//i used persistor for save the respond to session storage. thus when i refersh the page as a valid registered user via stored data on session storage the app dont directing me to login page again.
const store = configureStore({
  reducer: {
    auth: persistedReducer,
    stock: stockReducer,
  },
  devTools: process.env.NODE_ENV !== "production",
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});
// const store = configureStore({
//   reducer: {
//     auth: authReducer,
//     stock: stockReducer,
//   },
//   devTools: process.env.NODE_ENV !== "production",
// });

export const persistor = persistStore(store);
export default store;
