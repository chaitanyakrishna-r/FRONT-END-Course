import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromPastes } from "../Redux/pasteSlicer";
import { toast } from "react-toastify";
import { Link } from "react-router";

const Paste = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const dispatch = useDispatch();

  const pastes = useSelector((state) => state.paste.pastes);
  const filteredData = pastes.filter((paste) => 
    paste.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  function handleDelete(pasteId){
    dispatch(removeFromPastes(pasteId));
  }
  function handleCopy(content){
    navigator.clipboard.writeText(content)
    toast.success("copied to Clipboard")
  }

  return (
    <div>
      <input
        className="p-2 border-2 rounded-2xl min-w-[500px] mt-6"
        type="text"
        placeholder="Search here"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className="flex flex-col  gap-4 place-content-center mt-6 ">
        {filteredData.length > 0 &&
        filteredData.map((paste) => (
          <div
            className="flex flex-col place-content-center border-2 rounded-2xl bg-slate-200 min-h-10 p-5 gap-5"
            key={paste._id}
          >
            <h3 className="bg-slate-400 text-center rounded-2xl">
              {paste.title}
            </h3>
            <p>{paste.content}</p>
            <div className="flex gap-3  place-content-between bg-green-300 p-2 rounded-xl">
              <button
                
                className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 transition">
                <Link to={`/?pasteId=${paste?._id}`}>Edit</Link>
              </button>
              <button className="">
                <Link to={`/pastes/${paste?._id}`}>View</Link>
               
                </button>
             
              <button>Share</button>
              <button onClick={()=>{handleDelete(paste?._id)}}>Delete</button>
              <button onClick={()=>{handleCopy(paste?.content)}}>Copy</button>
            </div>
            <div>
              {paste.createAt}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Paste;
