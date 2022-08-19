import { useState } from 'react';
import { Link } from 'react-router-dom'
import { useFetch } from '../../hooks/useFetch';

export const ItemsList = () => {

  const { list: items, loading } = useFetch('https://pokeapi.co/api/v2/item/');
  const [paginator, setPaginator] = useState({
    total: 0,
    current: 1
  });

  return (
    <div className='row background full-container d-flex justify-content-center'>
      <header className='col-12 p-3'>
        <h1 className='font-weight-bold'>LISTA DE ITEMS</h1>
      </header>
      {loading ? ( // ? para mirar si un objeto es vacio Object.keys(items).length === 0
        <div className='spinner-border spinner-container' role="status">
          <span className='sr-only'>Cargando....</span>
        </div>
      ) : (
        <>
          <div className='col-12'>
            <p>
              Resultados obtenidos: {items.count}
            </p>
            <div className='list-group list-group-horizontal d-flex flex-wrap'>
              {items.results.map(item => {
                const removido = item.url.split('/');
                return (
                  <div className='card rounded-circle m-3' key={item.name}>
                    <div className='card-body text-center'>
                      <h5 className='card-title font-weight-bold'>{item.name}</h5>
                      <Link to={`/items/${removido[6]}`} className='btn btn-secondary rounded'>Ver mas</Link>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
          <hr />
          <ul className='pagination'>
            <li className={`page-item ${items.previous === null && "disabled"}`}>
              <Link className='page-link' to={`/items-list/${30}`}>Anterior</Link>
            </li>
            <li className='page-item'><a className='page-link' href="#">1</a></li>
            <li className='page-item'><a className='page-link' href="#">2</a></li>
            <li className='page-item'><a className='page-link' href="#">3</a></li>
            <li className={`page-item ${items.next === null && "disabled"}`}>
              <Link className='page-link' to={`/items-list/${80}`}>Siguiente</Link>
            </li>
          </ul>
        </>
      )}
    </div>
  )
}
