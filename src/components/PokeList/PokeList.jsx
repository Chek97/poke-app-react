import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export const PokeList = () => {

  const [pokemons, setPokemons] = useState({});
  const [loading, setLoading] = useState(true);

  console.log(pokemons);

  useEffect(() => {
    const getPokemonList = async () => {
      try {
        const request = await fetch("https://pokeapi.co/api/v2/pokemon/");
        const response = await request.json();
        setPokemons(response);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    }
    getPokemonList();
  }, []);

  return (
    <div className='row'>
      <div className='col-12'>
        <header className=''>
          <h1>LISTA DE POKEMON</h1>
        </header>
        {loading ? (
          <div className='spinner-border' role="status">
            <span className='sr-only'>Cargando....</span>
          </div>
        ) : (
          <div className='col-12'>
            <p>Resultados Obtenidos: {pokemons.count}</p>
            <div className='item-list'>
              {pokemons.results.map(pokemon => {
                const pokemonId = pokemon.url.split('/');
                return (
                  <div className='card' style={{ width: '18rem' }} key={pokemon.name}>
                    <img src="#" alt="" className='card-img-top' />
                    <div className='card-body'>
                      <h5 className='card-title'>{pokemon.name}</h5>
                      <Link to={`/pokemon-list/${pokemonId[6]}`} className='btn btn-primary'>Ver mas</Link>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        )}
      </div>
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
    </div>
  )
}
