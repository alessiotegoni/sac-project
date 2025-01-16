import { useState } from "react";
import { viaggi } from "../../../data/data";
import SearchBar from "../../SearchBar";
import TripsList from "../../trips/TripsList";

export default function HomePage() {
  const [filteredTrips, setFilteredTrips] = useState(viaggi);

  const currentDate = new Date();

  const onGoingTrips = filteredTrips.filter(
    (trip) => new Date(trip.dataInizio) < currentDate
  );

  const scheduledTrips = filteredTrips.filter(
    (trip) => new Date(trip.dataInizio) >= currentDate
  );

  return (
    <>
      <section className="mb-5">
        <div className="d-flex justify-content-between align-items-center">
          <div>
            <h1 className="mt-3">VIAGGI IN CORSO</h1>
          </div>
          <SearchBar
            label="viaggi"
            onSearch={(search) =>
              setFilteredTrips(
                viaggi.filter((viaggio) =>
                  viaggio.luogo.toLowerCase().includes(search)
                )
              )
            }
          />
        </div>
        <TripsList list={onGoingTrips} />
      </section>

      <section className="mb-5">
        <h1 className="mt-3">I PROSSIMI VIAGGI</h1>
        <TripsList list={scheduledTrips} />
      </section>
    </>
  );
}
