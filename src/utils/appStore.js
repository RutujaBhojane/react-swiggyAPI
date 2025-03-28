const { configureStore } = require("@reduxjs/toolkit");
import createReducer from "./cartSlice";

const appStore = configureStore({
  reducer: { //this is appStore reducer which will have reducers of all the slices.
    cart: createReducer,
  },
});

export default appStore; 
 