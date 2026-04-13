// Simulación de base de datos
let users = [
  { id: 1, name: "Juan" },
  { id: 2, name: "Ana" },
];

// GET → listar usuarios
export async function GET() {
  return Response.json(users);
}

// POST → crear usuario
export async function POST(req: Request) {
  const body = await req.json();

  const newUser = {
    id: Date.now(),
    name: body.name,
  };

  users.push(newUser);

  return Response.json(newUser);
}

// PUT → actualizar usuario
export async function PUT(req: Request) {
  const body = await req.json();

  users = users.map((u) =>
    u.id === body.id ? { ...u, name: body.name } : u
  );

  return Response.json({ message: "Updated" });
}

// DELETE → eliminar usuario
export async function DELETE(req: Request) {
  const body = await req.json();

  users = users.filter((u) => u.id !== body.id);

  return Response.json({ message: "Deleted" });
}