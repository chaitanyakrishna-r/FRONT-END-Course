// import React, { createContext, useState } from 'react'

// export const followerContext =createContext();

// const MyContext = ({children}) => {
// const [follow,setFollow]= useState(10);
//   return (
//     <followerContext.Provider value={follow}>
//         {children}
//     </followerContext.Provider>
//   )
// }

// export default MyContext
import React, { createContext, useState } from 'react';

export const followerContext = createContext();

const MyContext = ({ children }) => {
  const [follow, setFollow] = useState(10);

  return (
    <followerContext.Provider value={follow}>
      {children}
    </followerContext.Provider>
  );
};

export default MyContext;
