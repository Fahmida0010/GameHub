import React, { useEffect, useState } from "react";

const AllGames = () => {
  const [games, setGames] = useState([]);


  useEffect(() => {
    fetch("/games.json") 
      .then((res) => res.json())
      .then((data) => setGames(data))
      .catch((err) => console.error("Error loading games:", err));
  }, []);

  return (
    <div className="py-10 px-4 md:px-8 lg:px-16 bg-gray-50 min-h-screen">
      <h2 className="text-3xl font-bold text-center mb-10 text-indigo-600">
       All Games are here and free to download  🎮 
      </h2>

   
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {games.map((game) => (
          <div
            key={game.id}
            className="bg-white rounded-2xl shadow-md overflow-hidden
             hover:shadow-xl transition-all duration-300 flex flex-col"
          >
       
            <img
              src={game.coverPhoto}
              alt={game.title}
              className="w-full h-48 object-cover"
              onError={(e) => (e.currentTarget.src = "/assets/placeholder.png")}
            />

     
            <div className="p-4 flex flex-col flex-1">
              <h3 className="text-lg font-semibold mb-1 text-green-800 line-clamp-2">
                {game.title}
              </h3>
              <p className="text-sm text-pink-500 mb-2">{game.category}</p>
              <p className="text-sm text-gray-700 mb-3 line-clamp-3 flex-1">
                {game.description}
              </p>

         
              <div className="text-sm text-red-400 mb-4">
                ⭐ {game.ratings} |{" "}
                <span className="italic">{game.developer}</span>
              </div>
        <div className="mt-auto flex justify-between items-center">
                <a
                  href={game.downloadLink}
                  target="_blank"
                  rel="noreferrer"
                  className="px-3 py-1 text-sm font-semibold text-blue-800 border
                   border-blue-800 rounded-lg hover:bg-blue-50 transition"
                >
                  Download
                </a>

                <button
                  onClick={() =>
                    window.open(game.downloadLink, "_blank", "noopener,noreferrer")
                  }
                  className="px-3 py-1 text-sm bg-gray-300 rounded-lg
                   hover:bg-gray-500 transition"
                >
                  View
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllGames;
