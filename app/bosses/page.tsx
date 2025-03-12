"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Pagination from "../components/pagination";
import Search from "../components/search";

export default function bosses() {
  const [bosses, setBosses] = useState<any[]>([]);
  const [page, setPage] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(
        `https://eldenring.fanapis.com/api/bosses?limit=18&page=${page}`
      );
      const data = await res.json();
      setBosses(data.data);
    }
    fetchData();
  }, [page]);

  const filteredBosses = bosses.filter((boss) =>
    boss.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <h1 className="text-4xl font-bold mb-4 mt-4 rounded-lg shadow-md flex flex-row mx-auto text-center gap-16">
        <Search searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        Elden Ring Bosses
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {filteredBosses.map((boss: any) => (
          <div
            key={boss.id}
            className="bg-black/80 border-2 border-gray-700 ml-1 mr-1 text-white p-2 rounded-lg shadow-md text-center"
          >
            <Link href={`/bosses/${boss.id}`} className="hover:text-blue-500">
              <img
                src={boss.image}
                alt={boss.name}
                className="w-full h-40 object-cover rounded-md"
              />
              <h2 className="text-xl font-semibold mt-2">{boss.name}</h2>
            </Link>
          </div>
        ))}
      </div>
      <Pagination page={page} setPage={setPage} />
    </div>
  );
}
