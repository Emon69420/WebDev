import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Services from './components/Services/Services';
import Impact from './components/Impact/Impact';
import Testimonials from './components/Testimonials/Testimonials';
import CTA from './components/CTA/CTA';
import Footer from './components/Footer/Footer';
import Contact from './components/Contact/Contact';

function HomePage() {
  return (
    <main className="pt-24 journal-texture">
      <Hero />
      <Services />
      <Impact />
      <Testimonials />
      <CTA />
    </main>
  );
}

function App() {
  return (
    <Router>
      <div className="bg-[#fffbff] text-[#39382f] font-body selection:bg-[#FF7F6A]/30 selection:text-[#ac4131]">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contact" element={<div className="pt-24"><Contact /></div>} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
