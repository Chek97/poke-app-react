import { useParams, Link } from 'react-router-dom';
import { useFetch } from '../../hooks/useFetch';

export const Pokemon = () => {

    const { id } = useParams();
    const { list: pokemon, loading } = useFetch(`https://pokeapi.co/api/v2/pokemon/${id}`);

    return (
        <div className='container'>
            {loading ? (
                <div className='spinner-border spinner-container' role="status">
                    <span className='sr-only'>Cargando....</span>
                </div>
            ) : (
                <div className='row'>
                    <div className='col-4 background'>
                        <div className='img-item__container'>
                            <img 
                                src={pokemon.sprites.front_default} 
                                alt={pokemon.name} 
                                className="img-thumbnail rounded-circle img-fluid item-img m-3" 
                            />
                        </div>
                    </div>
                    <div className='col-8'>
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
                            <Link to={`/movements/${id}`} className='btn btn-outline-secondary'>Ver Movimientos</Link>{/* //TODO: continuar con la pagina */}
                        </div>
                        <div className='alert alert-info rounded mt-4 mb-4'>
                            <h3 className='font-weight-bold'>Ancho: <small>{pokemon.weight}</small></h3>
                        </div>
                        <div className='alert alert-secondary rounded mt-4 mb-4'>
                            <ul className='list-group list-group-flush '>
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
