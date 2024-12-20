import React, { useEffect, useState } from 'react'
import './style.css'

const LoadMoreData = () => {

    const [count, setCount] = useState(0);
    const [loading, setLoading] = useState(false);
    const [products,setProducts] = useState([]);
    const [disable, setDisable] = useState(false);


    const fetchProducts = async()=>{
        
        try{
            setLoading(true);
            const response = await fetch(`https://dummyjson.com/products?limit=20&skip=${count === 0 ? 0 :count *20}`);
             const result = await response.json();
            console.log(result);

            if(result && result.products && result.products.length){
                console.log("inside if")
                setProducts((prevData)=> [...prevData, ...result.products])
                setLoading(false);
            }
        }
        catch(e){
            console.log(e);
            setLoading(false);
        }
        
    }

    useEffect(()=>{
        
        fetchProducts();
    },[count])
    
   useEffect(()=>{
    if(products && products.length === 60){
        setDisable (true);
    }
   },[products])


    if(loading){
        return <div>Loading the Data! Please wait... </div>
    }
  return (
    <div className='load-container'>
      <div className='product-container'>
        {
            products && products.length ?
            products.map((item)=>(
                <div className='product' key={item.id + 1}>
                    <img src={item.thumbnail} alt={item.title} />
                    <h1>{item.title}</h1>
                </div>
            ))
            :null
        }
      </div>
      <div className='button-container'>
        <button disabled={disable} onClick={()=>setCount((prev)=>prev+1)}>Load More..</button>
        {
            disable ?<p>No More Products</p> :null
        }
      </div>

    </div>
  )
}

export default LoadMoreData