import { pool } from "../../../lib/db";

export async function POST(req: Request): Promise<Response> {
  const body = await req.json();

  const { email, password }: { email: string; password: string } = body;

  const result = await pool.query(
    "SELECT * FROM usuarios WHERE email = $1 AND password = $2",
    [email, password],
  );
  // Busca usuario en DB

  if (result.rows.length === 0) {
    return Response.json({ error: "Credenciales inválidas" }, { status: 401 });
  }

  return Response.json({ message: "Login exitoso" });
}
