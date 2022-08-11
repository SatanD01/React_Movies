import Cards from "../components/Cards";
import React, {Component} from 'react';
import Preloader from "../components/Preloader";
import Search from "../components/Search";

const API_KEY = process.env.REACT_APP_API_KEY;

class Main extends Component {
    state = {
        movies: [],
        loading: true,
    }

    searchMovies = (str, type = 'all') => {
        this.setState({loading: true})
        fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${str}${type !== 'all' ? `&type=${type}` : ''}`)
            .then(response => response.json())
            .then((data) => {
                this.setState({
                    movies: data.Search,
                    loading: false
                })
            })
    }

    componentDidMount() {
        fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=matrix`)
            .then(response => response.json())
            .then((data) => {
                this.setState({
                    movies: data.Search,
                    loading: false
                })
            })
    }

    render() {
        const {loading, movies} = this.state
        return (
            <main className={'container content'}>
                <Search searchMovies={this.searchMovies}/>
                {loading ? <Preloader/> : <Cards movies={movies}/>}
            </main>
        );
    }
}

export default Main;