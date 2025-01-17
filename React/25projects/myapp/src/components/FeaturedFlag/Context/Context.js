import { createContext, useEffect, useState } from "react";
import FeaturedflagAPICall from "../data";

export const  FeatureflagContext = createContext(null);

export default function FeaturedFlagGobalState({ children }) {
  const [loading, setLoading] = useState(false);
  const [enableFlags, setEnableFlags]= useState({});

  async function fetchApi(){
      setLoading(true);
    try{
        const response = await FeaturedflagAPICall();
        console.log(response);
        setEnableFlags(response);
        setLoading(false);
    }catch(error){
        console.log(error);
        setLoading(false);
        throw new Error("costum error");
    }
  }

  useEffect(()=>{
    fetchApi();
  },[]);
  return (
    <FeatureflagContext.Provider value={{loading, enableFlags}}>
      {children}
    </FeatureflagContext.Provider>
  );
}
