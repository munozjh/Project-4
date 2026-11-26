function FilterBar({ filter, setFilter, searchQuery, setSearchQuery }) {
  const filterOptions = ['All', 'Active', 'Completed'];

  return (
    <div className="filter-bar">
      {/* Search input to filter tasks by text */}
      <input
        type="text"
        className="search-input"
        placeholder="Search tasks..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        aria-label="Search tasks"
      />

      {/* Filter buttons rendered dynamically */}
      <div className="filter-buttons">
        {filterOptions.map((option) => (
          <button
            key={option}
            className={filter === option ? 'filter-btn active' : 'filter-btn'}
            onClick={() => setFilter(option)}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}

export default FilterBar;