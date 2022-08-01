import React, { useState, useEffect } from 'react'
import { NavBar } from '../shared/NavBar'

export const PokeList = () => {

  const [pokeList, setPokeList] = useState(null);

  const getPokemonList = async () => {
    try {
      const request = await fetch("https://pokeapi.co/api/v2/pokemon/");
      const response = await request.json();
      setPokeList(response);
    } catch (error) {
      console.log(error);
    }
  }

  console.log(pokeList);

  useEffect(() => {
    getPokemonList();
  }, []);

  return (
    <>
      <NavBar />
      <nav aria-label="...">
        <ul className="pagination">
          <li className="page-item disabled">
            <span className="page-link">Anterior</span>
          </li>
          <li className="page-item"><a className="page-link" href="#">1</a></li>
          <li className="page-item active" aria-current="page">
            <span className="page-link">2</span>
          </li>
          <li className="page-item"><a className="page-link" href="#">3</a></li>
          <li className="page-item">
            <a className="page-link" href="#">Siguiente</a>
          </li>
        </ul>
      </nav>
    </>
  )
}
