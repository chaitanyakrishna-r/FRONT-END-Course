import React, { useEffect, useRef } from "react";

const data = [
  {
    lable: "first elemnt",
    style: {
      background: "orange",
      width: "500px",
      height: "500px",
    },
  },
  {
    lable: "second elemnt",
    style: {
      background: "red",
      width: "500px",
      height: "500px",
    },
  },
  {
    lable: "third elemnt",
    style: {
      background: "green",
      width: "500px",
      height: "500px",
    },
  },
  {
    lable: "fourth elemnt",
    style: {
      background: "blue",
      width: "500px",
      height: "500px",
    },
  },
  {
    lable: "fivth elemnt",
    style: {
      background: "brown",
      width: "500px",
      height: "500px",
    },
  },
  {
    lable: "sixth elemnt",
    style: {
      background: "grey",
      width: "500px",
      height: "500px",
    },
  },
];
const ScrollToSection = () => {
  const ref = useRef(null);

  //reset scroll position
  useEffect(()=>{
    window.scrollTo({
        top: 0,
        left: 0,
        behavior:'smooth'
    });
  },[])

  function handleScrollToSection(){
    // console.log('ej');
    // ref.current.scrollIntoView({behavior:'smooth'});
    const position = ref.current.getBoundingClientRect().top;
    console.log(ref.current.getBoundingClientRect());
    console.log(position);

    window.scrollTo({
        top:position,
        behavior:"smooth",
    })
  }
  return (

    <div>
        <h1>Scroll to Particular section</h1>
        <button onClick={handleScrollToSection}>click to scroll to particular section</button>
      {data.map((dataItem,index) => (
        <div key={index} ref={index === 3 ? ref : null} style={dataItem.style}>
          <h1>{dataItem.lable}</h1>
        </div>
      ))}
    </div>
  );
};

export default ScrollToSection;
