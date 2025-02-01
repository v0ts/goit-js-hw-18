import { getFilmsAPI } from "./getFilmsAPI";

const listEl = document.querySelector(".get-films-list");

export const deleteFilmAPI = (id) => {
  return fetch(`http://localhost:3000/movies/${id}`, { method: "DELETE" })
    .then(() => console.log("Film deleted"))
    .then(() => (listEl.innerHTML = ""))
    .then(() => getFilmsAPI())
    .catch((error) => console.log("Error:", error));
};
