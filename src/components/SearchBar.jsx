export default function SearchBar({ label, onSearch }) {
  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const search = formData.get("search");

    onSearch(search.toLowerCase());
  };

  return (
    <form className="d-flex" onSubmit={handleSubmit}>
      <input
        type="text"
        className="form-control me-2"
        placeholder={`Cerca ${label}...`}
        name="search"
      />
      <button className="btn btn-primary" type="submit">
        Cerca
      </button>
      <button className="btn btn-danger ms-2" type="reset" onClick={() => onSearch("")}>
        Reset
      </button>
    </form>
  );
}
