import React from 'react';
import { ChatEngine } from 'react-chat-engine';
import { useSelector } from 'react-redux';


function Chat() {
	const AUTH = JSON.parse(localStorage.getItem('profile'));
	return (
		<ChatEngine
			height='100vh'
			userName={AUTH.user.email}
			userSecret='password'
			projectID='e6a6129a-384a-41b7-a0bc-39a6011f20d8'
		/>
	);
}

export default Chat;