import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import MoonLoader from "react-spinners/MoonLoader";

import FriendCard from "./FriendCard";

const FriendsList = () => {
	const [friends, setFriends] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState("");

	useEffect(() => {
		setIsLoading(true);
		setError("");
		axiosWithAuth()
			.get("/api/friends")
			.then(res => {
				setIsLoading(false);
				setFriends(res.data);
			})
			.catch(err => {
				setIsLoading(false);
				setError(`Error: ${err.response.status} ${err.response.statusText}`);
			});
	}, []);

	const handleDelete = id => {
		axiosWithAuth()
			.delete(`/api/friends/${id}`)
			.then(res => {
				console.log(res);
				setFriends(res.data);
			})
			.catch(err =>
				setError(`Error: ${err.response.status} ${err.response.statusText}`)
			);
	};

	return (
		<div className="friends-list">
			{isLoading && (
				<div className="loading">
					<h2>Loading Friends...</h2>
					<MoonLoader size={80} />
				</div>
			)}
			{!isLoading && error && <div className="error">{error}</div>}
			{!isLoading &&
				!error &&
				friends.map(friend => (
					<FriendCard
						key={friend.id}
						friend={friend}
						handleDelete={handleDelete}
					/>
				))}
		</div>
	);
};

export default FriendsList;
