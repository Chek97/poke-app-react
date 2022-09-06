import { Link } from 'react-router-dom';
import { useFetch } from '../../hooks/useFetch';
import { Return } from '../shared/Return';

export const RegionsList = () => {

  const {list: regions, loading} = useFetch('https://pokeapi.co/api/v2/region/');

  return (
    <div className='row background d-flex justify-content-center pl-4 pr-4'>
        <div className='col-xs-12 col-sm-12 p-3 mr-auto'>
          <Return />
        </div>
        <header className='col-xs-12 col-sm-12 col-lg-12 p-2 text-center'>
          <h1 className='font-weight-bold'> LISTA DE REGIONES</h1>
        </header>
      {loading ? (
        <div className='spinner-border spinner-container' role="status">
          <span className='sr-only'>Cargando....</span>
        </div>
      ) : (
        <div className='col-xs-12 col-sm-12 col-lg-12 list-items landing-container'>
          <p>
            Resultados obtenidos: {regions.count}
          </p>
          <div className='list-group list-group-horizontal list-items-list'>
            {regions.results.map(region => {
              const regionId = region.url.split('/');
              return (
                <div className='card rounded-circle list-card' key={region.name}>
                  <div className='card-body text-center list-card-item'>
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
