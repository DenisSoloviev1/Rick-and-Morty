import "../Main/Main.scss";
import { Routes, Route } from "react-router-dom";
import Characters from "./pages/Characters/Characters.jsx";
import CharactersDetails from "./pages/Characters/CharactersDetails.jsx";
import Locations from "./pages/Locations/Locations.jsx";
import LocationsDetails from "./pages/Locations/LocationsDetails.jsx";
import Episodes from "./pages/Episodes/Episodes.jsx";
import EpisodesDetails from "./pages/Episodes/EpisodesDetails.jsx";


export default function Main() {
  return (
    <main>
      <Routes>
        <Route path="/characters" element={<Characters />} />
        <Route path="/сharactersDetails" element={<CharactersDetails />} />
        <Route path="/locations" element={<Locations />} />
        <Route path="/locationsDetails" element={<LocationsDetails />} />
        <Route path="/episodes" element={<Episodes />} />
        <Route path="/episodesDetails" element={<EpisodesDetails />} />
      </Routes>
    </main>
  );
}
