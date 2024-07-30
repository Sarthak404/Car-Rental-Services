import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './component/home';
import Login from './component/login';
import SignUp from './component/signup';
import AddCarForm from './component/addcars';
import Bookedcar from './component/bookedcars';




const App = () => {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/add" element={<AddCarForm/>} />
      <Route path="/bookedcars" element={<Bookedcar/>} />
      
       
        

      </Routes>
    </BrowserRouter>
  );
};

export default App;
