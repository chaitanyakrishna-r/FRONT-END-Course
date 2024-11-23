import { useContext } from "react";
import VideosContext from "../context/VideosContext";


function useVidoes (){
    return useContext(VideosContext);
}
export default useVidoes;