import create from "zustand";
import produce from "immer";
import { persist } from "zustand/middleware";

const useStore = create(
	persist(set => {
		return {
			movies: [null],
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
		};
	})
);

export default useStore;
