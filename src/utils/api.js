import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3"; // ye api url ha tmdb sy copy krna ha.

const TMDB_TOKEN = import.meta.env.VITE_APP_TMDB_TOKEN;  // ye api ke key ha .evn file sy import ke ha

const headers = {
  Authorization: "bearer " + TMDB_TOKEN,
};

export const fetchDataFromApi = async (url, params) => {
  // params means parameter
  try {
    const { data } = await axios.get(BASE_URL + url, {
      headers,
      params,
    });

    return data;   
  } catch (err) {
    console.log(err);
    return err;
  }
};
