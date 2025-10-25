import { Link } from "react-router";

const GameCard = ({ game }) => {
  return (
    <div
      className="bg-white rounded-xl shadow-md cursor-pointer hover:shadow-lg overflow-hidden transition duration-300 w-full"
    >
      <Link to={`/games/${game.id}`}>
        <img
          src={game.coverPhoto}
          alt={game.title}
          className="w-full h-52 object-cover hover:opacity-90 transition duration-300"
          loading="lazy"
        />

        <div className="p-4 space-y-2">
          <h3 className="text-lg font-semibold text-gray-900 truncate">
            {game.title}
          </h3>

          <p className="text-sm text-gray-500">{game.category}</p>

          <div className="flex items-center justify-between mt-2">
            <p className="text-sm text-yellow-500 font-medium">
              ⭐ {game.ratings}
            </p>

            <a
              href={game.downloadLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-800 text-sm font-bold hover:underline"
              onClick={(e) => e.stopPropagation()}
            >
              Download
            </a>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default GameCard;
