import axios from "axios";

const url = process.env.REACT_APP_SERVER_URL;

export async function getAllVacations(id) {
  try {
    const vacations = await axios.get(`${url}/info/${id}`);
    console.log("=============vacay====", vacations);
    return vacations;
  } catch {
    throw new Error("There was an error");
  }
}
