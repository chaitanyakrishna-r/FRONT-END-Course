import { Children } from "react";
import "./Video.css";

function Videos({title,channel,verfied,views,time,id,children}){
    

    return(
    <>
    <div className="container">
        <div className="pic">
            <img src={`https://picsum.photos/id/${id}/200/300`}>
            </img>
        </div>
        <div className="title"> {title}</div>
        <div className="channel">
                <h3 >{channel}</h3>
                <h3 >{verfied}</h3>
        </div>
        <div className="views">
                {views}K Views
                <span>🔘</span>
                {time} year ago
        </div>
       <div>{children}</div>
    </div>
    </>
    )
}

export default Videos;