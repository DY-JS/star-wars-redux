import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getPlanets } from "./../helpers/api";

import {
  setPlanets,
  deletePlanet,
  changeBelovedStatus,
  setSelectedPlanet,
} from "../../store/actions/planets";
import Table from "../common/Table";
import { getAllPlanets, getTableName } from "../../store/selectors/planets";

const PlanetsPage = () => {
  const planets = useSelector((state) => getAllPlanets(state));
  const tableName = useSelector((state) => getTableName(state));
  const columns = planets?.length ? Object.keys(planets[0]) : [];

  const dispatch = useDispatch();
  const url = "https://swapi.dev/api/planets/";

  const handleBelovedStatus = (id) => {
    dispatch(changeBelovedStatus(id));
  };

  const handleSelectPlanet = (id) => {
    dispatch(setSelectedPlanet(id));
  };

  const handleDeletePlanet = (id) => {
    dispatch(deletePlanet(id));
  };

  useEffect(() => {
    const getData = async () => {
      const data = await getPlanets(url);
      dispatch(setPlanets(data));
      console.log(data);
    };
    !planets.length && getData();
  }, []);

  return (
    <div>
      <div className="col-8 col-md-3 mx-auto my-3 text-center">
        <Button className="btn btn-primary ">
          <NavLink
            to="/planets/new"
            className="text-white text-decoration-none"
          >
            Add New Planet
          </NavLink>
        </Button>
      </div>
      {planets.length ? (
        <Table
          data={planets}
          tableName={tableName}
          columns={columns}
          tableDescriptor="Planets"
          setBeloved={handleBelovedStatus}
          onDeleteData={handleDeletePlanet}
          setDataItem={handleSelectPlanet}
        />
      ) : (
        <h1 className="col-10 mx-auto py-5 text-center">NO DATA ON PAGE</h1>
      )}
    </div>
  );
};

export default PlanetsPage;
