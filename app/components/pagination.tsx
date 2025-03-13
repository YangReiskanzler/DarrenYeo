"use client";

import Image from "next/image";

interface PaginationProps {
  page: number;
  setPage: (newPage: number) => void;
}

export default function Pagination({ page, setPage }: PaginationProps) {
  return (
    <div className=" flex flex-row justify-center mt-10 mb-10 gap-4">
      <button
        onClick={() => setPage(page - 1)}
        disabled={page === 0}
        className="flex px-4 py-2 bg-white rounded hover:bg-blue-500 disabled:bg-gray-400"
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
        disabled={page === 5}
        className="flex px-4 py-2 bg-white rounded hover:bg-blue-500 disabled:bg-gray-400"
      >
        <Image src="/front-arrow-icon.png" alt="Next" width={24} height={24} />
      </button>
    </div>
  );
}
