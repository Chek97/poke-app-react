import { useParams } from "react-router-dom"
import { useFetch } from "../../hooks/useFetch"
import { Return } from "../shared";

export const Movements = () => {

  const { id } = useParams();
  const { list: pokemon, loading } = useFetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  const { moves } = pokemon;

  return (
    <div className="background row">
      {loading ? (
        <div className='spinner-border spinner-container' role="status">
          <span className='sr-only'>Cargando....</span>
        </div>
      ) : (
        <>
          <header className="col-12">
            <h2 className="font-weight-bold">
              <Return /> Movimientos Posibles de: <small>{pokemon.name}</small></h2>
          </header>
          <ul className="list-group list-group-flush">
            {moves.map((move, idx) => (
              <li className="list-group-item rounded mb-2" key={idx}>{move.move.name}</li>
            ))}
          </ul>
        </>
      )}
    </div>
  )
}
