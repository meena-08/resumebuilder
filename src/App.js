import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import LandingPage from './components/LandingPage';
import Navbar from './components/Navbar';
import PersonalDetails from './components/PersonalDetails';

function App() {
  return (
          <Router>
    <div>
        <Navbar/>
        <Routes>
          <Route  path="/" exact element={<LandingPage/>}/>
          <Route  path="/personaldetails" exact element={<PersonalDetails/>}/>
        </Routes>
    </div>
    </Router>  
  );
}

export default App;
