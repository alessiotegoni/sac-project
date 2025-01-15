import { useParams } from 'react-router';
import viaggi from '../data/data';
import User from '../components/User';
import Trip from '../components/Trip';

export default function TripDetail() {
    const { id } = useParams();
    console.log(viaggi[id].partecipanti);

    return (
        <>
            <div>
                <Trip viaggi={viaggi[id]}></Trip>
            </div>
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
                {viaggi[id].partecipanti.map((partecipante) => {
                    console.log(partecipante);
                    return (
                        <div key={partecipante.id} className="col">
                            <User partecipante={partecipante} />
                        </div>
                    );
                })}
            </div>
        </>
    );
}
