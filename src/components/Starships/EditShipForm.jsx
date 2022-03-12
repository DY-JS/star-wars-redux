import React from "react";

import { useSelector, useDispatch } from "react-redux";
import {
  getAllShips,
  getTableName,
  getSelectedShip,
} from "../../store/selectors/ships";

import { editShip } from "../../store/actions/ships";
import EditForm from "../common/EditForm";

const EditShipForm = () => {
  const dispatch = useDispatch();
  const ships = useSelector((state) => getAllShips(state));
  const tableName = useSelector((state) => getTableName(state));
  const columns = ships?.length ? Object.keys(ships[0]) : [];
  const selectedShip = useSelector((state) => getSelectedShip(state));

  const handleEditShip = (ship) => {
    dispatch(editShip(ship));
  };
  return (
    <div>
      <h2 className="col-10 mx-auto py-2 text-center">EDIT PLANET DATA</h2>
      <EditForm
        tableName={tableName}
        itemData={selectedShip}
        columns={columns}
        onEditForm={handleEditShip}
        buttonTitle="Update Starship data"
      />
    </div>
  );
};

export default EditShipForm;
