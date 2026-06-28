import "./styles/global.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
// 1. ADD THIS LINE: Import the new component you just created
import ServicesOverview from "./components/ServicesOverview"; 

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        {/* 2. ADD THIS LINE: Place the component right below the Hero */}
        <ServicesOverview />
        
        {/* Future sections: Fleet showcase, Why Oneness, Testimonials, etc. */}
      </main>
    </>
  );
}