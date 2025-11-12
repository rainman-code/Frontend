import './index.css';
import Header from './components/Header';
import Hero from './components/Hero';
import QuoteSection from './components/QuoteSection';
import About from './components/About';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50">
      <Header />
      <Hero />
      <QuoteSection />
      <About />
      <ContactForm />
      <Footer />
    </div>
  );
}