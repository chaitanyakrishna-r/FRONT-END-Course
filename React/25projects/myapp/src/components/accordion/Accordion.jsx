import React, { useState } from 'react'
import data from './data.js'
import  './Accordion.css'

const Accordion = () => {
    const [isSelected, setIsSelected] = useState(null);
    const [enableMulti,setEnableMulti] = useState(false);
    const [multiSelection,setMultiSelection] = useState([]);

    const handleSingleAccordion =(getCurrentId)=>{
        setIsSelected(getCurrentId === isSelected ? null : getCurrentId);
    }
    // const handleMultiSelection = (getCurrentId)=>{
    //     let cpyMultiple= [...multiSelection];
    //     const findIndexOfCurrentId = cpyMultiple.indexOf(getCurrentId);
    //     if(findIndexOfCurrentId === -1){
    //         cpyMultiple.push(getCurrentId);
    //     }else{
            
    //         cpyMultiple.splice(findIndexOfCurrentId,1)
    //     }
    //     setMultiSelection(cpyMultiple);
    // }

    // using filter 
    const handleMultiSelection = (getCurrentId)=>{
        setMultiSelection((prev)=>{
            return prev.includes(getCurrentId)
            ?  prev.filter((id)=> id !== getCurrentId) //remove id from array
            : [...prev,getCurrentId];//add id in array
        })
    }

  return (
    <div className='wapper'>
        <button onClick={()=>{setEnableMulti(!enableMulti)}} >Enable {enableMulti ? "Single" : "Multiple"} Selection</button>
        <div className='accordian'>
            {data && data.length > 0 ? (data.map((value)=>(<div className='items'>
                <div onClick={()=>{enableMulti? handleMultiSelection(value.id) : handleSingleAccordion(value.id)} } className='question'> 
                    <h3>{value.question}</h3>
                    <span>+</span>
                </div>
                <div className='answer'>
                    {/* {
                        enableMulti ? multiSelection.indexOf(value.id) !== -1 &&(<div>{value.answer}</div>): value.id === isSelected && (
                            <div>{value.answer}</div>
                        )
                    } */}

                    {value.id ===isSelected || multiSelection.indexOf(value.id) !==-1 ?  value.answer : null}
                </div>
            </div>))) : (<div> No data found</div>
            )}
        </div>
    </div>
  )
}

export default Accordion