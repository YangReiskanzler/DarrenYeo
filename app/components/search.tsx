"use client";

interface SearchProps {
  searchQuery: string;
  setSearchQuery: (newSearchQuery: string) => void;
}

export default function Search({ searchQuery, setSearchQuery }: SearchProps) {
  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        value={searchQuery}
        className="text-2xl bg-gray-800 rounded-lg ml-5 mb-3 focus:outline-none focus-border-blue-500"
        onChange={(e) => setSearchQuery(e.target.value)}
      ></input>
    </div>
  );
}
