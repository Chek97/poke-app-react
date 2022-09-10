import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useFetch } from '../../hooks/useFetch';
import { Return } from '../shared/Return';

export const BerriesList = () => {

  const [offset, setOffset] = useState(0);
  const { list: berries, loading } = useFetch(`https://pokeapi.co/api/v2/berry/?offset=${offset}&limit=20`, offset);

  const handleList = (arg) => {
    if(arg === 'sig'){
      setOffset(offset + 20);
    }else{
      setOffset(offset - 20);
    }
  }

  return (
    <div className='row background d-flex justify-content-center pl-4 pr-4'>
      <div className='col-xs-12 col-sm-12 p-3 mr-auto'>
        <Return />
      </div>
      <header className='col-xs-12 col-sm-12 p-2 text-center'>
        <h1 className='font-weight-bold'> LISTA DE BAYAS</h1>
      </header>
      {loading ? (
        <div className='spinner-border spinner-container' role="status">
          <span className='sr-only'>Cargando....</span>
        </div>
      ) : (
        <>
          <div className='col-xs-12 col-sm-12'>
            <p>Resultados Obtenidos: {berries.count}</p>
            <ul className='list-group row'>
              {berries.results.map((berrie, index) => {
                const berrieId = berrie.url.split('/');
                return (
                  <li className='list-group-item col-xs-12 mb-2' key={berrie.name}>{/* //horizontal */}
                    <span>{index + 1} </span>
                    <Link to={`/berries-list/${berrieId[6]}`}>{berrie.name}</Link>
                  </li>
                )
              }
              )}
            </ul>
          </div>
          <hr />
          <ul className='pagination mt-5'>
            <li className={`page-item ${berries.previous === null && "disabled"}`}>
              <button className='page-link' onClick={() => handleList('ant')}>Anterior</button>
            </li>
            <li className={`page-item ${berries.next === null && "disabled"}`}>
              <button className='page-link' onClick={() => handleList('sig')}>Siguiente</button>
            </li>
          </ul>
        </>
      )}
    </div>
  )
}
