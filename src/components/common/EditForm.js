import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";

import Input from "./Input";
import { convertToBoolean } from "./../helpers/api";

const EditForm = ({
  tableName,
  itemData,
  columns,
  onEditForm,
  buttonTitle,
}) => {
  const [editData, setEditData] = useState(itemData);
  const [isSuccess, setIsSuccess] = useState(false);
  const navigate = useNavigate();

  const handleClick = (event) => {
    event.preventDefault();
    const beloved = convertToBoolean(editData["beloved"]);
    onEditForm({ ...editData, beloved: beloved });
    setIsSuccess(true);
  };

  const handleChange = (event) => {
    const { name, value } = event.currentTarget;
    setEditData((current) => ({
      ...editData,
      [name]: value,
    }));
  };

  useEffect(() => {
    if (isSuccess) {
      const timer = setTimeout(() => {
        navigate(`/${tableName}`);
      }, 1000);

      return () => {
        setIsSuccess(false);
        clearTimeout(timer);
      };
    }
  }, [isSuccess]);

  return (
    <form className="col-11 col-md-8 col-xl-6 mx-auto">
      {isSuccess && (
        <h1 className="col-10 mx-auto py-2 text-center text-success">
          SUCCESSFULLY UPDATED
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
                  value={editData[columnName]}
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
                  value={editData[columnName]}
                  onChange={handleChange}
                  className="form-control w-50 mb-3 pr-3"
                >
                  <option value={true}>Yes</option>
                  <option value={false}>No</option>
                </select>
              </div>
            );
          }
          case "id": {
            return null;
          }
          default:
            return (
              <Input
                key={columnName}
                name={columnName}
                label={columnName}
                value={editData[columnName]}
                type="input"
                onChange={handleChange}
              />
            );
        }
      })}
      <Button
        type="button"
        className="btn btn-primary col-8 col-md-3 fs-4 px-2 mx-auto"
        disabled={editData && Object.values(editData).some((key) => key === "")}
        onClick={handleClick}
      >
        {buttonTitle}
      </Button>
    </form>
  );
};

export default EditForm;
