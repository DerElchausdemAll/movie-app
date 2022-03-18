import React, { useEffect, useState } from "react";
import Movie from "./components/Movie";
import "./index.css";

const FEATURED_API =
	"https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=4d7acc0cb3eb815dee451805a333e105&page=1";
const IMG_API = "https://image.tmdb.org/t/p/w1280";
const SEARCH_API =
	"https://api.themoviedb.org/3/search/movie?&api_key=4d7acc0cb3eb815dee451805a333e105&query=";

const App = () => {
	const [movies, setMovies] = useState([]);

	useEffect(() => {
		fetch(FEATURED_API)
			.then(res => res.json())
			.then(data => {
				console.log(data);
				setMovies(data.results);
			});
	}, []);

	return (
		<div>
			<h2>Your Top Ten</h2>
			<div className="movie-container">
				{movies.length > 0 && movies.map(movie => <Movie key={movie.id} {...movie} />)}
			</div>
		</div>
	);
};

export default App;

// https://api.themoviedb.org/3/movie/550?api_key=4d7acc0cb3eb815dee451805a333e105
// 4d7acc0cb3eb815dee451805a333e105
