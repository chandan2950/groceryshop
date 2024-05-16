import React from 'react'
import {Route, Routes, BrowserRouter} from 'react-router-dom'
import Home from './PAGES/Homepage/Home';
import './App.css'


export const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/home' element={<Home />}/>
      <Route path='*' element={<div> oops 404 Page Not Found!!!!!</div>}/>
    </Routes>
    </BrowserRouter>
  )
}


export default App;
