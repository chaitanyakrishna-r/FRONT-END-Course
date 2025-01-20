import { useRef, useState } from "react"
import './test1.css'
import useOutSideClose from "./useOutsideCloseHook";

export default function UseOutSideClose(){
    const [showModel, setShowModel] = useState(false);
    const ref = useRef();
    useOutSideClose(ref, ()=>{setShowModel(false)});


    // function handleClick(){
    //     setShowModel(false);
    // }
    return(
        <div className="container">
            
            {
                showModel
                ?( <div className="model" ref={ref}>
                    <h1>hello how are you</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem quam dolores libero! Earum esse sed saepe hic numquam non, cum eius necessitatibus magni quo voluptas voluptates explicabo veniam minus, adipisci pariatur? Numquam sequi voluptas, porro libero necessitatibus consectetur, a provident iure nobis culpa eius optio!</p>
                </div>)

                :<div>
                    <h1>UseOUtSideClose</h1>
                    <button onClick={()=>{
                        setShowModel(true)
                    }}>Show content</button>
                </div>
            }
        </div>
    )
}