import React from 'react'
import backgroundImage from '../../assets/fondo1.jpg';// TODO: hacer lo mismo de componentes
import pokemonImage from '../../assets/icons/pokeball.png';
import berrieImage from '../../assets/icons/berrie.png';
import locationImage from '../../assets/icons/location.png';
import potionImage from '../../assets/icons/potion.png';
import { Link } from 'react-router-dom';
import { NavBar } from '../shared/NavBar';// TODO: hacer lo mismo de componentes
import { Footer } from '../shared/Footer'; // TODO: hacer lo mismo de componentes

export const Landing = () => {
    return (
        <div>
            <NavBar />
            <header className='text-center p-3'>
                <h1 className='font-weight-bold'>POKE REACT APP</h1>
            </header>
            <div className='text-center m-2 mb-4'>
                <img className='img rounded-circle' src={backgroundImage} alt="poke-dex" />
            </div>
            <div className='container'>
                <form action="" className='row d-flex justify-content-center mt-4 mb-4'>
                    <div className='col-10'>
                        <input type="search" className='form-control' placeholder='Que deseas buscar?' />
                    </div>
                    <button type='submit' className='btn btn-success'>Buscar</button>
                </form>
                <hr />
                <h2 className='p-3 mb-5'>Selecciona una Categoria</h2>
                <div className='card-deck'>
                    <div className='card border-0'>
                        <Link to="items-list">
                            <img src={potionImage} alt="" />
                        </Link>
                        <div className='card-body'>
                            <h5 className='card-title'>Items</h5>
                        </div>
                    </div>
                    <div className='card border-0 rounded-circle'>
                        <Link to="berries-list">
                            <img src={berrieImage} alt="" style={{ backgroundColor: 'red' }} />
                        </Link>
                        <div className='card-body'>
                            <h5 className='card-title'>Bayas</h5>
                        </div>
                    </div>
                    <div className='card border-0'>
                        <Link to="pokemon-list">
                            <img src={pokemonImage} alt="" />
                        </Link>
                        <div className='card-body'>
                            <h5 className='card-title'>Pokemon</h5>
                        </div>
                    </div>
                    <div className='card border-0'>
                        <Link to="regions-list">
                            <img src={locationImage} alt="" />
                        </Link>
                        <div className='card-body'>
                            <h5 className='card-title'>Regiones</h5>
                        </div>
                    </div>
                </div>
            <Footer />
            </div>
        </div>
    )
}
