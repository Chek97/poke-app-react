import React from 'react';
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import { BerriesList, ItemsList, Landing, PokeList, RegionsList } from '../components';

const AppRouter = () => {
  /* 
    TODO: Investigar sobre el react-router-dom v6
  */
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Landing />} />
            <Route path='/pokemon-list' element={<PokeList />} />
            <Route path='/berries-list' element={<BerriesList />} />
            <Route path='/regions-list' element={<RegionsList />} />
            <Route path='/items-list' element={<ItemsList />} />
        </Routes>
    </BrowserRouter>
  )
}

export default AppRouter