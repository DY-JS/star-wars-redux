import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { Button } from "react-bootstrap";
import Input from "./Input";
import { convertToBoolean } from "./../helpers/api";

const AddForm = ({
  tableName,
  initialData,
  columns,
  onAddData,
  newData,
  createNewData,
  buttonTitle,
}) => {
  const [isSuccess, setIsSuccess] = useState(false);
  const navigate = useNavigate();

  const handleClick = (event) => {
    event.preventDefault();
    const beloved = convertToBoolean(newData["beloved"]);
    const newPersonData = { ...newData, beloved: beloved };
    onAddData(newPersonData);
    setIsSuccess(true);
  };

  const handleChange = (event) => {
    const { name, value } = event.currentTarget;
    const data = { ...newData };
    data[name] = value;
    createNewData(data);
  };

  useEffect(() => {
    if (isSuccess) {
      const timer = setTimeout(() => {
        navigate(`/${tableName}`);
        createNewData(initialData);
      }, 1000);

      return () => {
        setIsSuccess(false);
        clearTimeout(timer);
      };
    }
  }, [isSuccess, createNewData]);

  return (
    <form className="col-11 col-md-8 col-xl-6 mx-auto">
      {isSuccess && (
        <h1 className="col-10 mx-auto py-2 text-center text-success">
          SUCCESSFULLY ADDED
        </h1>
      )}
      {columns?.map((columnName) => {
        switch (columnName) {
          case "gender": {
            return (
              <div key={columnName} className="form-group">
                <label htmlFor="gender">Set gender</label>
                <select
                  id="gender"
                  name={columnName}
                  label={columnName}
                  value={newData[columnName]}
                  onChange={handleChange}
                  className="form-control w-50 mb-3 pr-3"
                >
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="n/a">N/a</option>
                </select>
              </div>
            );
          }
          case "beloved": {
            return (
              <div key={columnName} className="form-group">
                <label htmlFor="beloved">Set as favorite</label>
                <select
                  id="select"
                  key={columnName}
                  name={columnName}
                  label={columnName}
                  value={newData[columnName]}
                  onChange={handleChange}
                  className="form-control w-50 mb-3 pr-3"
                >
                  <option value={true}>Yes</option>
                  <option value={false}>No</option>
                </select>
              </div>
            );
          }
          default:
            return (
              <Input
                key={columnName}
                name={columnName}
                label={columnName}
                value={newData[columnName]}
                type="input"
                onChange={handleChange}
              />
            );
        }
      })}
      <Button
        type="button"
        className="btn btn-primary col-8 col-md-3 fs-4 px-2 mx-auto"
        disabled={newData && Object.values(newData).some((v) => v === "")}
        onClick={handleClick}
      >
        {buttonTitle}
      </Button>
    </form>
  );
};

export default AddForm;
