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
        <div className="search-container">
            <form onSubmit={searchSubmit} className='row mt-5 mb-5'>
                <div className='col-xs-12 col-sm-10 col-md-10 col-lg-10 form-search '>
                    <input
                        type="search"
                        className='form-control input-search'
                        placeholder='Que deseas buscar?'
                        name='search'
                        value={search}
                        onChange={handleSearch}
                    />
                </div>
                <div className="col-xs-12 col-sm-2 col-md-2 col-lg-2 button-search">
                    <button type='submit' className='btn btn-success'>Buscar</button>
                </div>
            </form>
            {flag && (
                <div className="container">
                    <h4 className="font-weight-bold">Resultados</h4>
                    <ul className="list-group">
                        {matches.length === 0 ? (
                            <div className="alert alert-warning rounded">No se encontraron resultados para <strong>"{search}"</strong></div>
                        ) : (matches.map(match => (
                            <li className="list-group-item rounded" key={match}>{match}</li>
                        )))}
                    </ul>
                </div>
            )}
        </div>
    )
}
