import React from "react";

import { useSelector, useDispatch } from "react-redux";
import {
  getAllPeople,
  getTableName,
  getSelectedPerson,
} from "../../store/selectors/people";

import { editPerson } from "../../store/actions/people";
import EditForm from "../common/EditForm";

const EditPersonForm = () => {
  const dispatch = useDispatch();
  const people = useSelector((state) => getAllPeople(state));
  const tableName = useSelector((state) => getTableName(state));
  const columns = people?.length ? Object.keys(people[0]) : [];
  const selectedPerson = useSelector((state) => getSelectedPerson(state));

  const handleEditPerson = (person) => {
    dispatch(editPerson(person));
  };

  return (
    <div>
      <h2 className="col-10 mx-auto py-2 text-center">EDIT PERSON DATA</h2>
      <EditForm
        tableName={tableName}
        itemData={selectedPerson}
        columns={columns}
        onEditForm={handleEditPerson}
        buttonTitle="Update person data"
      />
    </div>
  );
};

export default EditPersonForm;
