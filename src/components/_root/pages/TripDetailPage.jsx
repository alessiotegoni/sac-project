import { useParams } from "react-router";
import User from "../../partecipants/User";
import Trip from "../../trips/Trip";
import { viaggi } from "../../../data/data";
import SearchBar from "../../SearchBar";
import { useState } from "react";
import UsersList from "../../partecipants/UsersList";

export default function TripDetailPage() {
  const { id } = useParams();
  const [filteredPartecipants, setFilteredPartecipants] = useState([]);

  const viaggio = viaggi.find((viaggio) => viaggio.id === parseInt(id));

  const tripPartecipants = viaggio.partecipanti;

  return (
    <>
      <section>
        <h1 className="my-4">Dettagli viaggio</h1>
        <Trip viaggi={viaggio} showDetail={false} />
      </section>

      <section>
        <div className="d-flex justify-content-between align-items-center">
          <div>
            <h1 className="my-4">Dettagli partecipanti</h1>
          </div>
          <SearchBar
            label="partecipanti"
            onSearch={(search) =>
              setFilteredPartecipants(
                tripPartecipants.filter(
                  (tp) =>
                    `${tp.nome.toLowerCase()} ${tp.cognome.toLowerCase()}`.includes(
                      search
                    ) || tp.email.toLowerCase().includes(search)
                )
              )
            }
          />
        </div>
        <UsersList
          list={tripPartecipants}
          filteredList={filteredPartecipants}
        />
      </section>
    </>
  );
}
