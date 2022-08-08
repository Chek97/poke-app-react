import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export const Item = () => {

    const { id } = useParams();
    const [item, setItem] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getItemData = async () => {// ? Posibilidad de crear un HOOK
            try {
                const request = await fetch(`https://pokeapi.co/api/v2/item/${id}`);
                const response = await request.json();
                setItem(response);
                setLoading(false);
            } catch (error) {
                console.log(error);
                setLoading(false);
            }
        }
        getItemData();
    }, []);

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
                            <img src={item.sprites.default} alt="Imagen del item" />
                        </div>
                    </div>
                    <div className='col-8'>
                        <h2>{item.name}</h2>
                        <div>
                            <h4>Atributos</h4>
                            <ul className='list-group list-group-horizontal'>
                                {item.attributes.map(att => (
                                    <li className='list-group-item'>{att.name}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className='col-12'>
                        <div>
                            <h3>Categoria</h3>
                            <p>{item.category.name}</p>
                        </div>
                        <div>
                            <h3>Descripcion</h3>
                            <p>{item.flavor_text_entries[13].text}</p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}
