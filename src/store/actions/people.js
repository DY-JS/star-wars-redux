export const SET_PEOPLE = "SET_PEOPLE";
export const DELETE_PERSON = "DELETE_PERSON";
export const CHANGE_BELOVED_STATUS = "CHANGE_BELOVED_STATUS";
export const ADD_PERSON = "ADD_PERSON";
export const SET_SELECTED_PERSON = "SET_SELECTED_PERSON";
export const EDIT_PERSON = "EDIT_PERSON";

export function setPeople(people) {
  return { type: SET_PEOPLE, people };
}

export function deletePerson(id) {
  return { type: DELETE_PERSON, id };
}

export function changeBelovedStatus(id) {
  return { type: CHANGE_BELOVED_STATUS, id };
}

export function addPerson(newPerson) {
  return { type: ADD_PERSON, newPerson };
}

export function setSelectedPerson(id) {
  return { type: SET_SELECTED_PERSON, id };
}

export function editPerson(person) {
  return { type: EDIT_PERSON, person };
}
