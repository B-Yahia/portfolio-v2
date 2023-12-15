import { configureStore } from "@reduxjs/toolkit";
import MediaReducer from "./MediaSlice";

export default configureStore({
  reducer: { media: MediaReducer },
});
