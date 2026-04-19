import { pool } from '../../lib/db';

export async function GET(): Promise<Response> {
  try {
    const result = await pool.query('SELECT * FROM productos');

    return Response.json(result.rows);

  } catch (error) {
    console.error(error);

    return Response.json(
      { error: 'Error al obtener productos' },
      { status: 500 }
    );
  }
}