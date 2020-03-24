import React from "react";
import { Route } from "react-router-dom";

import PrivateRoute from "./components/PrivateRoute";
import Login from "./components/Login";
import FriendsList from "./components/FriendsList";
import "./App.css";

function App() {
	return (
		<div className="App">
			<Route path="/login">
				<Login />
			</Route>
			<PrivateRoute path="/friends">
				<FriendsList />
			</PrivateRoute>
		</div>
	);
}

export default App;
