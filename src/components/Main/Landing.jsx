import { Link } from 'react-router-dom';
import { backgroundImage, berrieIcon, regionIcon, pokeballIcon, potionIcon } from '../../assets';

export const Landing = () => {
    return (
        <div className='container background'>
            <div className='row'>
                <header className='col-12 text-center p-3'>
                    <h1 className='font-weight-bold'>POKE REACT APP</h1>
                </header>
                <div className='col-12 text-center m-2 mb-4'>
                    <img className='img rounded-circle img-fluid' src={backgroundImage} alt="poke-dex" />
                </div>
                <div className='col-12'>
                    <form action="" className='row d-flex justify-content-center mt-5 mb-5'>
                        <div className='col-10'>
                            <input type="search" className='form-control' placeholder='Que deseas buscar?' />
                        </div>
                        <button type='submit' className='btn btn-success'>Buscar</button>
                    </form>
                    <h2 className='p-3 mb-5 font-weight-bold'>Selecciona una Categoria</h2>
                    <div className='card-deck mt-5 mb-5'>
                        <Link to="items-list" className='card rounded-circle category-container'>
                            <div className='category-img__container pt-3'>
                                <img src={potionIcon} alt="" className='img-fluid' />
                                <div className='card-body text-center'>
                                    <h5 className='card-title font-weight-bold text-white'>Items</h5>
                                </div>
                            </div>
                        </Link>
                        <Link to="berries-list" className='card rounded-circle category-container'>
                            <div className='category-img__container pt-3'>
                                <img src={berrieIcon} alt="" className='img-fluid' />
                                <div className='card-body text-center'>
                                    <h5 className='card-title font-weight-bold text-white'>Bayas</h5>
                                </div>
                            </div>
                        </Link>
                        <Link to="pokemon-list" className='card rounded-circle category-container'>
                            <div className='category-img__container pt-3'>
                                <img src={pokeballIcon} alt="" className='img-fluid' />
                                <div className='card-body text-center'>
                                    <h5 className='card-title font-weight-bold text-white'>Pokemon</h5>
                                </div>
                            </div>
                        </Link>
                        <Link to="regions-list" className='card rounded-circle category-container'>
                            <div className='category-img__container pt-3'>
                                <img src={regionIcon} alt="" className='img-fluid' />
                                <div className='card-body text-center'>
                                    <h5 className='card-title font-weight-bold text-white'>Regiones</h5>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
