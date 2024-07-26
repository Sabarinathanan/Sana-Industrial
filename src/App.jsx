// import Home from "./components/Home/Home.jsx";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import GlossyColors from "./components/Finishes-Components/Glossy.jsx";
import MattColors from './components/Finishes-Components/Matt.jsx';
import SemiGlossyColors from "./components/Finishes-Components/Semi-Glossy.jsx";
import StructureColors from './components/Finishes-Components/Structure.jsx';
import TextureColors from './components/Finishes-Components/Texture.jsx';
import Home from './components/Home/Home.jsx';
import Cards from './components/Application-cards/Cards.jsx';


function App() {
  return (
    <div className="App">
       <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/cards' element={<Cards/>}></Route>
          <Route path="/Glossy" element={<GlossyColors />} />
          <Route path="/Matt" element={<MattColors />} />
          <Route path="/SemiGlossy" element={<SemiGlossyColors />} />
          <Route path="/Structure" element={<StructureColors />} />
          <Route path="/Texture" element={<TextureColors />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
