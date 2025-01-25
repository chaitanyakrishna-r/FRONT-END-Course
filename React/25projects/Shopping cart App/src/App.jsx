import { useState } from 'react'
import './App.css'
import {Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import Cart from './pages/Cart'
import NavBar from './components/NaviBar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <NavBar/>
      <Routes>
        <Route  path='/' element={<Home/>}></Route>
        <Route  path='/carts' element={<Cart/>}></Route>
      </Routes>

    </div>
  )
}

export default App
