import { useContext } from "react";
import VideoDispatch from "../context/VideoDispatch";


function useVidoeDispatch(){
    return useContext(VideoDispatch);
}
export default useVidoeDispatch;