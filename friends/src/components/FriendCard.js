import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPen } from "@fortawesome/free-solid-svg-icons";

const FriendCard = ({ friend, handleDelete }) => {
	return (
		<div className="friend-card">
			<FontAwesomeIcon icon={faPen} />
			<FontAwesomeIcon icon={faTrash} onClick={() => handleDelete(friend.id)} />
			<h2>{friend.name}</h2>
			<p>Age: {friend.age}</p>
			<p>Email: {friend.email}</p>
		</div>
	);
};

export default FriendCard;
