import  { useState, useEffect } from 'react';
import { RefreshCw } from 'lucide-react';

const QuoteSection = () => {
  const [quote, setQuote] = useState(null);
  const [loading, setLoading] = useState(false);

 const fetchQuote = async () => {
  setLoading(true);
  try {
    const response = await fetch('/api/quotes?time=' + Date.now());
    const data = await response.json();
    setQuote({
      content: data[0].q,
      author: data[0].a,
    });
  } catch (error) {
    console.error('Error fetching quote:', error);
    setQuote({
      content: "Hope is being able to see that there is light despite all of the darkness.",
      author: "Desmond Tutu",
    });
  } finally {
    setLoading(false);
  }
};


  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <section className="bg-white py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 shadow-xl text-white">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-2xl font-bold">Daily Inspiration</h3>
            <button
              onClick={fetchQuote}
              disabled={loading}
              className="p-2 hover:bg-white/20 rounded-full transition disabled:opacity-50"
              aria-label="Refresh quote"
            >
              <RefreshCw className={`w-6 h-6 ${loading ? 'animate-spin' : ''}`} />
            </button>
          </div>
          {quote && (
            <div className="text-center">
              <p className="text-xl md:text-2xl italic mb-4">"{quote.content}"</p>
              <p className="text-lg">— {quote.author}</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default QuoteSection;
