import React from 'react'

const Useeffect = () => {

    // varition:1

    // Useeffect(()=>{
    //     alert("i will run on every render")
    // })


    // varition2;
    // Useeffect(()=>{
    //     alert("i will run first render")
    // },[])

    // varition3;
    // Useeffect(()=>{
    //     alert("i will run on first and when where ther is change in depencdie")
    // },[dependences])


    // varition4:
    // Useeffect(()=>{
    //     alert("i will run on first and when where ther is change in depencdies")
    // },[mulitple dependences])


    Useeffect(()=>{
        //first funtion side effect funtion
        alert("i will run on every render")
        //second clean up funtion
        return ()=>{
            alert('unmount the dependency before rendering')
        }

    },[count])


    
  return (
    <div>Useeffect</div>
  )
}

export default Useeffect