import { useEffect, useState } from "react";
import { popularGamesURL } from "./api";

function App() {
  const [games, setGames] = useState([]);

  useEffect(() => {
    fetch(popularGamesURL())
      .then((res) => res.json())
      .then((data) => {
        console.log("Games:", data);
        setGames(data.results); // RAWG returnează jocurile în `results`
      })
      .catch((err) => console.error("Fetch error:", err));
  }, []);

  return (
    <div style={{ padding: "2rem", fontFamily: "Arial" }}>
      <h1>🔥 Top 10 Rated Games</h1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
          gap: "1rem",
        }}
      >
        {games.map((game) => (
          <div
            key={game.id}
            style={{
              border: "1px solid #ccc",
              borderRadius: "10px",
              padding: "1rem",
              boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
            }}
          >
            <img
              src={game.background_image}
              alt={game.name}
              style={{ width: "100%", borderRadius: "8px" }}
            />
            <h3>{game.name}</h3>
            <p>⭐ Rating: {game.rating}</p>
            <a
              href={`https://rawg.io/games/${game.slug}`}
              target="_blank"
              rel="noreferrer"
            >
              <button
                style={{
                  padding: "0.5rem 1rem",
                  marginTop: "0.5rem",
                  cursor: "pointer",
                }}
              >
                More info
              </button>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
