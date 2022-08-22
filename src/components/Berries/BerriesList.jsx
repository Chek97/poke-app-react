import { Link } from 'react-router-dom';
import { useFetch } from '../../hooks/useFetch';
import { Return } from '../shared/Return';

export const BerriesList = () => {

  const { list: berries, loading } = useFetch('https://pokeapi.co/api/v2/berry');

  return (
    <div className='row background full-container d-flex justify-content-center'>
      <header className='col-12 p-3'>
        <h1 className='font-weight-bold'><Return /> LISTA DE BAYAS</h1>
      </header>
      {loading ? (
        <div className='spinner-border spinner-container' role="status">
          <span className='sr-only'>Cargando....</span>
        </div>
      ) : (
        <>
          <div className='col-12'>
            <p>Resultados Obtenidos: {berries.count}</p>
            <ul className='list-group row'>
              {berries.results.map((berrie, index) => {
                const berrieId = berrie.url.split('/');
                return (
                  <li className='list-group-item col-12' key={berrie.name}>{/* //horizontal */}
                    <span>{index + 1} </span>
                    <Link to={`/berries-list/${berrieId[6]}`}>{berrie.name}</Link>
                  </li>
                )
              }
              )}
            </ul>
          </div>
          <hr />
          <ul className='pagination'>
            <li className='page-item'><a className='page-link' href="#">Anterior</a></li>{/*// TODO: ESTO TAMBIEN DEBE HACERSE CON LINK */}
            <li className='page-item'><a className='page-link' href="#">1</a></li>
            <li className='page-item'><a className='page-link' href="#">2</a></li>
            <li className='page-item'><a className='page-link' href="#">3</a></li>
            <li className='page-item'><a className='page-link' href="#">Siguiente</a></li>
          </ul>
        </>
      )}
    </div>
  )
}
