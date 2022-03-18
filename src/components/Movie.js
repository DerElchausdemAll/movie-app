import React from "react";

const IMG_API = "https://image.tmdb.org/t/p/w1280";

const Movie = ({ title, poster_path, vote_average, overview }) => {
	return (
		<div className="movie">
			<img src={IMG_API + poster_path} alt={title} />
			<div className="movie-info">
				<div>{title}</div>
				<div>Rating: {vote_average}</div>
			</div>
			<div className="movie-details">
				<h2>Overview:</h2>
				<p>{overview}</p>
			</div>
		</div>
	);
};

export default Movie;
