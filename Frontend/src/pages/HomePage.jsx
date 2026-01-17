import React from "react";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div className="relative min-h-screen flex items-center justify-center px-6">
      
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(125%_125%_at_50%_10%,#000_40%,#6d28d9_100%)]" />

      <div className="text-center space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold text-white">
          Authentication App
        </h1>

        <p className="text-gray-300 text-lg">
          Secure MERN Authentication using JWT
        </p>

        <div className="flex justify-center gap-4 pt-4">
          <Link to="/register">
            <button className="px-6 py-2 rounded-lg bg-violet-600 text-white font-medium hover:bg-violet-700 transition">
              Register
            </button>
          </Link>

          <Link to="/login">
            <button className="px-6 py-2 rounded-lg border border-violet-400 text-violet-300 font-medium hover:bg-violet-600 hover:text-white transition">
              Login
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
