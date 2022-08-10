import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export const RegionsList = () => {

  const [regions, setRegions] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getRegionsList = async () => {
      try {
        const request = await fetch('https://pokeapi.co/api/v2/region/');
        const response = await request.json();
        setRegions(response);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.log(error);
      }
    }
    getRegionsList();
  }, []);

  return (
    <div className='row'>
      <div className='col-12'>
        <header className=''>
          <h1>LISTA DE REGIONES</h1>
        </header>
      </div>
      {loading ? (
        <div className='spinner-border' role="status">
          <span className='sr-only'>Cargando....</span>
        </div>
      ) : (
        <div className='col-12'>
          <p>
            Resultados obtenidos: {regions.count}
          </p>
          <div className='items-list'>
            {regions.results.map(region => {
              const regionId = region.url.split('/');
              return (
                <div className='card' style={{ width: '18rem' }} key={region.name}>
                  <img src="#" alt="" className='card-img-top' />
                  <div className='card-body'>
                    <h5 className='card-title'>{region.name}</h5>
                    <Link to={`/regions-list/${regionId[6]}`} className='btn btn-primary'>Ver mas</Link>
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
