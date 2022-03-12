export const getPeople = async (url) => {
  const res = await (await fetch(url)).json();
  return res.results.map(({ name, height, mass, gender, birth_year }, i) => ({
    name,
    height,
    mass,
    gender,
    birth_year,
    beloved: false,
    id: i,
  }));
};

export const peopleColumns = [
  "name",
  "height",
  "mass",
  "gender",
  "birth_year",
  "beloved",
  "id",
];

export const getPlanets = async (url) => {
  const res = await (await fetch(url)).json();
  return res.results.map(({ name, orbital_period, population }, i) => ({
    name,
    orbital_period,
    population,
    beloved: false,
    id: i,
  }));
};

export const planetsColumns = [
  "name",
  "orbital_period",
  "population",
  "beloved",
  "id",
];

export const getStarships = async (url) => {
  const res = await (await fetch(url)).json();
  return res.results.map(({ name, starship_class, passengers }, i) => ({
    name,
    starship_class,
    passengers,
    beloved: false,
    id: i,
  }));
};

export const shipColumns = [
  "name",
  "starship_class",
  "passengers",
  "beloved",
  "id",
];

export const getInitialData = (columns) => {
  return (
    columns?.length &&
    columns.reduce((cols, columnName) => {
      cols[columnName] = "";
      return cols;
    }, {})
  );
};

export function convertToBoolean(data) {
  return data === "true" ? true : false;
}
