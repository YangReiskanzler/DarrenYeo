"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Pagination from "../components/pagination";
import Search from "../components/search";

interface Boss {
    id: string;
    name: string;
    description: string;
    location: string;
    drops: string;
    healthPoints: number;
    image: string;
}

export default function Bosses() {
  const [bosses, setBosses] = useState<Boss[]>([]);
  const [page, setPage] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(
        `https://eldenring.fanapis.com/api/bosses?limit=15&page=${page}`
      );
      const data = await res.json();
      setBosses(data.data);
    }
    fetchData();
  }, [page]);

  const handleSearch = async () => {
    const res = await fetch(
      `https://eldenring.fanapis.com/api/bosses?limit=15w&name=${searchQuery}`
    );
    const data = await res.json();
    setBosses(data.data);
  };

  return (
    <div>
      <div className="mt-4">
        <Search
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          onSearch={handleSearch}
        />
      </div>
      <h1 className="text-4xl font-bold flex flex-row items-center justify-center text-center mb-2  ">
        Elden Ring Bosses
      </h1>

      <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
        {bosses.map((boss: Boss) => (
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
