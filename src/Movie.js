import React from 'react';
import PropTypes from "prop-types";

function Movie({id,title,year,genres,poster,summary}){   
    return(
        <div className = "movie">
            <img src = {poster} alt = {title}/>
            <div className = "movie_date">
                <h1 className = "movie_title">{title}</h1>
                <h3 className = "movie_year">{year}</h3>
                <ul className = "movie_genres">
                    {genres.map((genre,index) => (
                        <li className = "genres_genre"key = {index}>{genre}</li>
                    ))}
                </ul>
                <p className = "movie_summary">{summary.slice(0,280)}</p>
            </div>
        </div>
    )
}

Movie.propTypes = {
    id : PropTypes.number.isRequired,
    title : PropTypes.string.isRequired,   
    year : PropTypes.number.isRequired,
    genres : PropTypes.array.isRequired,
    poster : PropTypes.string.isRequired,
    summary : PropTypes.string.isRequired,
}

export default Movie;