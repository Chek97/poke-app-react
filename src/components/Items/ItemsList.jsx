import { useState } from 'react';
import { Link } from 'react-router-dom'
import { useFetch } from '../../hooks/useFetch';
import { Return } from '../shared/Return';

export const ItemsList = () => {

  const { list: items, loading } = useFetch('https://pokeapi.co/api/v2/item/');
  const [paginator, setPaginator] = useState({
    total: 0,
    current: 1
  });

  return (
    <div className='row background d-flex justify-content-center pl-4 pr-4'>
      <div className='col-xs-12 col-sm-12 col-md-12 p-3 mr-auto'>
        <Return />
      </div>
      <header className='col-xs-12 col-sm-12 col-md-12 p-2 text-center'>
        <h1 className='font-weight-bold'> LISTA DE ITEMS</h1>
      </header>
      {loading ? ( // * para mirar si un objeto es vacio Object.keys(items).length === 0
        <div className='spinner-border spinner-container' role="status">
          <span className='sr-only'>Cargando....</span>
        </div>
      ) : (
        <>
          <div className='col-xs-12 col-sm-12 col-md-12 list-items'>
            <p>
              Resultados obtenidos: {items.count}
            </p>
            <div className='list-group list-group-horizontal list-items-list'>
              {items.results.map(item => {
                const removido = item.url.split('/');
                return (
                  <div className='card rounded-circle list-card' key={item.name}>
                    <div className='card-body text-center list-card-item'>
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
