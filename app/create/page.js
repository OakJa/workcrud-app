
"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Create() {
  const [name, setName] = useState("");
  const [studentId, setStudentId] = useState("");
  const router = useRouter();

  const save = async () => {
    await fetch("/api/students", {
      method: "POST",
      body: JSON.stringify({ name, studentId }),
    });
    router.push("/");
  };

  return (
    <div>
      <h1>Add</h1>
      <input onChange={e=>setName(e.target.value)} placeholder="name"/>
      <input onChange={e=>setStudentId(e.target.value)} placeholder="studentId"/>
      <button onClick={save}>Save</button>
    </div>
  );
}
