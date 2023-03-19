import React from "react";
import { Routes, Route } from 'react-router-dom';
import Root from './pages/Root'
import Home from './pages/home/Home'
import Welcome from "./pages/welcome/Welcome";

function App() {
  return (
    <Routes>
        <Route element={<Root/>}>
          <Route path='/' element={<Home/>}/>
          <Route path='/welcome' element={<Welcome/>}/>
        </Route>
    </Routes>
  );
}

export default App;