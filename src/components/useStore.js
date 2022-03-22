import create from "zustand";
import produce from "immer";

const useStore = create(set => {
	return {
		movies: [{ id: "" }],
		addMovie: id => {
			set(
				produce(state => {
					state.movies.push({ id: id });
				})
			);
		},
	};
});

export default useStore;
