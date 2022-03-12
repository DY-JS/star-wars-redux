import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavMenu from "./components/Navbar";
import PeoplePage from "./components/People/PeoplePage";
import PlanetsPage from "./components/Planets/PlanetsPage";
import StarshipsPage from "./components/Starships/StarshipsPage";
import Home from "./components/Home";
import ErrorPage from "./components/ErrorPage";
import CreatePersonForm from "./components/People/CreatePersonForm";
import CreatePlanetForm from "./components/Planets/CreatePlanetForm";
import CreateShipForm from "./components/Starships/CreateShipForm";
import EditPersonForm from "./components/People/EditPersonForm";
import EditPlanetForm from "./components/Planets/EditPlanetForm";
import EditShipForm from "./components/Starships/EditShipForm";

const AppRouter = () => {
  return (
    <Router>
      <NavMenu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/people" element={<PeoplePage />} />
        <Route path="/people/new" element={<CreatePersonForm />} />
        <Route path="/people/:id/edit" element={<EditPersonForm />} />
        <Route path="/planets" element={<PlanetsPage />} />
        <Route path="/planets/new" element={<CreatePlanetForm />} />
        <Route path="/planets/:id/edit" element={<EditPlanetForm />} />
        <Route path="/starships" element={<StarshipsPage />} />
        <Route exect path="/starships/new" element={<CreateShipForm />} />
        <Route path="/starships/:id/edit" element={<EditShipForm />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
