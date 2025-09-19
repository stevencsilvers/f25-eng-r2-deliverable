"use client";

import type { Database } from "@/lib/schema";
type User = Database["public"]["Tables"]["profiles"]["Row"];

interface UserCardProps {
  user: User;
  sessionId: string;
}

export default function UserCard({ user, sessionId }: UserCardProps) {
  return (
    <div className="m-2 flex w-full flex-col rounded border-2 p-4 shadow">
      <h3 className="text-2xl font-semibold">
        {user.display_name}
        <span className="text-green-400">{sessionId === user.id ? " (you)" : ""}</span>
      </h3>
      <h4 className="text-lg font-light italic">{user.email}</h4>
      <p>{user.biography ? user.biography : ""}</p>
    </div>
  );
}
