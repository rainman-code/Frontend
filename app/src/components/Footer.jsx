import { Heart} from 'lucide-react';
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex items-center justify-center space-x-2 mb-4">
          <Heart className="w-6 h-6" fill="currentColor" />
          <span className="text-xl font-bold">Hope & Healing</span>
        </div>
        <p className="text-gray-400">
          © 2024 Cancer Awareness & Support. Spreading hope, one step at a time.
        </p>
      </div>
    </footer>
  );
};

export default Footer ; 