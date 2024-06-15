
import './App.css';

//Bootstrap imported
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';

//import react-router
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

//All components import
import Hero from './Components/Hero/Hero';
import Nestednavbar from './Components/Nestednavbar/Nestednavbar';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={[<Hero/>,<Nestednavbar/>]}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
