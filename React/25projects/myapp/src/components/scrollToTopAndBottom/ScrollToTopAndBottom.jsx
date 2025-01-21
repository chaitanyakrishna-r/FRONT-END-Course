import React, { useRef } from 'react'
import useFetch from '../CustomHooks/useFetch/useFetch'

const ScrollToTopAndBottom = () => {
    const url = 'https://dummyjson.com/products?limit=100';
    const { pending, error, result } = useFetch(url || "");
    const bottomRef = useRef(null);

     const handleScrollToTop = ()=>{
        window.scrollTo({
            top:0,
            left:0,
            behavior:'smooth'
        }
        )
     }  
     function handleScrollToBottom(){
        bottomRef.current.scrollIntoView({behavior:"smooth"});
     }

     if(error)return <h1>Error Occured! Please try again</h1>
     if(pending)return <h1>loading the data! Please wait...</h1>
  return (
    <div>
        <h1>Scroll to Top and Bottom</h1>
        <h3>this is top section</h3>
        <div style={{display:'flex',alignItems:'center',flexDirection:'column'}}>
            <button onClick={handleScrollToBottom}>Scoll to Botttom</button>
            {
                result && result.products && result.products.length?
                <ul style={{listStyle:'none'}}>
                    {
                         result.products.map((item)=>{
                            return(
                                <li key={item.id}>{item.title}</li>
                            )
                         })
                    }
                </ul>
               
                :null
            }
            <button onClick={handleScrollToTop}>Scoll to top</button>
            <div ref={bottomRef}>
                hello
                <h1>chkr</h1>
            </div>
            <h2>This is End</h2>
        </div>

    </div>
  )
}

export default ScrollToTopAndBottom