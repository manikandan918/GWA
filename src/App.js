

import './App.css';
import Section from './components/section/section';
import Hero from './components/Hero/Hero';
import Nestednabar from './components/Nestednavbar/Nestednavbar';
import 'bootstrap/dist/css/bootstrap.min.css';
//import react-router
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
   
    <Router>
    <Routes>
      <Route path="/" element={[<Hero/> ,<Nestednabar/>,<Section/>]}/>
    </Routes>
  </Router>
  );
}

export default App;
