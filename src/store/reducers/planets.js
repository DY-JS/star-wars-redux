import {
  SET_PLANETS,
  DELETE_PLANET,
  CHANGE_BELOVED_STATUS,
  ADD_PLANET,
  SET_SELECTED_PLANET,
  EDIT_PLANET,
} from "../actions/planets";

const initialState = {
  allPlanets: [],
  tableName: "planets",
  selectedPlanet: null,
};

function planets(state = initialState, action) {
  switch (action.type) {
    case SET_PLANETS:
      return {
        ...state,
        allPlanets: action.planets,
      };
    case ADD_PLANET:
      return {
        ...state,
        allPlanets: [...state.allPlanets, action.newPlanet],
      };
    case DELETE_PLANET:
      return {
        ...state,
        allPlanets: state.allPlanets.filter(
          (planet) => planet.id !== action.id
        ),
      };
    case CHANGE_BELOVED_STATUS:
      return {
        ...state,
        allPlanets: state.allPlanets.map((planet) => {
          return planet.id === action.id
            ? { ...planet, beloved: !planet.beloved }
            : planet;
        }),
      };
    case SET_SELECTED_PLANET:
      return {
        ...state,
        selectedPlanet: state.allPlanets.find(
          (planet) => planet.id === action.id
        ),
      };
    case EDIT_PLANET:
      return {
        ...state,
        allPlanets: state.allPlanets.map((planet) => {
          const {
            name,
            orbital_period,
            population,
            beloved,
            id,
          } = action.planet;
          if (planet.id === id) {
            return { ...planet, name, orbital_period, population, beloved, id };
          }
          return planet;
        }),
      };
    default:
      return state;
  }
}

export default planets;
