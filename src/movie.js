import React from "react"
import PropTypes, { string } from "prop-types";

function Movie({id, year, title, summary, poster, genres}){
    return <div>
        <h4>{title}</h4>
        <img src={poster} alt={title} title={title} />
        <h3>{year}</h3>
        <ul>
            {genres.map((genre, index) =>(
                <li key={index}>{genre}</li>
            ))
            }
        </ul>
        <p>{summary}</p>
    </div>
};

Movie.propTypes = {
    id:PropTypes.number.isRequired,
    year:PropTypes.number.isRequired,
    title:PropTypes.string.isRequired,
    summary:PropTypes.string.isRequired,
    poster:PropTypes.string.isRequired,
    genres:PropTypes.arrayOf(string).isRequired
}

export default Movie;