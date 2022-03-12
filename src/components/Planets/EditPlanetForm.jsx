import React from "react";

import { useSelector, useDispatch } from "react-redux";
import {
  getAllPlanets,
  getTableName,
  getSelectedPlanet,
} from "../../store/selectors/planets";

import { editPlanet } from "../../store/actions/planets";
import EditForm from "../common/EditForm";

const EditPlanetForm = () => {
  const dispatch = useDispatch();
  const planets = useSelector((state) => getAllPlanets(state));
  const tableName = useSelector((state) => getTableName(state));
  const columns = planets?.length ? Object.keys(planets[0]) : [];
  const selectedPlanet = useSelector((state) => getSelectedPlanet(state));

  const handleEditPlanet = (planet) => {
    dispatch(editPlanet(planet));
  };
  return (
    <div>
      <h2 className="col-10 mx-auto py-2 text-center">EDIT PLANET DATA</h2>
      <EditForm
        tableName={tableName}
        itemData={selectedPlanet}
        columns={columns}
        onEditForm={handleEditPlanet}
        buttonTitle="Update planet data"
      />
    </div>
  );
};

export default EditPlanetForm;
