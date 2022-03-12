import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { Button } from "react-bootstrap";

import {
  setPeople,
  deletePerson,
  changeBelovedStatus,
  setSelectedPerson,
} from "../../store/actions/people";
import { getPeople } from "./../helpers/api";

import Table from "../common/Table";
import { getAllPeople, getTableName } from "../../store/selectors/people";

const PeoplePage = () => {
  const people = useSelector((state) => getAllPeople(state));
  const tableName = useSelector((state) => getTableName(state));
  const columns = people?.length ? Object.keys(people[0]) : [];
  const dispatch = useDispatch();
  const url = "https://swapi.dev/api/people";

  const handleBelovedStatus = (id) => {
    dispatch(changeBelovedStatus(id));
  };

  const handleSelectPerson = (id) => {
    dispatch(setSelectedPerson(id));
  };

  const handleDeletePerson = (id) => {
    dispatch(deletePerson(id));
  };

  useEffect(() => {
    const getData = async () => {
      const data = await getPeople(url);
      dispatch(setPeople(data));
      // console.log(data);
    };
    !people.length && getData();
  }, []);

  return (
    <div>
      <div className="col-5 col-md-3 mx-auto my-3 text-center">
        <Button className="btn btn-primary ">
          <NavLink to="/people/new" className="text-white text-decoration-none">
            Add New Person
          </NavLink>
        </Button>
      </div>
      {people.length ? (
        <Table
          data={people}
          tableName={tableName}
          columns={columns}
          tableDescriptor="People"
          setBeloved={handleBelovedStatus}
          onDeleteData={handleDeletePerson}
          setDataItem={handleSelectPerson}
        />
      ) : (
        <h1 className="col-10 mx-auto py-5 text-center">NO DATA ON PAGE</h1>
      )}
    </div>
  );
};

export default PeoplePage;
