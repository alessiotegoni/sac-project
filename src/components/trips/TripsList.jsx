import Trip from "./Trip";

export default function TripsList({ list }) {
  return list.length ? (
    <>
      <p>Seleziona uno dei seguenti viaggi</p>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {list.map((viaggio) => (
          <Trip key={viaggio.id} viaggi={viaggio} />
        ))}
      </div>
    </>
  ) : (
    <p>Non ci sono viaggi</p>
  );
}
