import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-700 text-gray-300 py-10 mt-10">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8">
        <div>
          <h2 className="text-2xl font-bold text-white mb-3">
            Game<span className="text-yellow-400">Hub</span>
          </h2>
          <p className="text-sm leading-relaxed">
            Discover, explore, and play your favorite games.  
            GameHub brings you the world’s best games in one place.
          </p>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/" className="hover:text-yellow-400">Home</a></li>
            <li><a href="/about" className="hover:text-yellow-400">About</a></li>
            <li><a href="/games" className="hover:text-yellow-400">Games</a></li>
            <li><a href="/contact" className="hover:text-yellow-400">Contact</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg text-blue-500 font-semibold text-white mb-3">Follow Us</h3>
          <div className="flex gap-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              className="p-2 bg-gray-800 rounded-full
               hover:bg-sky-500 hover:text-gray-900 transition"
            >
              <FaFacebookF size={18} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="p-2 bg-gray-800 rounded-full
               hover:bg-pink-500 hover:text-gray-900 transition"
            >
              <FaInstagram size={18} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer"
              className="p-2 bg-gray-800 rounded-full
               hover:bg-sky-400 hover:text-gray-900 transition"
            >
              <FaTwitter size={18} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="p-2 bg-gray-800 rounded-full
               hover:bg-blue-600 hover:text-gray-900 transition"
            >
              <FaLinkedinIn size={18} />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noreferrer"
              className="p-2 bg-gray-800 rounded-full
               hover:bg-red-500 hover:text-gray-900 transition"
            >
              <FaYoutube size={18} />
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} Gamehub. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
