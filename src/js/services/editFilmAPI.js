import { getFilmsAPI } from "./getFilmsAPI";

const listEL = document.querySelector(".get-films-list");

export const editFilmsAPI = (toDelete, id) => {
  const options = {
    method: "PATCH",
    body: JSON.stringify(toDelete),
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
    },
  };
  fetch(`http://localhost:3000/movies/${id}`, options).then(() => listEL.innerHTML = "").then(getFilmsAPI());
};
