import React, { useEffect, useState } from 'react'
import { useParams, useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux"
import { addToPastes, updateToPastes } from '../Redux/pasteSlicer';


const ViewPaste = () => {

  const {id} = useParams();
  const allPastes = useSelector((state)=>state.paste.pastes);

  const paste = allPastes.filter((p)=>p._id === id)[0];
  console.log(paste)
  return (
    <div>
    <div className='flex flex-row gap-4 place-content-center'>
    
        <input
        className='p-2 rounded-2xl mt-5 border-2'
        type="text"
        placeholder='Enter Title Here'
        value={paste.title}
        disabled
        onChange={(e)=>{setTitle(e.target.value)}}
        />
        {/* <button 
        className='p-2 rounded-2xl mt-5 bg-slate-500 text-white hover:bg-violet-600 '
        onClick={createPaste}>
          {pasteId ? "Update My Paste": "Create My Paste"}
        </button> */}
    </div>
    <div className='w-full'>
      <textarea 
      className='rounded-2xl min-w-[500px] mt-4 border-2 p-4'
      value={paste.content}
      disabled
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

export default ViewPaste