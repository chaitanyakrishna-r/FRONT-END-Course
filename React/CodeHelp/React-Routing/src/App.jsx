import './App.css'
import {createBrowserRouter,RouterProvider} from "react-router-dom";
import Home from './components/Home';
import About from './components/About';
import Dashboard from './components/Dashboard';
import Navbar from './components/Navbar';
import Students from './components/Students';
import NotFound from './components/NotFound';


const router = createBrowserRouter(
  [
    {
    path:"/",
    element: <div>
        <Navbar></Navbar>
        <Home/>
      </div>
    },
    {
      path:"/about",
      element:<div>
        <Navbar></Navbar>
       <About/>
      </div>
    },
    {
      path:"/dashboard",
      element:<div>
      <Navbar></Navbar>
        <Dashboard/>
      </div>
    },
    {
      path:"/students/:id",
      element:<div>
      <Navbar></Navbar>
        <Students/>
      </div>,
      children:[{path:"no slash need",
        element: <NameofTheCompoent></NameofTheCompoent>}
        ,{

      }]
    },
    {
      path:"*",
      element:<NotFound/>
    }]
)

function App() {
 

  return (
    <>
     <div>
      <RouterProvider router={router}>
       
      </RouterProvider>
     </div>
     
    </>
  )
}

export default App
