
import './App.css';
import About from './Components/About';
import Blocks from './Components/Blocks';
import Contact from './Components/Contact';
import Footer from './Components/Footer';

import Navbar from './Components/Navbar';
import Skills from './Components/Skills';
import Team from './Components/Team';
import Work from './Components/Work';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './Components/Home';


function App() {
  return (
    <div className="App">
        
      
      <BrowserRouter>
        <Navbar></Navbar>
        
        <Routes>
          <Route path='/final_portfolio' element={<Home></Home>}/>
          <Route path='/about' element={<About></About>}/>
          <Route path='/team' element={<Team></Team>}/>
          <Route path='skills' element={<Skills></Skills>}/>
          <Route path='/blog' element={<Blocks></Blocks>}/>
          <Route path='/contact' element={<Contact></Contact>}/>
          <Route path='/works' element={<Work></Work>}/>
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    
    
        
    </div>
  );
}

export default App;
