import { createChatUser } from './previousSnippet';

let newUsers = [];
let failedUsers = [];
const users = getMyUsers();

users.map(user => {
	response = createChatUser(user);
	if (response.status_code === 201) {
		newUsers.push(response.data);
	} else {
		failedUsers.push(response.data);
	}
});

console.log('New users', newUsers);
console.log('Failed users', failedUsers);