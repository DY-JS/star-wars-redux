import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { addPlanet } from "../../store/actions/planets";
import { getTableName } from "../../store/selectors/planets";
import AddForm from "../common/AddForm";

const CreatePlanetForm = () => {
  const tableName = useSelector((state) => getTableName(state));
  const dispatch = useDispatch();
  const initialPlanet = {
    name: "",
    orbital_period: "",
    population: "",
    beloved: false,
    id: "",
  };

  const columns = Object.keys(initialPlanet);
  const [newPlanet, setNewPlanet] = useState(initialPlanet);

  const handleAddPlanet = (newPlanet) => {
    dispatch(addPlanet(newPlanet));
  };

  useEffect(() => {
    return () => {
      setNewPlanet({});
    };
  }, []);

  return (
    <div>
      <h2 className="col-10 mx-auto py-2 text-center">CREATE NEW DATA</h2>
      <AddForm
        tableName={tableName}
        initialData={initialPlanet}
        columns={columns}
        onAddData={handleAddPlanet}
        newData={newPlanet}
        createNewData={setNewPlanet}
        buttonTitle="Add new planet"
      />
    </div>
  );
};

export default CreatePlanetForm;
