import { Link } from 'react-router-dom';
import { useFetch } from '../../hooks/useFetch';
import { Return } from '../shared';

export const PokeList = () => {

  const {list: pokemons, loading } = useFetch("https://pokeapi.co/api/v2/pokemon/");

  return (
    <div className='row background full-container d-flex justify-content-center'>
      <header className='col-12 p-3'>
        <h1 className='font-weight-bold'><Return /> LISTA DE POKEMON</h1>
      </header>
      {loading ? (
        <div className='spinner-border spinner-container' role="status">
          <span className='sr-only'>Cargando....</span>
        </div>
      ) : (
        <div className='col-12'>
          <p>Resultados Obtenidos: {pokemons.count}</p>
          <div className='list-group list-group-horizontal d-flex flex-wrap'>
            {pokemons.results.map(pokemon => {
              const pokemonId = pokemon.url.split('/');
              return (
                <div className='card rounded-circle m-3' key={pokemon.name}>
                  <img src="#" alt="" className='card-img-top' />
                  <div className='card-body text-center'>
                    <h5 className='card-title font-weight-bold'>{pokemon.name}</h5>
                    <Link to={`/pokemon-list/${pokemonId[6]}`} className='btn btn-secondary rounded'>Ver mas</Link>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      )}
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
