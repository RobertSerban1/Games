import axios from "axios";
import { popularGamesURL } from "../api";

//Action creator

export const loadGames = () => async (dispatch) => {
  //FETCH AXIOS
  const popularData = await axios.get(popularGamesURL()); // apelează API-ul
  dispatch({
    type: "FETCH_GAMES",
    payload: {
      popular: popularData.data.results, // trimite datele reale ca payload
    },
  });
};
