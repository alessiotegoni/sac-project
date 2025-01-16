import { Link } from "react-router";
import { formatData } from "../../lib/utils";

export default function Trip({ viaggi, showDetail = true }) {
  const { luogo, dataInizio, dataFine, id } = viaggi;
  return (
    <div className="col">
      <div className="card p-4 d-flex justify-center">
        <div className="card-body">
          <h1 className="card-title">{luogo}</h1>
          <p className="card-text mb-2">
            <strong className="me-2">Data partenza:</strong>
            {formatData(dataInizio)}
          </p>
          <p className="card-text">
            <strong className="me-2">Data ritorno:</strong>
            {formatData(dataFine)}
          </p>
        </div>
        {showDetail && (
          <>
            <hr />
            <div>
              <Link to={`/trip/${id}`}>
                <button className="btn btn-primary m-2">Dettagli</button>
              </Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
