import { useEffect } from "react";

export default function useOutSideClose(ref,handler){

  
    useEffect(()=>{

        function lister(event){
            console.log(event)
            if(!ref.current || ref.current.contains(event.target)){
                return;
            };
            handler(event);
        }

        

        document.addEventListener('mousedown',lister);
        document.addEventListener('touchstart',lister);
        //removing the eventlister when unmounting
        return ()=>{
            document.removeEventListener('mousedown',lister);
            document.removeEventListener('touchstart',lister);
        }

    },[ref,handler])
    
}