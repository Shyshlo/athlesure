import React from 'react';
import './App.css';
import HomePage from './HomePage';
import Delivery from './Delivery';
import Contact from './Contact';
import logo from './лого.png';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";



function App() {
 
  return <Router>  
  
  <nav>
  <Link to='/' className='Link'>Home</Link>
  <Link to='/delivery' className='Link'>Delivery</Link>
  <Link to='/contact' className='Link'>Contact</Link>
</nav>


<Routes>
  <Route path='/' element={<HomePage />} />
  <Route path='/delivery' element={<Delivery />} />
  <Route path='/contact' element={<Contact />} />
</Routes>

</Router>


  return (
    <div>
     <HomePage />
    </div>
  );
}

export default App;
