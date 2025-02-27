'use client';

import { useState, useEffect, useCallback } from 'react';
interface SearchResult {
    id: number;
    title: string;
  }
export default function Search() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);

  // Using useCallback to prevent unnecessary re-creations
  const fetchResults = useCallback(async (q: string) => {
    if (q.trim() === '') {
      setResults([]);
      return;
    }
    try {
      const res = await fetch(`/api/search?q=${q}`);
      const data = await res.json();
      setResults(data);
    } catch (error) {
      console.error('Search error:', error);
    }
  }, []);

  // Debounce the search query
  useEffect(() => {
    const handler = setTimeout(() => {
      fetchResults(query);
    }, 300);
    return () => clearTimeout(handler);
  }, [query, fetchResults]);

  return (
    <div className="max-w-xl mx-auto p-4">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search..."
        className="w-full p-2 border border-gray-300 rounded shadow focus:outline-none focus:ring focus:border-blue-300"
      />
      {results.length > 0 && (
        <ul className="mt-4 border border-gray-200 rounded divide-y divide-gray-200">
          {results.map(item => (
            <li key={item.id} className="p-2 hover:bg-gray-100">
              {item.title}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
