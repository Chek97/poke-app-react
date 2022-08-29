import { useParams } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
import { Return } from "../shared/Return";


export const Region = () => {

    const { id } = useParams();
    const {list: region, loading } = useFetch(`https://pokeapi.co/api/v2/region/${id}`);

    return (
        <div className="container background">
            {loading ? (
                <div className='spinner-border spinner-container' role="status">
                    <span className='sr-only'>Cargando....</span>
                </div>
            ): (
                <div className="row d-flex justify-content-center pl-4 pr-4">
                    <div className="col-xs-12">
                        <div className="col-xs-12 p-3 mr-auto">
                            <Return />
                        </div>
                        <header className="col-xs-12 m-3">
                            <h4 className='font-weight-bold'> Ubicaciones</h4>
                        </header>
                        <ul className="list-group">
                            {region.locations.map(location => (
                                <li className="list-group-item mb-1 mt-1" key={location.name}>{location.name}</li>
                            ))}
                        </ul>
                    </div>
                    <div className="col-xs-12">
                        <header className="mt-3">
                            <h2 className="font-weight-bold">Region: <small>{region.name}</small></h2>
                        </header>
                        <div className="alert alert-dark">
                            <p>Apariciones en juegos: </p>
                            <ul className="list-group mt-4 mb-4">
                                {region.version_groups.map(version => (
                                    <li className="list-group-item bg-success text-white mt-1 mb-1" key={version.name}>{version.name}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}
