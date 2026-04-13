import { users } from "../data/users";
import type { User } from "../interfaces/User";

export const authenticate = (
  username: string,
  password: string
): User | null => {
  const user = users.find(
    (u) => u.username === username && u.password === password
  );

  return user || null;
};