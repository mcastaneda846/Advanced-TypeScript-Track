import { User } from "../interfaces/interfaces";

interface UserCardProps {
  user: User;
}

export const UserCard = ({ user }: UserCardProps) => {
  return (
    <div>
      <h3>{user.fullName}</h3>
      <p>{user.email}</p>
      <p>Role: {user.role}</p>
    </div>
  );
};