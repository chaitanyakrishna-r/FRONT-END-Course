import React, { useEffect, useState } from 'react'
import '../loadMore/style.css'
const RevisionLoadMore = () => {

  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [count ,setCount] = useState(0);
  const [disable,setDisable] = useState(false);

   async function  fetchLoadData(){
    try {
        setLoading(true);
        const response = await fetch(`https://dummyjson.com/products?limit=20&skip=${count === 0 ? 0 : count*20}`);
        const result = await response.json();

        console.log(result);
        if(result && result.products && result.products.length){
            setProducts((prevData)=>[...prevData,...result.products]);
           
        }
        
    } catch (error) {
        console.log(error);
        
    } finally{
        setLoading(false);
    }

        
        
  }

  useEffect(()=>{
    fetchLoadData();
  },[count])


  useEffect(()=>{
    if(products && products.length === 60){
        setDisable(true);
    }
  },[products])
 if(loading){
    return<div>Loading the Data! please wait..</div>
 }
  return (
    <div className='load-container'>
        <div className='product-container'>
            {
                products && products.length ? 
                products.map((item)=>(
                    <div className='product' key={item.id}>
                        <img src={item.thumbnail} alt={item.title} />
                        <h2>{item.title}</h2>
                    </div>
                ))
                : null
            }
        </div>
        <div>
            <button disabled={disable} onClick={()=>{setCount((prev)=> prev + 1)}}>Load more...</button>
            {
                disable ? <p> No More Products...</p> : null
            }
        </div>
    </div>
  )
}

export default RevisionLoadMore