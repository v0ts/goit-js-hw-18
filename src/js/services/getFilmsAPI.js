import { createFilmsLayout } from "../markup/getFilmsMarkup";

export const getFilmsAPI = () => {
  return fetch("http://localhost:3000/movies")
    .then((data) => data.json())
    .then((data) => createFilmsLayout(data));
};
getFilmsAPI();
