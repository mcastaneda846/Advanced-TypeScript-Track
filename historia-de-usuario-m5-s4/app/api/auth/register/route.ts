import { pool } from '../../../lib/db';

export async function POST(req: Request): Promise<Response> {
  try {
    const body = await req.json();
    const { email, password }: { email: string; password: string } = body;

    await pool.query(
      'INSERT INTO usuarios (email, password) VALUES ($1, $2)',
      [email, password]
    );

    return Response.json({ message: 'Usuario creado' });

  } catch (error: any) {
    console.error(error); // para debug
 
    // error de duplicado en postgres
    if (error.code === '23505') {
      return Response.json(
        { error: 'Usuario ya existe' },
        { status: 409 }
      );
    }

    return Response.json(
      { error: 'Error en servidor' },
      { status: 500 }
    );
  }
}