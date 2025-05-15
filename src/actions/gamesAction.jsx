import axios from "axios";
import { popularGamesURL, upcomingGamesURL, newGamesURL } from "../api";

//Action creator

export const loadGames = () => async (dispatch) => {
  //FETCH AXIOS
  const popularData = await axios.get(popularGamesURL()); // apelează API-ul
  const newGamesData = await axios.get(newGamesURL()); // apelează API-ul
  const upComingData = await axios.get(upcomingGamesURL()); // apelează API-ul
  dispatch({
    type: "FETCH_GAMES",
    payload: {
      popular: popularData.data.results, // trimite datele reale ca payload
      upcoming: upComingData.data.results,
      newGames: newGamesData.data.results,
    },
  });
};
