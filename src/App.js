import React from "react";
import Films from "./pages/Films";
import Film from "./pages/Film";
import wallPaper from "./images/home-bgs/star-wars-wallpaper.png";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import People from "./pages/People";
import Planets from "./pages/Planets";
import Planet from "./pages/Planet";
import Species from "./pages/Species";
import SingSpecies from "./pages/SingSpecies";
import Starships from "./pages/Starships";
import Vehicles from "./pages/Vehicles";
import Person from "./pages/Person";
import Starship from "./pages/Starship";
import Vehicle from "./pages/Vehicle";

function App() {
  return (
    <div className="relative flex flex-col justify-between min-h-[100vh] w-full bg-gradient-to-br from-gray-800 to-gray-400">
      {/* set up background-image here so we can add overlay with parent div */}
      {/* gives texts a cool overlay effect as well that is fun to play around with */}
      <img
        className="w-full h-full overflow-hidden fixed object-cover object-center mix-blend-overlay"
        src={wallPaper}
        alt="background"
      />

      <BrowserRouter>
        <Routes>
          <Route index exact path="/" element={<Home />} />
          <Route path="/films" element={<Films />}></Route>
          <Route path="/film" element={<Film />}></Route>
          <Route path="/people" element={<People />}></Route>
          <Route path="/person" element={<Person />}></Route>
          <Route path="/planets" element={<Planets />}></Route>
          <Route path="/planet" element={<Planet />}></Route>
          <Route path="/species" element={<Species />}></Route>
          <Route path="/singspecies" element={<SingSpecies />}></Route>
          <Route path="/starships" element={<Starships />}></Route>
          <Route path="/starship" element={<Starship />}></Route>
          <Route path="/vehicles" element={<Vehicles />}></Route>
          <Route path="/vehicle" element={<Vehicle />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
