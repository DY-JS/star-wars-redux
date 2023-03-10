import React from "react";
import { Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";

function Table({
  tableName,
  data,
  columns,
  tableDescriptor,
  setBeloved,
  onDeleteData,
  setDataItem,
}) {
  return (
    <table className="table table-striped table-dark col-11 col-md-9 mx-auto">
      <thead>
        <tr>
          <th scope="col">{tableDescriptor}</th>
          {columns.map((columnTitle) => (
            <th key={columnTitle} scope="col">
              {columnTitle}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={Date.now() * Math.random()}>
            <th scope="row">{++index}</th>
            {columns.map((columnTitle, i) => {
              return i === 0 ? (
                <td
                  key={item[columnTitle] + columnTitle}
                  onClick={() => setDataItem(item["id"])}
                  //onClick={() => console.log(item["id"])}
                >
                  <NavLink
                    to={`/${tableName}/${item["id"]}/edit`}
                    className="text-white text-decoration-none"
                  >
                    {item[columnTitle]}
                  </NavLink>
                </td>
              ) : columnTitle === "beloved" ? (
                <td key={item[columnTitle] + columnTitle}>
                  <input
                    className="col-3  mx-auto"
                    type="checkbox"
                    value={item[columnTitle]}
                    checked={item[columnTitle]}
                    onChange={() => setBeloved(item["id"])}
                  />
                </td>
              ) : (
                <td key={item[columnTitle] + columnTitle}>
                  {item[columnTitle]}
                </td>
              );
            })}
            <td>
              <Button
                type="button"
                className="btn btn-danger  px-1"
                onClick={() => onDeleteData(item["id"])}
              >
                DELETE
              </Button>{" "}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
