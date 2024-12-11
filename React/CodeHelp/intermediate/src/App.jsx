// import { createContext, useState } from "react"
// import ChildA from "./components/MyContext/ChilldA";


// export const UserContext = createContext();



// function App() {
//   const [user,setUser] = useState({name:'ckr'});

//   return (
//     <>
//     <UserContext.Provider value={user}>
//     <ChildA/>
//     </UserContext.Provider>

//     </>
//   )
// }

// export default App

// import React, { useContext } from 'react';
// import MyContext, { followerContext } from './components/MyContext/MyContext';

// const App = () => {
//   const follow = useContext(followerContext);
//   console.log("Follow value from context:", follow);

//   return (
//     <MyContext>
//       <div>
//         <h1>Follower Count</h1>
//         <p>{follow}</p>
//       </div>
//     </MyContext>
//   );
// };

// export default App;
import './app.css';
import React, { useContext } from 'react';
import ChilldA from './components/MyContext/ChilldA';
import ThemeContext, { ThemesContext } from './components/MyContext/ThemeContext';

const App = () => {
  // Wrap the whole app with the ThemeContext provider
  return (
    <ThemeContext>
      {/* Now we can safely use useContext inside App */}
      <AppContent />
    </ThemeContext>
  );
};

const AppContent = () => {
  const { theme, setTheme } = useContext(ThemesContext); // This is now safe

  return (
    <div 
      id='container' 
      style={{ backgroundColor: theme ? '#000000' : 'beige' }}
    >
      <ChilldA />
    </div>
  );
};

export default App;

