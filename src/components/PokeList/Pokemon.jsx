import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

export const Pokemon = () => {

    const { id } = useParams();
    const [pokemon, setPokemon] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getPokemonData = async () => {// ? Posibilidad de crear un HOOK
            try {
                const request = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
                const response = await request.json();
                setPokemon(response);
                setLoading(false);
            } catch (error) {
                console.log(error);
                setLoading(false);
            }
        }
        getPokemonData();
    }, []);

    console.log(pokemon);

    return (
        <div className='row'>
            {loading ? (
                <div className='spinner-border' role="status">
                    <span className='sr-only'>Cargando....</span>
                </div>
            ) : (
                <>
                    <div className='col-4'>
                        <div>
                            <img src={pokemon.sprites.front_default} alt={pokemon.name} />
                        </div>
                    </div>
                    <div className='col-8'>
                        <p>Nombre: {pokemon.name}</p>
                        <p>Experiencia base: {pokemon.base_experience}</p>
                        <p>Altura: {pokemon.height}</p>
                        <div>
                            <p>Movimientos</p>
                            <Link to={`/movements/${id}`} className='btn btn-outline-success'>Ver Movimientos</Link>{/* //TODO: continuar con la pagina */}
                        </div>
                        <p>Ancho: {pokemon.weight}</p>
                        <ul>
                            <h5>Tipo</h5>
                            {pokemon.types.map(type => (
                                <li key={type.slot}>{type.type.name}</li>
                            ))}
                        </ul>
                    </div>
                </>
            )}
        </div>
    )
}
