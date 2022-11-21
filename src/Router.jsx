import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NotFound from './pages/NotFound/NotFound'
import Home from './pages/Home/Home'
import Profil from './pages/Profil/Profil';
import Settings from './pages/Settings/Settings';
import Community from './pages/Community/Community';
import Header from './components/Header/Header';

function Router() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='*' element={<NotFound />} />
        <Route exact path='/Profil' element= {<Profil />} />
        <Route exact path='/Home' element= {<Home />} />
        <Route exact path='/Settings' element= {<Settings/>} />
        <Route exact path='/Community' element= {<Community />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router;
