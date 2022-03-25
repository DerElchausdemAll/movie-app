import React from "react";
import useStore from "./useStore";
import AddCircleIcon from "@mui/icons-material/AddCircle";

const IMG_API = "https://image.tmdb.org/t/p/w1280";

const Movie = ({ title, poster_path, vote_average, overview, id }) => {
	const addMovie = useStore(state => state.addMovie);
	const movies = useStore(state => state.movies);
	const filter = movies.filter(movie => movie.id === id);
	console.log(filter);

	const handleButton = () => {
		addMovie(id, title, poster_path, vote_average, overview);
		return <button>HUhuhasudasd</button>;
	};

	return (
		<div className="movie">
			<img src={IMG_API + poster_path} alt={title} />
			<div className="movie-info">
				<div>{title}</div>
				<div className="movie-rating">{vote_average}</div>
			</div>
			<div className="movie-details">
				<h2>Description:</h2>
				<p>{overview}</p>
				<div className="icon-add">
					<AddCircleIcon onClick={handleButton} sx={{ fontSize: "40px" }} />
				</div>
				<div></div>
			</div>
		</div>
	);
};

export default Movie;

// {filter ? (
// 	<AddCircleIcon onClick={handleButton} sx={{ fontSize: "40px" }} />
// ) : (
// 	<button>HUhuhasudasd</button>
// )}
