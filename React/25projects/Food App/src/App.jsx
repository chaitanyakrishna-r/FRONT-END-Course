import { useState } from "react";
import "./App.css";
import Home from "./pages/Home/Home";
import Details from "./pages/Details/Details";
import Favorites from "./pages/Favorites/Favorites";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen p-6 bg-white text-gray-600 text-lg">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/recipe-item/:id" element={<Details />} />
      </Routes>
    </div>
  );
}

export default App;
