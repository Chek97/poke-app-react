import { useParams, Link } from 'react-router-dom';
import { useFetch } from '../../hooks/useFetch';
import { Return } from '../shared';

export const Pokemon = () => {

    const { id } = useParams();
    const { list: pokemon, loading } = useFetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    console.log(pokemon);

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
                    <div className='col-xs-12 col-sm-12 col-md-4'>
                        <div className='img-item__container'>
                            <img 
                                src={pokemon.sprites.front_default} 
                                alt={pokemon.name} 
                                className="img-thumbnail rounded-circle img-fluid item-img" 
                            />
                        </div>
                    </div>
                    <div className='col-xs-12 col-sm-12 col-md-8'>
                        <header className='mt-3'>
                            <h2 className='font-weight-bold'>Nombre: <small>{pokemon.name}</small></h2>
                        </header>
                        <div className='alert alert-primary rounded mt-4 mb-4'>
                            <h3 className='font-weight-bold'>Experiencia base: <small>{pokemon.base_experience}</small></h3>
                        </div>
                        <div className='alert alert-success rounded mt-4 mb-4'>
                            <h3 className='font-weight-bold'>Altura: <small>{pokemon.height}</small></h3>
                        </div>
                        <div className='alert alert-dark rounded mt-4 mb-4'>
                            <h3 className='font-weight-bold'>Movimientos</h3>
                            <Link to={`/movements/${id}`} className='btn btn-outline-secondary'>Ver Movimientos</Link>
                        </div>
                        <div className='alert alert-info rounded mt-4 mb-4'>
                            <h3 className='font-weight-bold'>Ancho: <small>{pokemon.weight}</small></h3>
                        </div>
                        <div className='alert alert-secondary rounded mt-4 mb-4'>
                            <ul className='list-group list-group-flush'>
                                <h5 className='font-weight-bold pb-3'>Tipo</h5>
                                {pokemon.types.map(type => (
                                    <li key={type.slot} className="list-group-item rounded mb-2">{type.type.name}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}
