// import { Children } from "react";
// import { useContext } from "react";
import "./Video.css";
// import VideoDispatch from "../context/VideoDispatch";
import useVidoeDispatch from "../hooks/vidoeDispatch";

function Videos({title,channel,verfied,views,time,id,children,editVideo}){
    
    // const dispatch = useContext(VideoDispatch);
    const dispatch = useVidoeDispatch();
    return(
    <>
    <div className="container">

        <button className="delete" onClick={()=>{ dispatch({type:'DELETE',playload:id});}}>❌</button>
        <button className="edit" onClick={()=>{editVideo(id)}}>Edit</button>
        <div className="pic">
            <img src={`https://picsum.photos/id/${id}/200/300`} alt="img">
            </img>
        </div>
        <div className="title"> {title}</div>
        <div className="channel">
                <h3 >{channel}</h3>
                <h3 >{verfied}</h3>
        </div>
        <div className="views">
                {views} Views
                <span>🔘</span>
                {time} year ago
        </div>
       <div>{children}</div>
    </div>
    </>
    )
}

export default Videos;