import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'

export const ItemsList = () => {

  const [items, setItems] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getItemsList = async () => {
      try {
        const request = await fetch('https://pokeapi.co/api/v2/item/');
        const response = await request.json();
        setItems(response);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.log(error);
      }
    }
    getItemsList();
  }, []);

//  console.log(items);

  return (
    <div className='row'>
      <div className='col-12'>
        <header className=''>
          <h1>LISTA DE ITEMS</h1>
        </header>
      </div>
      {loading ? ( // ? para mirar si un objeto es vacio Object.keys(items).length === 0
        <div className='spinner-border' role="status">
          <span className='sr-only'>Cargando....</span>
        </div>
      ) : (
        <>
          <div className='col-12'>
            <p>
              Resultados obtenidos: {items.count}
            </p>
            <div className='items-list'>
              {items.results.map(item => {
                const removido = item.url.split('/');
                return (
                  <div className='card' style={{ width: '18rem' }} key={item.name}>
                    <img src="#" alt="" className='card-img-top' />
                    <div className='card-body'>
                      <h5 className='card-title'>{item.name}</h5>
                      <Link to={`/items-list/${removido[6]}`} className='btn btn-primary'>Ver mas</Link>
                    </div>
                  </div>
                )
              })}
            </div>
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
