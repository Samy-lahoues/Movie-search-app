import React from "react";

interface MovieProps {
    date : string,
    poster : string,
    title : string,
    id : number
}

function MovieCard ({date, poster , title, id} : MovieProps) {
    return (
        <div className="movie">
        <div>
            <p>{date}</p>
        </div>
        <div>
            <img src={poster} alt={`image-${id}`} />
        </div>
        <div>
            <span>Movie</span>
            <h3>{title}</h3>
        </div>
        </div>
    )
}
export default MovieCard;