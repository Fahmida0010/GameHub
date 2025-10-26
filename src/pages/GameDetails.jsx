import { useEffect, useState } from "react";
import { useParams, Link } from "react-router";

const GameDetails = () => {
  const { id } = useParams();
  const [game, setGame] = useState(null);

  useEffect(() => {
    fetch("/games.json")
      .then((res) => res.json())
      .then((data) => {
        const found = data.find((g) => g.id === id);
        setGame(found);
        document.title = `${found?.title || "Game"} | GameHub Details`;
      })
      .catch((err) => console.error("Error loading game data:", err));
  }, [id]);

  if (!game)
    return <p className="text-center mt-10 text-green-500
   text-lg">Loading game details...</p>;

  return (
    <div className="max-w-4xl mx-auto mt-10 bg-white p-6 sm:p-10 rounded-2xl shadow-md">
      <img
        src={game.coverPhoto}
        alt={game.title}
        className="w-full h-72 object-cover rounded-xl mb-6 shadow-sm"
      />

      <h2 className="text-3xl font-bold text-gray-900 mb-3">{game.title}</h2>
      <p className="text-gray-700 mb-5 leading-relaxed">{game.description}</p>

      <div className="grid sm:grid-cols-2 gap-4 text-gray-800">
        <p>
          <span className="font-semibold">🎮 Category:</span> {game.category}
        </p>
        <p>
          <span className="font-semibold">🏢 Developer:</span> {game.developer}
        </p>
        <p>
          <span className="font-semibold">⭐ Ratings:</span> {game.ratings}
        </p>
        <p>
          <span className="font-semibold">🆔 Game ID:</span> {game.id}
        </p>
      </div>

      <div className="flex flex-wrap gap-4 mt-8">
        <a
          href={game.downloadLink}
          target="_blank"
          rel="noreferrer"
          className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-5 py-2.5 rounded-lg transition duration-200"
        >
          Download Game
        </a>

        <Link
          to="/"
          className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-medium px-5 py-2.5 rounded-lg transition duration-200"
        >
          ← Back to Library
        </Link>
      </div>
    </div>
  );
};

export default GameDetails;
