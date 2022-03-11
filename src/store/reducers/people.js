import { act } from "@testing-library/react";
import {
  SET_PEOPLE,
  DELETE_PERSON,
  CHANGE_BELOVED_STATUS,
  ADD_PERSON,
} from "../actions/people";

const initialState = {
  allPeople: [],
  tableName: "people",
};

function people(state = initialState, action) {
  switch (action.type) {
    case SET_PEOPLE:
      return {
        ...state,
        allPeople: action.people,
      };
    case ADD_PERSON:
      return {
        ...state,
        allPeople: [...state.allPeople, action.newPerson],
      };

    case DELETE_PERSON:
      return {
        ...state,
        allPeople: state.allPeople.filter((person) => person.id !== action.id),
      };
    case CHANGE_BELOVED_STATUS:
      return {
        ...state,
        allPeople: state.allPeople.map((person) => {
          return person.id === action.id
            ? { ...person, beloved: !person.beloved }
            : person;
        }),
      };

    default:
      return state;
  }
}

export default people;
