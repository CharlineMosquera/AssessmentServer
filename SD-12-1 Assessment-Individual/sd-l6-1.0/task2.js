// Task 2: listUsers()
import { getServerURL } from "./task1.js";

export async function listUsers() {
  const response = await fetch(`${getServerURL()}/users`, {
    method: "GET", // Metodo HTTP
  });
  const users = await response.json(); // Convierte la respuesta en un objeto de JS
  const formattedUsers = users
    .map((user) => { // Para aplicar un formato a cada usuario
      return `{
  id: ${user.id},
  first_name: '${user.first_name}',
  last_name: '${user.last_name}',
  email: '${user.email}'
}`;
    })
    .join(",\n");
  console.log(`[\n${formattedUsers}\n]`);
  return formattedUsers;
}