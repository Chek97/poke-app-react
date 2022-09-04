import { useParams } from 'react-router-dom';
import { useFetch } from '../../hooks/useFetch';
import { Return } from '../shared/Return';

export const Berrie = () => {

    const { id } = useParams();
    const {list: berrie, loading} = useFetch(`https://pokeapi.co/api/v2/berry/${id}`);

  return (
    <div className='background landing-container'>
        {loading ? (
            <div className='spinner-border spinner-container' role="status">
                <span className='sr-only'>Cargando....</span>
            </div>
        ) : (
            <div className='row d-flex justify-content-center pl-4 pr-4'>
                <div className='col-xs-12 col-sm-12 col-md-12 p-3 mr-auto'>
                    <Return />
                </div>
                <div className='col-xs-12  col-sm-12 col-md-4'>
                    <header className='alert alert-primary rounded  text-center mt-3'>
                        <h2 className='font-weight-bold'>{berrie.name}</h2>
                    </header>
                    <div className='alert alert-success rounded mt-4 mb-4'>jordi
                        {/* //TODO: realizar ajustes con 2 peticion con traducciones y demas */}
                        <p>Aptitud Física: <span className='font-weight-bold pl-2'>{berrie.firmness.name}</span></p>
                        <p>Tiempo de crecimiento: <span className='font-weight-bold pl-2'>{berrie.growth_time}</span></p>
                        <p>Tamaño: <span className='font-weight-bold pl-2'>{berrie.size}</span></p>
                        <p>Suavidad: <span className='font-weight-bold pl-2'>{berrie.smoothness}</span></p>
                        <p>Tipo naturaleza: <span className='font-weight-bold pl-2'>{berrie.natural_gift_type.name}</span></p>
                    </div>
                </div>
                <div className='col-xs-12 col-sm-12 col-md-8'>
                    <div className='mt-5 mb-4'>
                        <h4> Nombre completo: <small>{berrie.item.name}</small></h4>
                    </div>
                    <div className='alert alert-dark rounded mt-4 mb-4'>
                        <h5 className='font-weight-bold'>Sabores y cantidad</h5>
                        <ul className=' list-group'>
                            {berrie.flavors.map(flavor => (
                                <li className='list-group-item' key={flavor.id}>{`${flavor.flavor.name}: ${flavor.potency}`}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        )}
    </div>
  )
}
