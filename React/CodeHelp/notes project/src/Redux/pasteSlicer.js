import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';


const initialState ={
  pastes:localStorage.getItem('pastes')
  ?JSON.parse(localStorage.getItem('pastes'))
  :[],
}

export const pasteSlice = createSlice({
  name: 'paste',
  initialState,


  reducers: {

    addToPastes: (state,action) => {
      //dont add if the text area is black and title black
      // add a check to already existing pastes with the same name
      const paste = action.payload;
      state.pastes.push(paste);
      localStorage.setItem("pastes",JSON.stringify(state.pastes));
      toast("Paste Created Succesfully")
    },

    updateToPastes: (state,action) => {
      const paste = action.payload;
      const index = state.pastes.findIndex((item)=> item._id === paste._id );
      console.log("from pasteSlicer",index)
      if(index >= 0){
        //the paste is there if its -1 then the paste don't exists

        state.pastes[index] = paste;
        localStorage.setItem('pastes',JSON.stringify(state.pastes));
        toast.success("Paste Updated Succesfully")
      }
    },

    resetAllPastes: (state,action) => {
      state.pastes=[];
      localStorage.removeItem("pastes");
    },

    removeFromPastes: (state,action) =>{
      const pasteId = action.payload;
      const index = state.pastes.findIndex((item)=>item._id === pasteId)

      if(index >=0){
        state.pastes.splice(index,1);
        localStorage.setItem('pastes',JSON.stringify(state.pastes));
      }
     
      toast("Paste removed Succesfully")
    },
  
  },
});

// Export actions
export const { addToPastes, updateToPastes, resetAllPastes,removeFromPastes } = pasteSlice.actions;

// Export reducer
export default pasteSlice.reducer;
