const BASE_URL = "http://localhost:3000/api/users";

// GET
export async function getUsers() {
  const res = await fetch(BASE_URL);
  return res.json();
}

// POST
export async function createUser(name: string) {
  const res = await fetch(BASE_URL, {
    method: "POST",
    body: JSON.stringify({ name }),
  });

  return res.json();
}

// PUT
export async function updateUser(id: number, name: string) {
  const res = await fetch(BASE_URL, {
    method: "PUT",
    body: JSON.stringify({ id, name }),
  });

  return res.json();
}

// DELETE
export async function deleteUser(id: number) {
  const res = await fetch(BASE_URL, {
    method: "DELETE",
    body: JSON.stringify({ id }),
  });

  return res.json();
}