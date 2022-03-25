import React from "react";
import useStore from "./components/useStore";
import Movie from "./components/Movie";
import "./index.css";

const WatchList = () => {
	const movies = useStore(state => state.movies);
	console.log(movies);

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
				{/* <form onSubmit={handleSubmit}>
		<input
			type="text"
			placeholder="Search..."
			className="search"
			value={searchTerm}
			onChange={handleOnChange}
		/>
	</form> */}
				<div></div>
			</header>
			<div className="movie-container">
				{movies.length === 0
					? null
					: movies.map(movie => {
							return <Movie key={movie.id} {...movie} />;
					  })}
			</div>
		</div>
	);
};

export default WatchList;
