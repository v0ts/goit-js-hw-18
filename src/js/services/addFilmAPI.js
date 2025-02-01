import { getFilmsAPI } from "./getFilmsAPI";
const listEl = document.querySelector(".get-films-list");

export const addFilmAPI = (toAdd) => {
  const options = {
    method: "POST",
    body: JSON.stringify(toAdd),
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
    },
  };
  fetch("http://localhost:3000/movies", options)
    .then(() => console.log("Film added"))
    .then(() => (listEl.innerHTML = ""))
    .then(() => getFilmsAPI())
    .catch((error) => console.log("Error:", error));
};
