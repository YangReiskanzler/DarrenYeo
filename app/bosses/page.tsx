'use client'

import {useState, useEffect} from "react";
import Link from "next/link";

export default function bosses() {
    const [bosses, setBosses] = useState<any[]>([]);

    useEffect(() => {
        async function fetchData() {
            const res = await fetch(`https://eldenring.fanapis.com/api/bosses`);
            const data = await res.json();
            setBosses(data.data);
        }
        fetchData();
    }, []);

    return (
      <div>
        <h1 className="text-4xl font-bold mb-6">Elden Ring Bosses</h1>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {bosses.map((boss: any) => (
            <div key={boss.id} className="bg-gray-800 text-white p-4 rounded-lg shadow-md">
                <Link href={`/bosses/${boss.id}`} className= "hover:text-blue-500">
                <img src={boss.image} alt={boss.name} className="w-full h-40 object-cover rounded-md" />
              <h2 className="text-xl font-semibold mt-2">{boss.name}</h2>
              </Link>
            </div>
          ))}
        </div>
      </div>
    );
}