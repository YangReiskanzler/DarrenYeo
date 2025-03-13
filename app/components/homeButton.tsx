'use client';

import { useRouter } from "next/navigation";

export default function HomeButton() {
    const router = useRouter();
    return (
        <div>
        <button
            onClick={() => router.push("/")}
            className="bg-blue-500 text-white p-2 rounded-md ml-7 mt-3"
        >
            Go Home
        </button>
        </div>
    );
}