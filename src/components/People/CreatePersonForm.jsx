import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { addPerson } from "../../store/actions/people";
import { getTableName } from "../../store/selectors/people";
import AddForm from "../common/AddForm";

const CreatePersonForm = () => {
  const tableName = useSelector((state) => getTableName(state));
  const dispatch = useDispatch();
  const initialData = {
    name: "",
    height: "",
    mass: "",
    gender: "male",
    birth_year: "",
    beloved: false,
    id: "",
  };
  const columns = Object.keys(initialData);
  const [newPerson, setNewPerson] = useState(initialData);

  const handleAddPerson = (newPerson) => {
    dispatch(addPerson(newPerson));
  };

  useEffect(() => {
    return () => {
      setNewPerson({});
    };
  }, []);

  return (
    <div>
      <h2 className="col-10 mx-auto py-2 text-center">CREATE NEW DATA</h2>
      <AddForm
        tableName={tableName}
        initialData={initialData}
        columns={columns}
        onAddData={handleAddPerson}
        newData={newPerson}
        createNewData={setNewPerson}
        buttonTitle="Add new person"
      />
    </div>
  );
};

export default CreatePersonForm;
