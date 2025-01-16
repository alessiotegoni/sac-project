export default function User({ partecipante }) {
  return (
    <div className="col">
      <div className="card h-100">
        <div className="card-header">
          <h5 className="card-title mb-0">
            {partecipante.nome} {partecipante.cognome}
          </h5>
        </div>
        <div className="card-body">
          <div className="mb-2">
            <strong>Email:</strong> {partecipante.email}
          </div>
          <div className="mb-2">
            <strong>Telefono:</strong> {partecipante.cellulare}
          </div>
          <div className="mb-2">
            <strong>Telefono aggiuntivo:</strong>{" "}
            {partecipante.telefonoAggiuntivo}
          </div>
          <div className="mb-2">
            <strong>Contatto di emergenza:</strong>{" "}
            {partecipante.contattoEmergenza.nome} (
            {partecipante.contattoEmergenza.telefono})
          </div>
        </div>
      </div>
    </div>
  );
}
