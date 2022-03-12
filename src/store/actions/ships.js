export const SET_SHIPS = "SET_SHIPS";
export const DELETE_SHIP = "DELETE_SHIP";
export const CHANGE_BELOVED_STATUS = "CHANGE_BELOVED_STATUS";
export const ADD_SHIP = "ADD_SHIP";
export const SET_SELECTED_SHIP = "SET_SELECTED_SHIP";
export const EDIT_SHIP = "EDIT_SHIP";

export function setShips(ships) {
  return { type: SET_SHIPS, ships };
}

export function deleteShip(id) {
  return { type: DELETE_SHIP, id };
}

export function changeBelovedStatus(id) {
  return { type: CHANGE_BELOVED_STATUS, id };
}

export function addShip(newShip) {
  return { type: ADD_SHIP, newShip };
}

export function setSelectedShip(id) {
  return { type: SET_SELECTED_SHIP, id };
}

export function editShip(ship) {
  return { type: EDIT_SHIP, ship };
}
