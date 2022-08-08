import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { About, Berrie, BerriesList, Info, Item, ItemsList, Landing, PokeList, RegionsList } from '../components';
import { Footer } from '../components/shared/Footer';
import { NavBar } from '../components/shared/NavBar';

const AppRouter = () => {
  /* 
    TODO: Investigar sobre el react-router-dom v6
  */
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/pokemon-list' element={<PokeList />} />
        <Route path='/berries-list' element={<BerriesList />} />
        <Route path='/berries-list/:id' element={<Berrie />} />
        <Route path='/regions-list' element={<RegionsList />} />
        <Route path='/items-list' element={<ItemsList />} />
        <Route path='/items-list/:id' element={<Item />} />

        <Route path='/about' element={<About />} />
        <Route path='/info' element={<Info />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default AppRouter