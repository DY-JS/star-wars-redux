import React, { useState, useContext } from "react";
import { useDispatch, useSelector } from "react-redux";

//import { PeopleContext } from "../contexts/PeopleContext";
import { addPerson } from "../../store/actions/people";
import { getTableName } from "../../store/selectors/people";
import AddForm from "../common/AddForm";

const CreatePersonForm = () => {
  //const people = useSelector((state) => getAllPeople(state));
  const tableName = useSelector((state) => getTableName(state));
  const dispatch = useDispatch();
  const initialData = {
    name: "",
    height: "",
    mass: "",
    gender: "",
    birth_year: "",
    beloved: "",
    id: "",
  };
  const columns = Object.keys(initialData);

  const [newPerson, setNewPerson] = useState(initialData);
  //const {
  //initialData,
  //columns,
  //handleAddPerson,
  // newPerson,
  // setNewPerson,
  //} = useContext(PeopleContext);

  const handleAddPerson = (newPerson) => {
    dispatch(addPerson(newPerson));
  };

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
