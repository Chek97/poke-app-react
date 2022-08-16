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
                <div className='spinner-border spinner-container' role="status">
                    <span className='sr-only'>Cargando....</span>
                </div>
            ) : (
                <div className='row'>
                    <div className='col-4 background'>{/* //TODO: cambiar el color */}
                        <div className='img-item__container'>
                            <img src={item.sprites.default} className="img-thumbnail rounded-circle img-fluid item-img m-3" alt="Imagen del item" />
                        </div>
                    </div>
                    <div className='col-8'>
                        <header className='mt-3'>
                            <h2 className='font-weight-bold'>{item.name}</h2>
                        </header>
                        <div className='alert alert-primary rounded mt-4 mb-4'>
                            <h3 className='font-weight-bold'>Categoria: <small>{item.category.name}</small></h3>
                        </div>
                        <div className='alert alert-success rounded mt-4 mb-4'>
                            <h3 className='font-weight-bold'>Descripcion</h3>
                            <p>{item.flavor_text_entries[13].text}</p>
                        </div>
                        <div className='alert alert-dark rounded mt-4 mb-4'>
                            <h4 className='font-weight-bold'>Atributos</h4>
                            <ul className='list-group'>
                                {item.attributes.map(att => (
                                    <li className='list-group-item mt-2 mb-2 text-primary font-weight-bold'>{att.name}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}
