import { useState } from "react";
import { findWords } from "../../helpers/findMatch";

export const Search = () => {

    const [search, setSearch] = useState("");
    const [matches, setMatches] = useState([]);
    const [flag, setFlag] = useState(false);

    const handleSearch = (e) => {
        setFlag(false);
        setSearch(e.target.value);
    }

    const searchSubmit = (e) => {
        e.preventDefault();
        setFlag(true);
        setMatches(findWords(search));
    }

    return (
        <>
            <form onSubmit={searchSubmit} className='row d-flex justify-content-center mt-5 mb-5'>
                <div className='col-10'>
                    <input
                        type="search"
                        className='form-control'
                        placeholder='Que deseas buscar?'
                        name='search'
                        value={search}
                        onChange={handleSearch}
                    />
                </div>
                <button type='submit' className='btn btn-success'>Buscar</button>
            </form>
            {flag && (
                <div className="container">
                    <h4 className="font-weight-bold">Resultados</h4>
                    <ul className="list-group">
                        {matches.length === 0 ? (
                            <div className="alert alert-warning">No se encontraron resultados para <strong>"{search}"</strong></div>
                        ) : (matches.map(match => (
                            <li className="list-group-item" key={match}>{match}</li>
                        )))}
                    </ul>
                </div>
            )}
        </>
    )
}
