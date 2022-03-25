import React from "react";

import Home from "./Home";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import WatchList from "./WatchList";

const App = () => {
	return (
		<Router>
			<Switch>
				<Route exact path="/">
					<Home />
				</Route>
				<Route exact path="/watchlist">
					<WatchList />
				</Route>
			</Switch>
		</Router>
	);
};

export default App;

// https://api.themoviedb.org/3/movie/550?api_key=4d7acc0cb3eb815dee451805a333e105
// 4d7acc0cb3eb815dee451805a333e105
