
import { Route, Routes } from "react-router-dom";

import About from "./pages/about.jsx";
import NasaList from './pages/nasalist.jsx';
import Main from './pages/Main.jsx';

import './App.css'

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="/nasalist" element={<NasaList/>}/>
        <Route path="/about" element={<About/>}/>
      </Routes>
    </div>  
  )
}

export default App
