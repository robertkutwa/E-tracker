export default function SearchBar({ searchTerm, setSearchTerm }) {
    return (
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search expenses..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
    )
  }