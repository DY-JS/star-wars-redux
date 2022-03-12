import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { addShip } from "../../store/actions/ships";
import { getTableName } from "../../store/selectors/ships";
import AddForm from "../common/AddForm";

const CreateShipForm = () => {
  const tableName = useSelector((state) => getTableName(state));
  const dispatch = useDispatch();
  const initialData = {
    name: "",
    starship_class: "",
    mass: "",
    passengers: "",
    beloved: false,
    id: "",
  };

  const columns = Object.keys(initialData);
  const [newShip, setNewShip] = useState(initialData);

  const handleAddShip = (newShip) => {
    dispatch(addShip(newShip));
  };

  useEffect(() => {
    return () => {
      setNewShip({});
    };
  }, []);

  return (
    <div>
      <h2 className="col-10 mx-auto py-2 text-center">CREATE NEW DATA</h2>
      <AddForm
        tableName={tableName}
        initialData={initialData}
        columns={columns}
        onAddData={handleAddShip}
        newData={newShip}
        createNewData={setNewShip}
        buttonTitle="Add new Starship"
      />
    </div>
  );
};

export default CreateShipForm;
