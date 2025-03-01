"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Image from "next/image";

async function getBoss(id: string) {
  const res = await fetch(`https://eldenring.fanapis.com/api/bosses/${id}`);
  const data = await res.json();
  return data.data;
}

export default function BossPage() {
  const params = useParams();
  const [boss, setBoss] = useState<any>(null);
  const router = useRouter();

  useEffect(() => {
    async function fetchData() {
      if (typeof params.id === "string") {
        const data = await getBoss(params.id);
        setBoss(data);
      }
    }
    fetchData();
  }, [params.id]);

  if (!boss) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <button
        onClick={() => router.push("/bosses")}
        className="bg-amber-50 text-white p-2 rounded-md"
      >
      <Image src="/back-arrow-icon.png" alt="Back" width={30} height={30} />
      </button>
      <div className= "bg-gray-800 rounded-lg shadow-md container mx-auto">
      <h1 className="text-4xl font-bold mb-6 mt-6 text-center ">{boss.name}</h1>
      </div>
      <div className="container mx-auto">
        <div
          key={boss.id}
          className="bg-gray-800 text-white p-4 rounded-lg shadow-md"
        >
          <img
            src={boss.image}
            alt={boss.name}
            className="w-100 h-100 object-cover rounded-md"
          />
          <p className="text-sm mt-1">{boss.description}</p>
        </div>
      </div>
    </div>
  );
}
