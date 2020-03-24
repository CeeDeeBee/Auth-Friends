import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
	return (
		<nav>
			<Link to="/friends">Friends</Link>
			<Link to="/add">Add Friend</Link>
		</nav>
	);
};

export default Navigation;
