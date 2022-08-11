import React, {Component} from 'react';

class Search extends Component {
    state = {
        search: '',
        type: 'all'
    }
    handleKey = (event) => {
        if (event.key === 'Enter') {
            this.props.searchMovies(this.state.search, this.state.type);
        }
    }

    handleFilter = (event) => {
        this.setState(() => ({type: event.target.dataset.type}), () => {
            this.props.searchMovies(this.state.search, this.state.type);
        }) ;
    }

    render() {
        return (
            <div className="input-field darken2">
                <input
                    id="last_name"
                    type="search"
                    className="validate"
                    placeholder={'Search'}
                    value={this.state.search}
                    onChange={(e) => this.setState({search: e.target.value})}
                    onKeyDown={this.handleKey}
                />
                <button
                    className={'btn search-btn blue darken-1'}
                    onClick={() => this.props.searchMovies(this.state.search, this.state.type)}
                >
                    Search
                </button>
                <div>
                    <label>
                        <input
                            name="type"
                            type="radio"
                            onChange={this.handleFilter}
                            data-type="all"
                            checked={this.state.type === 'all'}
                        />
                        <span>All</span>
                    </label>
                    <label>
                        <input
                            name="type"
                            type="radio"
                            onChange={this.handleFilter}
                            data-type="movie"
                            checked={this.state.type === 'movie'}
                        />
                        <span>Movies</span>
                    </label>
                    <label>
                        <input
                            name="type"
                            type="radio"
                            onChange={this.handleFilter}
                            data-type="series"
                            checked={this.state.type === 'series'}
                        />
                        <span>Series</span>
                    </label>
                </div>
            </div>
        );
    }
}

export default Search;