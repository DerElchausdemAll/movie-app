import React, { useEffect, useState } from "react";
import Movie from "./components/Movie";
import "./index.css";
import Button from "@mui/material/Button";

const FEATURED_API =
	"https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=4d7acc0cb3eb815dee451805a333e105&page=";
const SEARCH_API =
	"https://api.themoviedb.org/3/search/movie?&api_key=4d7acc0cb3eb815dee451805a333e105&query=";

const Home = () => {
	const [page, setPage] = useState(2);

	const [searchTerm, setSearchTerm] = useState("");
	const [movies, setMovies] = useState([]);
	const SEARCH_API =
		"https://api.themoviedb.org/3/search/movie?&api_key=4d7acc0cb3eb815dee451805a333e105&query=";

	const handleSubmit = e => {
		e.preventDefault();
		fetch(SEARCH_API + searchTerm)
			.then(res => res.json())
			.then(data => {
				console.log(data);
				setMovies(data.results);
			});
	};

	const handleOnChange = e => {
		e.preventDefault();
		setSearchTerm(e.target.value);
	};

	useEffect(() => {
		fetch(FEATURED_API)
			.then(res => res.json())
			.then(data => {
				console.log(data);
				setMovies(data.results);
			});
	}, []);

	const nextPage = e => {
		e.preventDefault();
		setPage(page => page + 1);
		console.log(page);
		fetch(FEATURED_API + page)
			.then(res => res.json())
			.then(data => {
				console.log(data);
				setMovies(data.results);
			});
	};

	const prevPage = e => {
		e.preventDefault();
		setPage(page => page - 1);
		console.log(page);
		fetch(FEATURED_API + page)
			.then(res => res.json())
			.then(data => {
				console.log(data);
				setMovies(data.results);
			});
	};

	return (
		<div>
			<header>
				<div className="navContainer">
					<a href="/" className="navElements">
						Main
					</a>
					<a href="/watchlist" className="navElements">
						Watchlist
					</a>
				</div>
				<form onSubmit={handleSubmit}>
					<input
						type="text"
						placeholder="Search..."
						className="search"
						value={searchTerm}
						onChange={handleOnChange}
					/>
				</form>
			</header>
			<div className="page">
				<Button variant="contained" onClick={prevPage} className="buttons">
					Previous
				</Button>
				<div className="pages">Page: {page - 1}</div>
				<Button variant="contained" onClick={nextPage} className="buttons">
					Next
				</Button>
			</div>

			<div className="movie-container">
				{movies.map(movie => {
					return <Movie key={movie.id} {...movie} />;
				})}
			</div>
		</div>
	);
};

export default Home;
