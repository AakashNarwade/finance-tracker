import { combineReducers, configureStore } from "@reduxjs/toolkit";
import expenseReducer from "./slices/expenseSlice";
import incomeReducer from "./slices/incomeSlice";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

// const persistConfig = { key: "root", version: 1, storage };
const rootReducer = combineReducers({
  income: incomeReducer,
  expense: expenseReducer,
});
const persistedReducer = persistReducer(
  { key: "root", version: 1, storage },
  rootReducer
);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
