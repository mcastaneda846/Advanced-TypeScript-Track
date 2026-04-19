import { pool } from '../../../lib/db';

export async function GET(): Promise<Response> {
  const result = await pool.query('SELECT COUNT(*) FROM usuarios');
  // Cuenta usuarios

  return Response.json({
    count: Number(result.rows[0].count),
  });
}