import { configureStore } from '@reduxjs/toolkit';
// import rootReducer from './reducers'; // Assuming you have combined reducers
import pasteReducer from './Redux/pasteSlicer'

// Create and export the Redux store
const store = configureStore({
    reducer: {
       paste: pasteReducer,
      },
  
});

export default store;

