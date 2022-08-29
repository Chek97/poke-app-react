import { Link } from 'react-router-dom';
import { useFetch } from '../../hooks/useFetch';
import { Return } from '../shared';

export const PokeList = () => {

  const {list: pokemons, loading } = useFetch("https://pokeapi.co/api/v2/pokemon/");

  return (
    <div className='row background d-flex justify-content-center pl-4 pr-4'>
      <div className='col-xs-12 p-3 mr-auto'>
        <Return />
      </div>
      <header className='col-xs-12 p-2 text-center'>
        <h1 className='font-weight-bold'> LISTA DE POKEMON</h1>
      </header>
      {loading ? (
        <div className='spinner-border spinner-container' role="status">
          <span className='sr-only'>Cargando....</span>
        </div>
      ) : (
        <div className='col-xs-12 list-items'>
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
