import { users } from "../data/users.js";
import type { User } from "../interfaces/User.js";
import { AddUserMetadata } from "./decorators.js";

export class UserStore {
  private data: User[];

  // Constructor: se ejecuta cuando se crea una instancia de la clase
  constructor() {
    this.data = users;
  }

  list(): User[] {
    // Simula una petición HTTP tipo GET
    console.log("GET /users");
    return this.data;
  }

  findByName(username: string): User | undefined {
    console.log(`GET /users?username=${username}`);
    // Busca el primer usuario que coincida con el username
    return this.data.find((u) => u.username === username);
  }

  /* Decorador que intercepta este método y agrega automáticamente role y createdAt */
  @AddUserMetadata
  create(user: User): User {
    console.log("POST /users");
    this.data.push(user);
    return user;
  }

  update(id: number, newData: Partial<User>): User | null {
    console.log(`PATCH /users/${id}`);
    const user = this.data.find((u) => u.id === id);

    if (!user) return null;
    // Actualiza solo las propiedades enviadas (no reemplaza todo el objeto)
    Object.assign(user, newData);
    return user;
  }

  remove(id: number): boolean {
    console.log(`DELETE /users/${id}`);
    // Busca el índice del usuario en el array
    const index = this.data.findIndex((u) => u.id === id);
    // Si no lo encuentra, retorna false
    if (index === -1) return false;

    this.data.splice(index, 1);
    return true;
  }
}
