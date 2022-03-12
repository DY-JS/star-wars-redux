import {
  SET_SHIPS,
  DELETE_SHIP,
  CHANGE_BELOVED_STATUS,
  ADD_SHIP,
  SET_SELECTED_SHIP,
  EDIT_SHIP,
} from "../actions/ships";

const initialState = {
  allShips: [],
  tableName: "starships",
  selectedShip: null,
};

function ships(state = initialState, action) {
  switch (action.type) {
    case SET_SHIPS:
      return {
        ...state,
        allShips: action.ships,
      };
    case ADD_SHIP:
      return {
        ...state,
        allShips: [...state.allShips, action.newShip],
      };
    case DELETE_SHIP:
      return {
        ...state,
        allShips: state.allShips.filter((ship) => ship.id !== action.id),
      };
    case CHANGE_BELOVED_STATUS:
      return {
        ...state,
        allShips: state.allShips.map((ship) => {
          return ship.id === action.id
            ? { ...ship, beloved: !ship.beloved }
            : ship;
        }),
      };
    case SET_SELECTED_SHIP:
      return {
        ...state,
        selectedShip: state.allShips.find((ship) => ship.id === action.id),
      };
    case EDIT_SHIP:
      return {
        ...state,
        allShips: state.allShips.map((ship) => {
          const { name, starship_class, passengers, beloved, id } = action.ship;
          if (ship.id === id) {
            return { ...ship, name, starship_class, passengers, beloved, id };
          }
          return ship;
        }),
      };
    default:
      return state;
  }
}

export default ships;
