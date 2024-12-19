import React, { useEffect, useState } from 'react'
import { useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux"
import { addToPastes, updateToPastes } from '../Redux/pasteSlicer';

const Home = () => {
    const [title,setTitle] = useState('');
    const [value,setValue] = useState("");
    const [searchParams,setSearchParams] = useSearchParams();
    const allPastes = useSelector((state)=>state.paste.pastes);
    const pasteId = searchParams.get("pasteId");
    const dispatch = useDispatch(); 

    useEffect(()=>{
      if(pasteId){
        const paste = allPastes.find((p)=>p._id === pasteId);
        setTitle(paste.title);
        setValue(paste.content);
      }
    },[pasteId])

    function createPaste(){
      const paste={
        title:title,
        content:value,
        _id:pasteId || Date.now().toString(36),
        createAt: new Date().toISOString()

      } 
      console.log("this home",paste);

      if(pasteId){
        //update
        dispatch(updateToPastes(paste))
        console.log("this is in update")
      }else{
        //create
        dispatch(addToPastes(paste))
        console.log("this is in create")
      }

      setTitle('');
      setValue('');
      setSearchParams({});
    }
  return (
    <div>
      <div className='flex flex-row gap-4 place-content-center'>
      
          <input
          className='p-2 rounded-2xl mt-5 border-2'
          type="text"
          placeholder='Enter Title Here'
          value={title}
          onChange={(e)=>{setTitle(e.target.value)}}
          />
          <button 
          className='p-2 rounded-2xl mt-5 bg-slate-500 text-white hover:bg-violet-600 '
          onClick={createPaste}>
            {pasteId ? "Update My Paste": "Create My Paste"}
          </button>
      </div>
      <div className='w-full'>
        <textarea 
        className='rounded-2xl min-w-[500px] mt-4 border-2 p-4'
        value={value}
        placeholder='Enter Content Here'
        onChange={(e)=>{setValue(e.target.value)
         
        }}
        rows={20}
        >

        </textarea>
      </div>
    </div>
  )
}

export default Home