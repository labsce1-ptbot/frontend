import axios from "axios";

const url = process.env.REACT_APP_SERVER_URL;

export async function getAllVacations(id) {
  try {
    const vacations = await axios.get(`${url}/user/info/${id}`);
    // console.log("vacations-api--->", vacations);
    return vacations;
  } catch {
    throw new Error("There was an error");
  }
}

export async function getProfile() {
  let userRequest;
  try {
    userRequest = await axios.get(`${url}/user/profile`, {
      withCredentials: true
    });
  } catch ({ response }) {
    userRequest = response;
  }
  return userRequest.data.userInfo[0];
}

export async function saveVacation(vacation) {
  try {
    const newVacation = await axios.post(`${url}/user/add/new`, vacation);
    return newVacation;
  } catch {
    throw new Error("Vacation could not be added");
  }
}

export async function deleteVacation(id) {
  try {
    const count = await axios.delete(`${url}/user/delete/${id}`);

    return count;
  } catch {
    throw new Error("Vacation could not deleted");
  }
}
