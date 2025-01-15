import { Link } from 'react-router';

export default function Trip({ viaggi }) {
    const { luogo, dataInizio, dataFine, id } = viaggi;
    return (
        <>
            <section className="card p-4 w-75 d-flex justify-center m-4">
                <div className="card-body">
                    <h1 className="card-title">{luogo}</h1>
                    <p className="card-text">
                        <strong>Data partenza:</strong>
                        {dataInizio}
                    </p>
                    <p className="card-text">
                        <strong>Data ritorno:</strong>
                        {dataFine}
                    </p>
                </div>
                <hr />
                <div>
                    <Link to={`/trip/${id}`}>
                        <button className="btn btn-primary m-2">
                            Dettagli
                        </button>
                    </Link>
                </div>
            </section>
        </>
    );
}
