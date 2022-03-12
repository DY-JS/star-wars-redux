import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { Button } from "react-bootstrap";

import {
  setShips,
  deleteShip,
  changeBelovedStatus,
  setSelectedShip,
} from "../../store/actions/ships";
import { getStarships } from "./../helpers/api";

import Table from "../common/Table";
import { getAllShips, getTableName } from "../../store/selectors/ships";

const StarshipsPage = () => {
  const ships = useSelector((state) => getAllShips(state));
  const tableName = useSelector((state) => getTableName(state));
  const columns = ships?.length ? Object.keys(ships[0]) : [];
  const dispatch = useDispatch();
  const url = "https://swapi.dev/api/starships";

  const handleBelovedStatus = (id) => {
    dispatch(changeBelovedStatus(id));
  };

  const handleSelectShip = (id) => {
    dispatch(setSelectedShip(id));
  };

  const handleDeleteShip = (id) => {
    dispatch(deleteShip(id));
  };

  useEffect(() => {
    const getData = async () => {
      const data = await getStarships(url);
      dispatch(setShips(data));
    };
    !ships.length && getData();
  }, []);

  return (
    <div>
      <div className="col-8 col-md-3 mx-auto my-3 text-center">
        <Button className="btn btn-primary ">
          <NavLink
            to="/starships/new"
            className="text-white text-decoration-none"
          >
            Add New Starship
          </NavLink>
        </Button>
      </div>
      {ships.length ? (
        <Table
          data={ships}
          tableName={tableName}
          data={ships}
          columns={columns}
          tableDescriptor="Starships"
          setBeloved={handleBelovedStatus}
          onDeleteData={handleDeleteShip}
          setDataItem={handleSelectShip}
        />
      ) : (
        <h1 className="col-10 mx-auto py-5 text-center">NO DATA ON PAGE</h1>
      )}
    </div>
  );
};

export default StarshipsPage;
