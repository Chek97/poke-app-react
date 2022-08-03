import React from 'react'

export const Info = () => {
  return (
    <div className='row'>
        <div className='col-2' style={{border: '1px solid red'}}>
            Collapse
        </div>
        <div className='col-10' style={{border: '1px solid purple'}}>
            <header>
                <h2>Informacion Detallada</h2>
            </header>
            <div>
                <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                    Quisquam nulla nemo excepturi voluptatem exercitationem ab beatae quasi in illo atque, 
                    amet deserunt itaque omnis, sunt, cupiditate hic tenetur officiis! Asperiores.
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                    Quisquam nulla nemo excepturi voluptatem exercitationem ab beatae quasi in illo atque, 
                    amet deserunt itaque omnis, sunt, cupiditate hic tenetur officiis! Asperiores.
                </p>
                <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                    Quisquam nulla nemo excepturi voluptatem exercitationem ab beatae quasi in illo atque, 
                    amet deserunt itaque omnis, sunt, cupiditate hic tenetur officiis! Asperiores.
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                    Quisquam nulla nemo excepturi voluptatem exercitationem ab beatae quasi in illo atque, 
                    amet deserunt itaque omnis, sunt, cupiditate hic tenetur officiis! Asperiores.
                </p>
            </div>
            <div>
                <h2>Tipos de Peticiones</h2>
                <p>
                    En esta aplicacion se tienen diferentes tipos de datos que constituyen el mundo de pokemon, estas son: 
                </p>
                <ul>
                    <li>Listado de pokemon y caracteristicas</li>
                    <li>Listado de las bayas existentes en los juegos</li>
                    <li>Listado de las regiones de los juegos</li>
                    <li>Listado de los diferentes items y sus caracteristicas</li>
                </ul>
            </div>
            <div>
                <h3>Pokemon</h3>
                <p>Los pokemon que se pueden obtener son los de la lista 1 hasta la generacion 7</p>
            </div>
            <div>
                <h3>Bayas</h3>
                <p>Los pokemon que se pueden obtener son los de la lista 1 hasta la generacion 7</p>
            </div>
            <div>
                <h3>Items</h3>
                <p>Los pokemon que se pueden obtener son los de la lista 1 hasta la generacion 7</p>
            </div>
            <div>
                <h3>Regiones</h3>
                <p>Los pokemon que se pueden obtener son los de la lista 1 hasta la generacion 7</p>
            </div>
        </div>
    </div>
  )
}
