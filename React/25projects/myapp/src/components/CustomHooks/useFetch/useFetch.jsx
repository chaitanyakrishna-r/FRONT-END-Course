import { useEffect, useState } from "react";

export default function useFetch(url, options={}){
    const [pending, setPending] = useState(false);
    const [error, setError] = useState(null);
    const [result, setResult] = useState(null);

    async function fetchUrl(url){
        setPending(true);
        try{
            const response = await fetch(url, {...options});
            if(!response.ok) throw new Error(response.statusText);
            const data = await response.json();
            console.log("data", data);
            setResult(data);
            setPending(false);
            setError(null);
        }catch(error){
            setError(`${error} some error ocurred`);
            setPending(false);
        }
        
    }
  
    useEffect(()=>{
        fetchUrl(url)
    },[url])

    return {pending, error, result};
}