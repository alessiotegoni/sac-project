import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router";
import "bootstrap/dist/css/bootstrap.min.css";
import DefaultLayout from "./components/_root/layouts/DefaultLayout";
import HomePage from "./components/_root/pages/HomePage";
import TripDetailPage from "./components/_root/pages/TripDetailPage";
import PartecipantsPage from "./components/_root/pages/PartecipantsPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route index element={<HomePage />} />
          <Route path="trip/:id" element={<TripDetailPage />} />
          <Route path="partecipants" element={<PartecipantsPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
