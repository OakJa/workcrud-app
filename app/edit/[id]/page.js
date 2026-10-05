
"use client";
import { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";

export default function Edit() {
  const [name, setName] = useState("");
  const [studentId, setStudentId] = useState("");
  const router = useRouter();
  const params = useParams();

  useEffect(() => {
    fetch("/api/students")
      .then(r=>r.json())
      .then(d=>{
        const s = d.find(x=>x.id == params.id);
        if(s){
          setName(s.name);
          setStudentId(s.studentId);
        }
      });
  }, []);

  const update = async () => {
    await fetch("/api/students", {
      method: "PUT",
      body: JSON.stringify({
        id: Number(params.id),
        name,
        studentId
      }),
    });
    router.push("/");
  };

  return (
    <div>
      <h1>Edit</h1>
      <input value={name} onChange={e=>setName(e.target.value)}/>
      <input value={studentId} onChange={e=>setStudentId(e.target.value)}/>
      <button onClick={update}>Update</button>
    </div>
  );
}
