import { motion } from "framer-motion";

const Newsletter = () => {
  return (
    <section className="bg-gradient-to-r from-indigo-300 to-purple-500
     py-14 text-white rounded-4xl">
     
  <h2 className="text-3xl text-pink-600 font-bold  p-8 text-center">Join Our Newsletter</h2>
        <p className="mb-6 text-gray-100 text-xl text-center">
          Stay updated with the latest game releases, tips, and exclusive
          content!
        </p>

        <form className="flex flex-col md:flex-row 
        gap-3 justify-center">
          <input
            type="email"
            placeholder ="Enter your email address"
            className="p-3 rounded-md w-full md:w-2/3 text-gray-800"
            required
          />
          <button
            type="submit"
            className="bg-green-400 hover:bg-green-700 text-gray-900 
            px-6 py-3 rounded-md font-semibold"
          >
            Subscribe
          </button>
        </form>
      
    </section>
  );
};

export default Newsletter;
