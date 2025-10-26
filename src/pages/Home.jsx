import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import GameCard from "../components/GameCard";
import Newsletter from "../components/Newsletter";
import Banner from "../components/Banner";

const Home = () => {
  const [games, setGames] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("/games.json")
      .then((res) => res.json())
      .then((data) => {
        const sorted = data?.sort((high, low) => low.ratings - high.ratings);
        setGames(sorted);
      });
  }, []);

  return (
    <div className="w-full">
      <section className="py-12 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 flex flex-col lg:flex-row gap-8">
          <div className="lg:w-2/3">
            <Banner />
          </div>
       <div className="lg:w-1/3 flex flex-col space-y-4">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">Popular Games</h2>
            {games.slice(0, 5).map((game) => (
              <GameCard
                key={game.id}
                game={game}
                onClick={() => navigate(`/game/${game.id}`)}
              />
            ))}
          </div>

        </div>
      </section>

      <Newsletter />
    </div>
  );
};

export default Home;
