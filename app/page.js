
"use client";
import { useEffect, useState } from "react";

export default function Home() {
  const [students, setStudents] = useState([]);

  const load = async () => {
    const res = await fetch("/api/students");
    setStudents(await res.json());
  };

  const del = async (id) => {
    await fetch("/api/students", {
      method: "DELETE",
      body: JSON.stringify({ id }),
    });
    load();
  };

  useEffect(() => { load(); }, []);

  return (
    <div>
      <h1>Students</h1>
      <a href="/create">Add</a>
      {students.map(s => (
        <div key={s.id}>
          {s.name} ({s.studentId})
          <a href={`/edit/${s.id}`}>Edit</a>
          <button onClick={() => del(s.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}
