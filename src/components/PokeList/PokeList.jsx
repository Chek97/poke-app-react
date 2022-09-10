import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useFetch } from '../../hooks/useFetch';
import { Return } from '../shared';

export const PokeList = () => {

  const [offset, setOffset] = useState(0)
  const { list: pokemons, loading } = useFetch(`https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=20`, offset);

  const handleList = (arg) => {
    if (arg === 'sig') {
      setOffset(offset + 20);
    } else {
      setOffset(offset - 20);
    }
  }

  return (
    <div className='row background d-flex justify-content-center pl-4 pr-4'>
      <div className='col-xs-12 col-sm-12 p-3 mr-auto'>
        <Return />
      </div>
      <header className='col-xs-12 col-sm-12 p-2 text-center'>
        <h1 className='font-weight-bold'> LISTA DE POKEMON</h1>
      </header>
      {loading ? (
        <div className='spinner-border spinner-container' role="status">
          <span className='sr-only'>Cargando....</span>
        </div>
      ) : (
        <div className='col-xs-12 col-sm-12 list-items'>
          <p>Resultados Obtenidos: {pokemons.count}</p>
          <div className='list-group list-group-horizontal list-items-list'>
            {pokemons.results.map(pokemon => {
              const pokemonId = pokemon.url.split('/');
              return (
                <div className='card rounded-circle list-card' key={pokemon.name}>
                  <div className='card-body text-center list-card-item'>
                    <h5 className='card-title font-weight-bold'>{pokemon.name}</h5>
                    <Link to={`/pokemon-list/${pokemonId[6]}`} className='btn btn-secondary rounded'>Ver mas</Link>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      )}
      <hr />
      <ul className='pagination mt-5'>
        <li className={`page-item ${pokemons.previous === null && "disabled"}`}>
          <button className='page-link' onClick={() => handleList('ant')}>Anterior</button>
        </li>
        <li className={`page-item ${pokemons.next === null && "disabled"}`}>
          <button className='page-link' onClick={() => handleList('sig')}>Siguiente</button>
        </li>
      </ul>
    </div>
  )
}
