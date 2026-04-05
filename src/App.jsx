import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Services from './components/Services/Services';
import Impact from './components/Impact/Impact';
import Testimonials from './components/Testimonials/Testimonials';
import CTA from './components/CTA/CTA';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="bg-[#fffbff] text-[#39382f] font-body selection:bg-[#FF7F6A]/30 selection:text-[#ac4131]">
      <Header />
      <main className="pt-24 journal-texture">
        <Hero />
        <Services />
        <Impact />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
