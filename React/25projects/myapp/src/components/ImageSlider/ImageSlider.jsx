import React, { useEffect, useState } from 'react'
import {BsArrowLeftCircleFill, BsArrowRightCircleFill} from 'react-icons/bs'
import './imageSlider.css'

const ImageSlider = ({url, page=1, limit=5}) => {
    const [loading,setLoading]= useState(false);
    const [error,setError] = useState(null);
    const [image,setImage] = useState([]);
    const [currentSlide,setCurrentSlide] = useState(0);
    // const [limit,setLimit] = useState(limit);

    const fetchImageUrl = async(getUrl)=>{
        
        try{
            setLoading(true);
            const response = await fetch(`${getUrl}?page=${page}&limit=${limit}`);
            const data = await response.json();
            if(data){
                setImage(data);
                setLoading(false);
            }
        }catch(e){
            setError(e.message);
            setLoading(false);
        }
        
    }

    useEffect(()=>{
        if(url !=="")fetchImageUrl(url)
    },[url])
  
    if(loading){
        return<div>The page is Loading</div>
    }
    if(error !== null){
        return<div>Error in fetching data! , {error}</div>
    }
  
    return (
    <div className='container'>
        <BsArrowLeftCircleFill className='arrow arrow-left'/>
        {
            image && image.length ? 
            image.map((imageItem)=>(
                <img
                className="current-image"
                key={imageItem.id}
                alt={imageItem.download_url}
                src={imageItem.download_url}
                />
            ))
            :null
        }
        <BsArrowRightCircleFill className='arrow arrow-right'/>
        <span className='circle-indicators'>
            {
                image && image.length ?
                image.map((_,index)=> <button
                key={index}
                className='current-indicator'>

                </button>)
                :null
            }

        </span>
    </div>
  )
}

export default ImageSlider