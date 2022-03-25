import create from "zustand";
import produce from "immer";
import { persist } from "zustand/middleware";

const useStore = create(
	persist(set => {
		return {
			movies: [{ id: "", title: "", poster_path: "", vote_average: "", overview: "" }],
			addMovie: (id, title, poster_path, vote_average, overview) => {
				set(
					produce(state => {
						state.movies.push({
							id: id,
							title: title,
							poster_path: poster_path,
							vote_average: vote_average,
							overview: overview,
						});
					})
				);
			},
			deleteMovie: index => {
				set(
					produce(state => {
						// state.movies.filter(movie => movie.id === id);

						// state.movies.splice(id === id, 1);
						state.movies.splice(index, 1);
					})
				);
			},
		};
	})
);

export default useStore;
