export const SET_PLANETS = "SET_PLANETS";
export const DELETE_PLANET = "DELETE_PLANET";
export const CHANGE_BELOVED_STATUS = "CHANGE_BELOVED_STATUS";
export const ADD_PLANET = "ADD_PLANET";
export const SET_SELECTED_PLANET = "SET_SELECTED_PLANET";
export const EDIT_PLANET = "EDIT_PLANET";

export function setPlanets(planets) {
  return { type: SET_PLANETS, planets };
}

export function deletePlanet(id) {
  return { type: DELETE_PLANET, id };
}

export function changeBelovedStatus(id) {
  return { type: CHANGE_BELOVED_STATUS, id };
}

export function addPlanet(newPlanet) {
  return { type: ADD_PLANET, newPlanet };
}

export function setSelectedPlanet(id) {
  return { type: SET_SELECTED_PLANET, id };
}

export function editPlanet(planet) {
  return { type: EDIT_PLANET, planet };
}
