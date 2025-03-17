"use client";
import Card from "@/components/card";
import { useEffect, useState } from "react";

export default async function ProjectList() {
  const [repos, setRepos] = useState([]);
  useEffect(() => {
    fetch("/repos.json") // Fetch from public folder
      .then((res) => res.json())
      .then((data) => setRepos(data));
  }, []);

  return (
    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {repos.map((repo) => (
        <li key={repo.id} className="mb-4">
          <Card className="font-mono h-full">
            <div className="flex justify-between items-center mb-4">
              <div className="font-semibold">{repo.name}</div>
              <div>🌟{repo.stargazers_count}</div>
            </div>

            <div>{repo.description}</div>
          </Card>
        </li>
      ))}
    </ul>
  );
}

