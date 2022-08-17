import React, {useState} from 'react';

const Search = (props) => {
    const {searchMovies = Function.prototype} = props
    const [search, setSearch] = useState('')
    const [type, setType] = useState('all')

    const handleKey = (event) => {
        if (event.key === 'Enter') {
            searchMovies(search, type);
        }
    }

    const handleFilter = (event) => {
        setType(event.target.dataset.type);
        searchMovies(search, event.target.dataset.type);
    }

    return (
        <div className="input-field darken2">
            <input
                id="last_name"
                type="search"
                className="validate"
                placeholder={'Search'}
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                onKeyDown={handleKey}
            />
            <button
                className={'btn search-btn blue darken-1'}
                onClick={() => searchMovies(search, type)}
            >
                Search
            </button>
            <div>
                <label>
                    <input
                        name="type"
                        type="radio"
                        onChange={handleFilter}
                        data-type="all"
                        checked={type === 'all'}
                    />
                    <span>All</span>
                </label>
                <label>
                    <input
                        name="type"
                        type="radio"
                        onChange={handleFilter}
                        data-type="movie"
                        checked={type === 'movie'}
                    />
                    <span>Movies</span>
                </label>
                <label>
                    <input
                        name="type"
                        type="radio"
                        onChange={handleFilter}
                        data-type="series"
                        checked={type === 'series'}
                    />
                    <span>Series</span>
                </label>
            </div>
        </div>
    );
}

export default Search;