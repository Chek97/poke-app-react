import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export const Berrie = () => {

    const { id } = useParams();
    const [berrie, setBerrie] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getBerrieData = async () => {// ? Posibilidad de crear un HOOK
            try {
                const request = await fetch(`https://pokeapi.co/api/v2/berry/${id}`);
                const response = await request.json();
                setBerrie(response);
                setLoading(false);
            } catch (error) {
                console.log(error);
                setLoading(false);
            }
        }
        getBerrieData();
    }, []);

    console.log(berrie);

  return (
    <div className='container'>
        {loading ? (
            <div className='spinner-border' role="status">
                <span className='sr-only'>Cargando....</span>
            </div>
        ) : (
            <div className='row'>
                <div className='col-4'>
                    <div>
                        <img src="#" alt="" />{/* //TODO: hacer otra peticion para obtener la img */}
                    </div>
                    <div>
                        <h3>Nombre completo: </h3><span>{berrie.item.name}</span>
                    </div>
                    <ul className='list-group'>
                        <h5>Sabores y cantidad</h5>
                        {berrie.flavors.map(flavor => (
                            <li className='list-group-item' key={flavor.id}>{`${flavor.flavor.name} ${flavor.potency}`}</li>
                        ))}
                    </ul>
                </div>
                <div className='col-8'>
                    <header>
                        <h2>{berrie.name}</h2>
                    </header>
                    <div>
                        {/* //TODO: realizar ajustes con 2 peticion con traducciones y demas */}
                        <p>Firmess: {berrie.firmness.name}</p>
                        <p>Tiempo de crecimiento: {berrie.growth_time}</p>
                        <p>Tamaño: {berrie.size}</p>
                        <p>smoothness: {berrie.smoothness}</p>
                        <p>Tipo natural: {berrie.natural_gift_type.name}</p>
                    </div>
                </div>
            </div>
        )}
    </div>
  )
}
