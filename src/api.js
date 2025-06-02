const base_url = "https://api.rawg.io/api/";
const API_KEY = import.meta.env.VITE_GAMES_API;

// Date utils
const getCurrentMonth = () => {
  const month = new Date().getMonth() + 1;
  return month < 10 ? `0${month}` : month;
};

const getCurrentDay = () => {
  const day = new Date().getDate();
  return day < 10 ? `0${day}` : day;
};

const currentYear = new Date().getFullYear();
const currentMonth = getCurrentMonth();
const currentDay = getCurrentDay();
const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`;
const nextYear = `${currentYear + 1}-${currentMonth}-${currentDay}`;

// Popular Games
const popular_games = `games?key=${API_KEY}&dates=${lastYear},${currentDate}&ordering=-rating&page_size=10`;
const upcoming_games = `games?key=${API_KEY}&dates=${currentDate},${nextYear}&ordering=-added&page_size=10`;
const newGames = `games?key=${API_KEY}&dates=${lastYear},${currentDate}&ordering=-released&page_size=10`;

export const popularGamesURL = () => `${base_url}${popular_games}`;
export const upcomingGamesURL = () => `${base_url}${upcoming_games}`;
export const newGamesURL = () => `${base_url}${newGames}`;

//Game details
export const gameDetailsURL = (game_id) =>
  `${base_url}games/${game_id}?key=${API_KEY}`;

//Game Screenshots

export const gameScreenshotURL = (game_id) =>
  `${base_url}games/${game_id}/screenshots?key=${API_KEY}`;

//Searched game
export const searchGameURL = (game_name) =>
  `${base_url}games?search=${game_name}&page_size=9&key=${API_KEY}`;
