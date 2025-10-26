import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Banner = () => {
  const bannerRef = useRef(null);
  const titleRef = useRef(null);
  const imagesRef = useRef([]);

  useGSAP(() => {
    gsap.fromTo(
      bannerRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1.5, ease: "power3.out" }
    );
    gsap.fromTo(
      titleRef.current,
      { opacity: 0, y: -30 },
      { opacity: 1, y: 0, duration: 1.2, delay: 0.3, ease: "back.out(1.7)" }
    );

    gsap.fromTo(
      imagesRef.current,
      { opacity: 0, scale: 0.8 },
      {
        opacity: 1,
        scale: 1,
        duration: 1,
        stagger: 0.3,
        delay: 0.6,
        ease: "power2.out",
      }
    );
  }, []);

  return (
    <div
      ref={bannerRef}
      className="w-full bg-black text-white py-16 flex flex-col items-center rounded-2xl"
    >
      <div className="w-[90%] sm:w-[85%] md:w-[80%] lg:w-[70%] xl:w-[60%] mx-auto">
        <h1
          ref={titleRef}
          className="text-4xl md:text-5xl font-bold mb-6 text-center"
        >
          Welcome to our <span className="text-blue-600">Gamehub</span>
        </h1>
        <p className="text-gray-200 text-sm sm:text-base md:text-lg leading-relaxed sm:leading-loose mb-12 text-center">
          Step into a world where gaming meets excitement, creativity, and
          community. Gamehub is your ultimate destination for discovering
          trending games, exploring in-depth reviews, and staying updated with
          the latest gaming news. Whether you’re a casual player or a hardcore
          gamer, we bring you everything you need — from action-packed
          adventures to strategy-filled challenges. Connect with other gamers,
          share your experiences, and unlock new possibilities every day. At
          Gamehub, we don’t just play — we live the game. Let’s level up
          together and make every moment an epic gaming experience!
        </p>
        <div className="flex flex-col gap-8">
          <div className="flex flex-col items-center">
            <img
              ref={(el) => (imagesRef.current[0] = el)}
              src="src/assets/gamepi.jpg"
              alt="Amazing Games"
              className="w-full rounded-lg object-cover shadow-lg"
            />
            <h2 className="text-xl md:text-2xl font-semibold mb-2 text-center mt-4">
              Amazing experience with different types of games
            </h2>
          </div>
          <div className="flex flex-col items-center">
            <img
              ref={(el) => (imagesRef.current[1] = el)}
              src="src/assets/gamepics.jpg"
              alt="Computer Games"
              className="w-full rounded-lg object-cover shadow-lg"
            />
            <h2 className="text-xl md:text-2xl font-semibold mb-2 text-center mt-4">
              You will find computer games more convenient and enjoyable
            </h2>
          </div>
          <div className="flex flex-col items-center">
            <img
              ref={(el) => (imagesRef.current[2] = el)}
              src="src/assets/carrace.jpg"
              alt="Popular Game"
              className="w-full rounded-lg object-cover shadow-lg"
            />
            <h2 className="text-xl md:text-2xl font-semibold mb-2 text-center mt-4">
              This is the most popular game these days
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
