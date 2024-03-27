import React, { useState } from 'react';
import './App.css';

function App() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    console.log('Searching for: ', searchTerm);
    // Perform search functionality with searchTerm
  };

  return (
    <div className="container">
      <div className="search-container">
        <input
          type="text"
          id="searchInput"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button type="button" id="searchButton" onClick={handleSearch}>
          Search
        </button>
      </div>
    </div>
  );
}

export default App;
