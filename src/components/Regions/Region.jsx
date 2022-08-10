import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";


export const Region = () => {

    const { id } = useParams();
    const [region, setRegion] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getRegionData = async () => {// ? Posibilidad de crear un HOOK
            try {
                const request = await fetch(`https://pokeapi.co/api/v2/region/${id}`);
                const response = await request.json();
                setRegion(response);
                setLoading(false);
            } catch (error) {
                console.log(error);
                setLoading(false);
            }
        }
        getRegionData();
    }, []);

    return (
        <div className="row">
            {loading ? (
                <div className='spinner-border' role="status">
                    <span className='sr-only'>Cargando....</span>
                </div>
            ): (
                <>
                    <div className="col-6">
                        <ul className="list-group">
                            <h4>Ubicaciones</h4>
                            {region.locations.map(location => (
                                <li className="list-group-item" key={location.name}>{location.name}</li>
                            ))}
                        </ul>
                    </div>
                    <div className="col-6">
                        <h2>Region: {region.name}</h2>
                        <p>Apariciones en juegos: </p>
                        <ul className="list-group">
                            {region.version_groups.map(version => (
                                <li className="list-group-item" key={version.name}>{version.name}</li>
                            ))}
                        </ul>
                    </div>
                </>
            )}
        </div>
    )
}
