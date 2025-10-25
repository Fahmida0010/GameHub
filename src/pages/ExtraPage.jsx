import { useEffect } from "react";

const ExtraPage = () => {
  useEffect(() => {
    document.title = "Top Developers | Game Portal";
  }, []);

  return (
    <div className="text-center p-10 bg-gray-50 rounded-lg">
      <h2 className="text-3xl font-bold mb-3">Top Game Developers</h2>
      <p className="text-gray-700 max-w-2xl mx-auto">
        Meet the talented teams and studios behind your favorite games! From
        Activision to Krafton — their creativity powers the gaming world.
      </p>
    </div>
  );
};

export default ExtraPage;
