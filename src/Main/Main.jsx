import "../Main/Main.scss";
import { Routes, Route } from "react-router-dom";
import Characters from "../Main/pages/Characters.jsx";
import Locations from "../Main/pages/Locations.jsx";
import Episodes from "../Main/pages/Episodes.jsx";

export default function Main() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Characters />} />
        <Route path="/locations" element={<Locations />} />
        <Route path="/episodes" element={<Episodes />} />
      </Routes>
    </main>
  );
}
