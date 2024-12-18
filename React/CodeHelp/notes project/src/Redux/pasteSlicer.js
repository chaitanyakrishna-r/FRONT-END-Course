import { createSlice } from '@reduxjs/toolkit';


const initialState ={
  pastes:localStorage.getItem('pastes')
  ?JSON.parse(localStorage.getItem('pastes'))
  :[]
}

export const pasteSlice = createSlice({
  name: 'paste',
  initialState,


  reducers: {
    addToPastes: (state,action) => {
      
    },
    updateToPastes: (state,action) => {
      
    },
    resetAllPastes: (state,action) => {
      
    },
    removeFromPastes: (state,actoin) =>{

      
    },
  
  },
});

// Export actions
export const { addToPastes, updateToPastes, resetAllPastes,removeFromPastes } = pasteSlice.actions;

// Export reducer
export default pasteSlice.reducer;
