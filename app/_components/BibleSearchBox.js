"use client";
import { memo, useState, useMemo, useEffect, useCallback } from "react";
import debounce from "lodash.debounce";
import { searchBible } from "../_lib/searchBible";

function BibleSearchBox({ bibleData, onSearchActive }) {
  const [results, setResults] = useState([]);
  const [query, setQuery] = useState("");

  // Execution search with momize
  const executeSearch = useCallback(
    (value) => {
      if (value.trim().length <= 1) {
        setResults([]);
        return;
      }

      const matches = searchBible(bibleData, value);
      setResults(matches);
    },
    [bibleData]
  );

  //Debounce Search
  const debouncedSearch = useMemo(
    () => debounce(executeSearch, 500),
    [executeSearch]
  );

  // Clean up debounce Search
  useEffect(() => {
    return () => debouncedSearch.cancel();
  }, [debouncedSearch]);

  const handleSearch = (e) => {
    const value = e.target.value;
    setQuery(value);

    // Update parent immediately
    onSearchActive(value.trim().length > 1);

    // Heavy task (debounced)
    debouncedSearch(value);
  };

  return (
    <div className="mt-6 ">
      <input
        type="text"
        placeholder="Search Bible (e.g. 'faith', 'Jesus', 'love')"
        className="w-full p-2 border rounded-lg"
        value={query}
        onChange={handleSearch}
      />

      {results.length > 0 && (
        <div className="mt-4 bg-white border rounded-lg p-3 max-h-64 overflow-auto">
          {results.map((v, i) => (
            <div key={i} className="p-2 border-b">
              <strong>
                {v.book} {v.chapter}:{v.verse}
              </strong>
              <p>{v.text}</p>
            </div>
          ))}
          <p className="text-sm mt-3 text-gray-500">
            {results.length} result(s) found
          </p>
        </div>
      )}

      {query.length > 1 && results.length === 0 && (
        <p className="mt-4 text-gray-500">No results found.</p>
      )}
    </div>
  );
}

export default memo(BibleSearchBox);
