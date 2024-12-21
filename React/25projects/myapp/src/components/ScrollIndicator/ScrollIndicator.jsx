import React, { useEffect, useState } from 'react'
import './scroll.css'

const ScrollIndicator = ({url}) => {
    const [data,setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [scrolPercentage, setScrollPercentage] = useState('');


    async function fetchData(getUrl){
        try{
            setLoading(true)
            const response = await fetch(getUrl);
            const data = await response.json();

           if(data && data.products && data.products.length>0){
            setData(data.products);
           }
     
        }catch(error){
            console.log(error.message);
            setErrorMessage(error.message);
        } finally{

            setLoading(false);
        }
        
    }
    function handleScrollPercentage(){
        // console.log(document.documentElement.scrollTop,document.documentElement.scrollHeight,document.documentElement.clientHeight)

        const howMuchScrolled = document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight

        setScrollPercentage((howMuchScrolled/height)*100);
    }
    useEffect(()=>{
        window.addEventListener('scroll', handleScrollPercentage);
        return ()=>{
            window.removeEventListener('scroll',()=>{})
        }

    },[]);
    
    useEffect(()=>{
        fetchData(url);
    },[url]);

    

console.log(scrolPercentage);
    if(loading){
        return<div>Loading...</div>
    }
    if(errorMessage){
        return<div>hello ,{errorMessage}</div>
    }
   
  return (
    <div>
        <div className='top-container'>
        <h1>Custom Scroll Indicator</h1>
        <div className="scroll-progress-tracking">
            <div className="current-progress-bar" style={{width : `${scrolPercentage}%`}}></div>
        </div>
        </div>
        
       
        <div className='data-container'>
            {data && data.length > 0 
            ? data.map((item)=>(
                <p  key={item.id}>{item.title}</p>
            )) 
            : null}

        </div>
    </div>
  )
}

export default ScrollIndicator