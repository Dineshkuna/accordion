import React, { useState, useEffect } from "react";
import "./Autocomplete.css";

const Autocomplete = ({ fetchSuggestions }) => {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handler = setTimeout(() => {
      if (query.trim() === "") {
        setSuggestions([]);
        return;
      }

      setLoading(true);

      // Fetch suggestions
      fetchSuggestions(query)
        .then((results) => setSuggestions(results))
        .finally(() => setLoading(false));
    }, 300); // 300ms debounce delay

    return () => clearTimeout(handler); // Cleanup on query change
  }, [query, fetchSuggestions]);

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const highlightText = (text, query) => {
    const regex = new RegExp(`(${query})`, "gi");
    return text.replace(regex, `<span class="highlight">$1</span>`);
  };

  return (
    <div className="autocomplete-container">
      <input
        type="text"
        className="autocomplete-input"
        placeholder="Search..."
        value={query}
        onChange={handleChange}
      />
      {loading && <div className="loading">Loading...</div>}
      <ul className="suggestions-list">
        {suggestions.map((suggestion, index) => (
          <li
            key={index}
            className="suggestion-item"
            dangerouslySetInnerHTML={{
              __html: highlightText(suggestion, query),
            }}
          ></li>
        ))}
      </ul>
    </div>
  );
};

export default Autocomplete;
