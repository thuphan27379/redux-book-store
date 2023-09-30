import { configureStore } from "@reduxjs/toolkit";
import bookReducer from "../components/book/bookSlice.js";

// redux store
export const store = configureStore({
  reducer: {
    book: bookReducer,
  },
});
