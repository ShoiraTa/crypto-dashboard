import { configureStore } from "@reduxjs/toolkit";
import { cryptoNewsApi } from "../services/cryptoNewsApi";
import { cryptoApi } from "../services/cryptoApi";

export default configureStore (
  {
    reducer: {
      [cryptoApi.reducerPath]: cryptoApi.reducer,
      [cryptoNewsApi.reducerPath]: cryptoNewsApi.reducer 
    }
  }
)