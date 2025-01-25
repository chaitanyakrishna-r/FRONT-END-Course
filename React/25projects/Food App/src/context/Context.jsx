import { use } from "react";
import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const GlobalContext = createContext(null);

export default function GlobalState({ children }) {
  const [searchParam, setSearchParam] = useState("");
  const [loading, setLoading] = useState(false);
  const [recipeList, setRecipeList] = useState([]);
  const [recipeDetailsData, setRecipeDetailsData] = useState(null);
  const [favoritesList, setFavoritesList] = useState([]);
  
  const naviagte = useNavigate();

  function handleAddToFavorite(getCurrentItem){
    
    let cpyFavoritesList = [...favoritesList];
    const index = cpyFavoritesList.findIndex(item=>item.id === getCurrentItem.id)
    if(index === -1){
       cpyFavoritesList.push(getCurrentItem);
    }else{
        cpyFavoritesList.splice(index);
    }
    setFavoritesList(cpyFavoritesList);
  }
  console.log(favoritesList);

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch(
        `https://forkify-api.herokuapp.com/api/v2/recipes?search=${searchParam}`
      );
      const data = await response.json();

      if (data?.data?.recipes) {
        setRecipeList(data.data.recipes);
        setLoading(false);
        setSearchParam("");
        naviagte('/');
      }
    } catch (e) {
      setLoading(false);
      console.log(e);
    }
  }

  return (
    <GlobalContext.Provider
      value={{
        searchParam,
        setSearchParam,
        handleSubmit,
        recipeList,
        loading,
        recipeDetailsData,
        setRecipeDetailsData,
        handleAddToFavorite,
        favoritesList
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
