import { useState } from "react";
import { viaggi } from "../../../data/data";
import SearchBar from "../../SearchBar";
import UsersList from "../../partecipants/UsersList";

export default function PartecipantsPage() {
  const [filteredPartecipants, setFilteredPartecipants] = useState([]);

  const partecipants = viaggi.map((viaggio) => viaggio.partecipanti).flat();

  return (
    <>
      <div className="d-flex justify-content-between align-items-center">
        <h1 className="mt-5 mb-3">Partecipanti</h1>
        <SearchBar
          label="partecipanti"
          onSearch={(search) =>
            setFilteredPartecipants(
              partecipants.filter(
                (tp) =>
                  `${tp.nome.toLowerCase()} ${tp.cognome.toLowerCase()}`.includes(
                    search
                  ) || tp.email.toLowerCase().includes(search)
              )
            )
          }
        />
      </div>
      <UsersList list={partecipants} filteredList={filteredPartecipants} />
    </>
  );
}
