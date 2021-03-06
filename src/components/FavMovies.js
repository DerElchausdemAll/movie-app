import React from "react";
import useStore from "./useStore";

const IMG_API = "https://image.tmdb.org/t/p/w1280";

const FavMovies = ({ title, poster_path, vote_average, overview, id }) => {
	const addMovie = useStore(state => state.addMovie);
	const deleteMovie = useStore(state => state.deleteMovie);

	const handleButton = () => {
		addMovie(id, title, poster_path, vote_average, overview);
	};

	return (
		<div className="movie">
			<img src={IMG_API + poster_path} alt={title} />
			<div className="movie-info">
				<div>{title}</div>
				<div className="movie-rating">{vote_average}</div>
			</div>
			<div className="movie-details">
				<h2>Overview:</h2>
				<p>{overview}</p>
				<p>{id}</p>
				<button onClick={handleButton}>Add to your Watchlist</button>
				<button
					onClick={() => {
						deleteMovie(index);
					}}
				>
					Delete Movie
				</button>
			</div>
		</div>
	);
};

export default FavMovies;
