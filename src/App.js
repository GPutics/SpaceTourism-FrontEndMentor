import React, {useState} from 'react';

//Routing
import {Routes, Route} from 'react-router-dom';

// Components
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Destination from './components/Destination/Destination';
import Crew from './components/Crew/Crew';
import Technology from './components/Technology/Technology';

// Styling
import './index.css';

const App = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className='app'>
      <Routes>
        <Route path="/" exact element={<Home />}/>
        <Route path="/destination" exact element={<Destination />}/>
        <Route path="/crew" exact element={<Crew />}/>
        <Route path="/technology" exact element={<Technology />}/>
      </Routes>
    </div>
  )
}

export default App
