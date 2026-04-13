import { getUsers, createUser, updateUser, deleteUser } from "./api.js";

async function test() {
  console.log("GET : ", await getUsers());

  const newUser = await createUser("Pedro");
  console.log("POST: ", newUser);
  console.log("GET : ", await getUsers());

  const updated = await updateUser(newUser.id, "Pedro Updated");
  console.log("PUT: ", updated);
  console.log("GET : ", await getUsers());

  const deleted = await deleteUser(newUser.id);
  console.log("DELETE: ", deleted);

  console.log("FINAL: ", await getUsers());

  const newUser1 = await createUser("Maribel"); // Se ve reflejado en el backend
}

test();
