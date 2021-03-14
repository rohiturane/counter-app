import React, { Component } from 'react'
import { getMovies, deleteMovie } from "../services/fakeMovieService";

class Movie extends Component {
    state = { movies: getMovies() }
    deleteMovie = (movie) => {
        const movies = this.state.movies.filter(m => m._id !== movie._id);
        this.setState({movies: movies});
    }
    render() { 
        const { length: count } = this.state.movies;
        if(count===0)
            return <p>There is no movies!</p>;
        return ( 
            <div>
                <p>There are {count} movies</p>
                <table className="table table-striped">
                    <thead>
                    <tr>
                        <th>Movie</th>
                        <th>Generc</th>
                        <th>Stock</th>
                        <th>Rate</th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>
                        {this.state.movies.map(movie => {
                            return (<tr key={movie._id}>
                                <td>{movie.title}</td>
                                <td>{movie.genre.name}</td>
                                <td>{movie.numberInStock}</td>
                                <td>{movie.dailyRentalRate}</td>
                                <td><button onClick={() => this.deleteMovie(movie)} className="btn btn-danger">Delete</button></td>
                                </tr>);
                        })}
                    </tbody>
                </table>
            </div>
         );
    }
}
 
export default Movie;
