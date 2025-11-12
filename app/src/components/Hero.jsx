import { Heart} from 'lucide-react';
const Hero = () => {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-100 to-pink-100 opacity-50"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Cancer Awareness & Support
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto">
            Together we stand strong. Join us in spreading awareness, offering support, 
            and bringing hope to those affected by cancer.
          </p>
          <a 
            href="#contact" 
            className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl transform hover:-translate-y-1 transition duration-300"
          >
            Get Involved
          </a>
        </div>
        
        {/* Banner Image */}
        <div className="mt-16 rounded-2xl overflow-hidden shadow-2xl">
          <div className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 h-64 md:h-96 flex items-center justify-center relative">
            <div className="absolute inset-0 opacity-20">
              <svg className="w-full h-full" viewBox="0 0 800 400">
                <circle cx="150" cy="150" r="80" fill="white" opacity="0.3" />
                <circle cx="650" cy="200" r="100" fill="white" opacity="0.2" />
                <circle cx="400" cy="300" r="60" fill="white" opacity="0.3" />
                <path d="M0,250 Q200,150 400,250 T800,250" stroke="white" strokeWidth="2" fill="none" opacity="0.3" />
              </svg>
            </div>
            <div className="text-center text-white relative z-10">
              <Heart className="w-24 h-24 mx-auto mb-4" fill="currentColor" />
              <p className="text-2xl font-semibold">Strength • Hope • Support</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero ; 