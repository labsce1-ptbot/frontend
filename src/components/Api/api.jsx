import axios from "axios";

const url = process.env.REACT_APP_SERVER_URL;

export async function getAllVacations(id) {
  try {
    const vacations = await axios.get(`${url}/info/${id}`);
    return vacations;
  } catch {
    throw new Error("There was an error");
  }
}

export async function getProfile() {
  let userRequest;
  try {
    userRequest = await axios.get(`${url}/profile`, {
      withCredentials: true
    });
  } catch ({ response }) {
    userRequest = response;
  }
  return userRequest.data.userInfo[0];
}

export async function saveVacation(vacation) {
  try {
    const newVacation = await axios.post(`${url}/add/new`, vacation);
    return newVacation;
  } catch {
    throw new Error("Vacation could not be added");
  }
}
