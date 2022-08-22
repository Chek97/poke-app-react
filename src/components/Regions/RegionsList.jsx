import { Link } from 'react-router-dom';
import { useFetch } from '../../hooks/useFetch';
import { Return } from '../shared/Return';

export const RegionsList = () => {

  const {list: regions, loading} = useFetch('https://pokeapi.co/api/v2/region/');

  return (
    <div className='row background full-container d-flex justify-content-center'>
        <header className='col-12 p-3'>
          <h1 className='font-weight-bold'><Return /> LISTA DE REGIONES</h1>
        </header>
      {loading ? (
        <div className='spinner-border spinner-container' role="status">
          <span className='sr-only'>Cargando....</span>
        </div>
      ) : (
        <div className='col-12'>
          <p>
            Resultados obtenidos: {regions.count}
          </p>
          <div className='list-group list-group-horizontal d-flex flex-wrap'>
            {regions.results.map(region => {
              const regionId = region.url.split('/');
              return (
                <div className='card rounded-circle m-3' key={region.name}>
                  <div className='card-body text-center'>
                    <h5 className='card-title font-weight-bold'>{region.name}</h5>
                    <Link to={`/regions-list/${regionId[6]}`} className='btn btn-secondary rounded'>Ver mas</Link>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      )}
    </div>
  )
}
