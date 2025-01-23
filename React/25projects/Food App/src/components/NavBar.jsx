import React, { useContext, useEffect } from "react";
import { NavLink } from "react-router-dom";
import  { GlobalContext } from "../context/Context";

const NavBar = () => {
    const {searchParam,setSearchParam,handleSubmit} = useContext(GlobalContext);

    
        console.log(searchParam);
 

    return (
    <div className="flex justify-between items-center py-8 container mx-auto flex-col lg:flex-row gap-5 lg:gap-0">
      <h2 className=" text-2xl font-semibold">
        <NavLink
          to={"/"}
          className="text-black hover:text-gray-700 duration-300"
        >
          Food Recipes
        </NavLink>
      </h2>
      <form onSubmit={handleSubmit}>
        <input
          className="bg-white/75 p-3 rounded-full outline-none lg:w-96 shadow-lg shadow-red-100 focus:shadow-red-200"
          type="text"
          name="search"
          placeholder=" Enter Items..."
          onChange={(e)=>{setSearchParam(e.target.value)}}
          value={searchParam}
        />
      </form>
      <ul className="flex gap-5">
        <li>
          <NavLink
            to={"/"}
            className="text-black hover:text-gray-700 duration-300"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/favorites"}
            className="text-black hover:text-gray-700 duration-300"
          >
            Favorites
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
