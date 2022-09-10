import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { About, Berrie, BerriesList, Info, Item, ItemsList, Landing, PokeList, Pokemon, Region, RegionsList } from '../components';
import { Movements } from '../components/PokeList/Movements';
import { NavBar, Footer } from '../components/shared';

const AppRouter = () => {
  /* 
    TODO: Investigar sobre el react-router-dom v6
  */
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<Landing />} />
        {/* POKEMON */}
        <Route path='/pokemon-list' element={<PokeList />} />
        <Route path='/pokemon-list/:id' element={<Pokemon />} />
        {/* MOVEMENTS */}
        <Route path='/movements/:id' element={<Movements />} />
        {/* BERRIES */}
        <Route path='/berries-list' element={<BerriesList />} />
        <Route path='/berries-list/:id' element={<Berrie />} />
        {/* REGIONS */}
        <Route path='/regions-list' element={<RegionsList />} />
        <Route path='/regions-list/:id' element={<Region />} />
        {/* ITEMS */}
        <Route path='/items-list' element={<ItemsList />} />
        <Route path='/items/:id' element={<Item />} />
        {/* OTHERS */}
        <Route path='/about' element={<About />} />
        <Route path='/info' element={<Info />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default AppRouter