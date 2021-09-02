import React, { useState } from 'react';
import { ChatEngine, getOrCreateChat } from 'react-chat-engine';
import { useSelector } from 'react-redux';

export default () => {
const AUTH = useSelector(state => state.firebase);
const [username, setUsername] = useState('');
const creds = { "User-Name": AUTH.user.email,
"User-Secret": 'password',
"Project-ID":'e6a6129a-384a-41b7-a0bc-39a6011f20d8',
};

function createDirectChat(creds) {
  getOrCreateChat(
    creds,
    { is_direct_chat: true, usernames: [username] },
    () => setUsername('')
  )
}

function renderChatForm(creds) {
  return (
    <div>
      <input
        placeholder='Username'
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button onClick={() => createDirectChat(creds)}>
        Create
      </button>
    </div>
  )
}

  return (
    <ChatEngine
			height='100vh'
			userName={AUTH.user.email}
			userSecret='password'
			projectID='e6a6129a-384a-41b7-a0bc-39a6011f20d8'
      renderNewChatForm={(creds) => renderChatForm(creds)}
		/>
  )
}
