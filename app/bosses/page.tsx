"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function bosses() {
  const [bosses, setBosses] = useState<any[]>([]);
  const [page, setPage] = useState(0);

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

  return (
    <div>
      <h1 className="text-4xl font-bold mb-4 mt-4 rounded-lg shadow-md flex flex-col mx-auto text-center">
        Elden Ring Bosses
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {bosses.map((boss: any) => (
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
      <div className="flex flex-row justify-center mt-15 gap-4">
        <button
          onClick={() => setPage(page - 1)}
          disabled={page === 0}
          className="flex px-4 py-2 bg-white  rounded hover:bg-blue-500 disabled:bg-gray-400"
        >
          <Image
            src="/back-arrow-icon.png"
            alt="Previous"
            width={24}
            height={24}
          />
        </button>
        <button
          onClick={() => setPage(page + 1)}
          className="flex px-4 py-2 bg-white  rounded hover:bg-blue-500 disabled:bg-gray-400"
        >
          <Image
            src="/front-arrow-icon.png"
            alt="Next"
            width={24}
            height={24}
          />
        </button>
      </div>
    </div>
  );
}
