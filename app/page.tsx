// app/page.tsx
import { getUsers } from "./actions";

export default async function Home() {
  const users = await getUsers();

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">👥 User List</h1>
      <ul className="space-y-2">
        {users.map((user: any) => (
          <li key={user.id} className="bg-gray-100 p-2 rounded">
            <strong>{user.name}</strong> - {user.email}
          </li>
        ))}
      </ul>
    </main>
  );
}