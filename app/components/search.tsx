"use client";

interface SearchProps {
  searchQuery: string;
  setSearchQuery: (newSearchQuery: string) => void;
  onSearch: () => void;
}

export default function Search({setSearchQuery, onSearch }: SearchProps) {
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      onSearch();
    }
  };
  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        className="text-2xl bg-gray-800 rounded-lg ml-5 mb-3 focus:outline-none focus-border-blue-500"
        onChange={(e) => setSearchQuery(e.target.value)}
        onKeyDown={handleKeyDown}
      ></input>
    </div>
  );
}
