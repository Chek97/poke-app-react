import { useParams } from "react-router-dom"
import { useFetch } from "../../hooks/useFetch"
import { Return } from "../shared";

export const Movements = () => {

  const { id } = useParams();
  const { list: pokemon, loading } = useFetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  const { moves } = pokemon;

  return (
    <div className="container background">
      {loading ? (
        <div className='spinner-border spinner-container' role="status">
          <span className='sr-only'>Cargando....</span>
        </div>
      ) : (
        <div className="row d-flex justify-content-center pl-4 pr-4">
          <div className="col-xs-12 p-3 mr-auto">
            <Return />
          </div>
          <div className="col-xs-12">
            <header className="mt-3 mb-3">
              <h4 className="font-weight-bold">
              Movimientos de: <small>{pokemon.name}</small></h4>
            </header>
            <ul className="list-group list-group-flush">
              {moves.map((move, idx) => (
                <li className="list-group-item rounded mb-2" key={idx}>{move.move.name}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  )
}
