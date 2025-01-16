import User from "./User";

export default function UsersList({ list, filteredList }) {
  return (
    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 mb-4">
      {(filteredList.length ? filteredList : list).map((partecipante) => (
        <User key={partecipante.id} partecipante={partecipante} />
      ))}
    </div>
  );
}
