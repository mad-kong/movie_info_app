import React from 'react';
import Movie from "./Movie"
import axios from "axios";
import "./App.css"

class App extends React.Component{
  state = {
    isLoading : true,
    movies : []
  }
  render(){
    const {isLoading, movies} = this.state;
    return (
      <section className = "container">
        {isLoading ? 
          <div className = "loader">
            <span className = "loaderText">Loading...</span>
          </div> : 
          <div className = "movies">
            {movies.map(movie =>
            <Movie
            id = {movie.id}
            title = {movie.title}   
            year = {movie.year}
            genres = {movie.genres}
            poster = {movie.medium_cover_image}
            summary = {movie.summary}
            /> 
            )}
          </div>
        }
      </section>
    )
  }

  componentDidMount(){
    this.getMovies()
  }

  getMovies = async () => {
    const {data:{data:{movies}}} = await axios.get(
      "https://yts.mx/api/v2/list_movies.json?sort_by=rating"
    )
    this.setState({movies,isLoading : false})
  }

}

export default App;
