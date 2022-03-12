import { combineReducers } from "redux";
import people from "./people";
import planets from "./planets";
import ships from "./ships";

export default combineReducers({
  people,
  planets,
  ships,
});
