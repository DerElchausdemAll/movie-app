import React from "react";
import useStore from "./components/useStore";
import "./index.css";
import Typography from "@mui/material/Typography";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";

const IMG_API = "https://image.tmdb.org/t/p/w1280";

const WatchList = () => {
	const movies = useStore(state => state.movies);
	const deleteMovie = useStore(state => state.deleteMovie);

	return (
		<div>
			<header>
				<div className="navContainer">
					<a href="/" className="navElements">
						<Typography variant="h4" sx={{ color: "white" }}>
							Home
						</Typography>
					</a>
					<a href="/watchlist" className="navElements">
						<Typography variant="h4" sx={{ color: "white" }}>
							Watchlist
						</Typography>
					</a>
				</div>
				<div></div>
			</header>
			<div className="movie-container">
				{movies.map((movie, index) => {
					return (
						<div key={index} className="movie">
							<img src={IMG_API + movie.poster_path} alt={movie.title} />
							<div className="movie-info">
								<div>{movie.title}</div>
								<div className="movie-rating">{movie.vote_average}</div>
							</div>
							<div className="movie-details">
								<h2>Overview:</h2>
								<p>{movie.overview}</p>
								<div className="icon-add">
									<HighlightOffIcon
										sx={{ fontSize: "40px" }}
										onClick={() => {
											deleteMovie(index);
										}}
									/>
								</div>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default WatchList;
