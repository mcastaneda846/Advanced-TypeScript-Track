export interface Usuario {
  id?: number;
  email: string;
  password: string;
}

export interface Producto {
  id?: number;
  nombre: string;
  precio: number;
  usuario_id?: number;
}