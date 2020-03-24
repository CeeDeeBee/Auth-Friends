import React from "react";
import { Route } from "react-router-dom";

import PrivateRoute from "./components/PrivateRoute";
import Login from "./components/Login";
import Navigation from "./components/Navigation";
import FriendsList from "./components/FriendsList";
import AddFriend from "./components/AddFriend";
import "./App.css";

function App() {
	return (
		<div className="App">
			<Route path="/login">
				<Login />
			</Route>
			<PrivateRoute path="/friends">
				<Navigation />
				<FriendsList />
			</PrivateRoute>
			<PrivateRoute path="/add">
				<Navigation />
				<AddFriend />
			</PrivateRoute>
		</div>
	);
}

export default App;
