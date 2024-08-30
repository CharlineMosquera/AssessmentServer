// Task 3: addUser(first_name, last_name, email)
import { getServerURL } from "./task1.js";

export async function addUser(first_name, last_name, email) {

  const currentUsers = await fetch(`${getServerURL()}/users`)
  const currentUsersObj = await currentUsers.json();
  const len = Object.keys(currentUsersObj).length
  const newId = len + 1

  const response = await fetch(`${getServerURL()}/users`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
    },
    body: JSON.stringify({
      id: newId,
      first_name: first_name,
      last_name: last_name,
      email: email,
    }),
  });
  const newUser = await response.json();
  return console.log(JSON.parse(JSON.stringify(newUser, null, 2)));
}
