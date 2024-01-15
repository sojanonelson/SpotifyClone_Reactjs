import { configureStore } from "@reduxjs/toolkit";
import spotifyReducer from "../Reducer/Reducer";

const store = configureStore({
  reducer: {
    local: spotifyReducer,
  },
  
});

export default store;
