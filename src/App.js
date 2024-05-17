import React from 'react'
import {Route, Routes, BrowserRouter} from 'react-router-dom'
import Home from './PAGES/Homepage/Home';
import './App.css'
import Login from './PAGES/Auth/Login';
import Signup from './PAGES/Auth/Signup';
import ForgotPassword from './PAGES/Auth/ForgotPassword';

export const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/home' element={<Home />}/>
      <Route path='*' element={<div> oops 404 Page Not Found!!!!!</div>}/>
      <Route path="/login" element={<Login/>} />
      <Route path="/signup" element={<Signup/>} />
      <Route path="/forgotpassword" element={<ForgotPassword/>} />
    </Routes>
    </BrowserRouter>
  )
}


export default App;
