import { Link } from "react-router-dom"

export const Info = () => {
  return (
    <div className='row background'>
        <div className='col-3 collapse-container'>
            <div className="text-center mt-2">
                <h3 className="font-weight-bold">Secciones</h3>
            </div>
            <ul className="list-group p-3">
                <li className="list-group-item mb-3">
                    <Link to="/pokemon-list">Pokemon</Link>
                </li>
                <li className="list-group-item mb-3">
                    <Link to="/berries-list">Bayas</Link>
                </li>
                <li className="list-group-item mb-3">
                    <Link to="/regions-list">Regiones</Link>
                </li>
                <li className="list-group-item mb-3">
                    <Link to="/items-list">Objetos</Link>
                </li>
            </ul>
        </div>
        <div className='col-9'>
            <header className="p-3">
                <h2 className="font-weight-bold">Informacion Detallada</h2>
            </header>
            <div className="p-2 text-justify">
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
            <div className="p-2">
                <div className="p-3">
                    <h2 className="font-weight-bold">Tipos de Peticiones</h2>
                </div>
                <p>
                    En esta aplicacion se tienen diferentes tipos de datos que constituyen el mundo de pokemon, estas son: 
                </p>
                <ul className="alert alert-secondary">
                    <li className="list-group-item mb-3">Listado de pokemon y caracteristicas</li>
                    <li className="list-group-item mb-3">Listado de las bayas existentes en los juegos</li>
                    <li className="list-group-item mb-3">Listado de las regiones de los juegos</li>
                    <li className="list-group-item mb-3">Listado de los diferentes items y sus caracteristicas</li>
                </ul>
            </div>
            <div className="p-2">
                <h3 className="font-weight-bold">Pokemon</h3>
                <p>Los pokemon que se pueden obtener son los de la lista 1 hasta la generacion 7</p>
            </div>
            <div className="p-2">
                <h3 className="font-weight-bold">Bayas</h3>
                <p>Los pokemon que se pueden obtener son los de la lista 1 hasta la generacion 7</p>
            </div>
            <div className="p-2">
                <h3 className="font-weight-bold">Items</h3>
                <p>Los pokemon que se pueden obtener son los de la lista 1 hasta la generacion 7</p>
            </div>
            <div className="p-2 mb-5">
                <h3 className="font-weight-bold">Regiones</h3>
                <p>Los pokemon que se pueden obtener son los de la lista 1 hasta la generacion 7</p>
            </div>
        </div>
    </div>
  )
}
