import { Heart } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Heart className="w-8 h-8" fill="currentColor" />
            <span className="text-2xl font-bold">Hope & Healing</span>
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#home" className="hover:text-pink-200 transition">Home</a>
            <a href="#about" className="hover:text-pink-200 transition">About</a>
            <a href="#contact" className="hover:text-pink-200 transition">Contact</a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header ;