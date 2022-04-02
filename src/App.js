import React from "react";
import Films from "./pages/Films";
import wallPaper from "./images/star-wars-wallpaper.png";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import People from "./pages/People";
import Planets from "./pages/Planets";
import Species from "./pages/Species";
import Starships from "./pages/Starships";
import Vehicles from "./pages/Vehicles";

function App() {
  return (
    <div className="relative flex flex-col justify-between min-h-[100vh] w-full bg-gradient-to-br from-gray-800 to-gray-400">
      {/* set up background-image here so we can add overlay with parent div */}
      {/* gives texts a cool overlay effect as well that is fun to play around with */}
      <img
        className="w-full h-full overflow-auto fixed object-cover object-center mix-blend-overlay"
        src={wallPaper}
        alt="background"
      />
      <h1 className="px-7 md:px-12 pt-5 text-6xl md:text-8xl text-yellow-300 font-bold">
        Star Wars
      </h1>

      <BrowserRouter>
        <Routes>
          <Route index exact path="/" element={<Home />} />
          <Route path="/films" element={<Films />}></Route>
          <Route path="/people" element={<People />}></Route>
          <Route path="/planets" element={<Planets />}></Route>
          <Route path="/species" element={<Species />}></Route>
          <Route path="/starships" element={<Starships />}></Route>
          <Route path="/vehicles" element={<Vehicles />}></Route>
        </Routes>
      </BrowserRouter>

      <footer className="bottom-0 w-screen p-5 mt-20 bg-[rgba(0,0,0,.5)] flex items-center justify-center ">
        Developed by Hunter Lacefield
      </footer>
    </div>
  );
}

export default App;
