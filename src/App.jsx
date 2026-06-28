import "./styles/global.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
// 1. ADD THIS LINE: Import the new component you just created
import ServicesOverview from "./components/ServicesOverview"; 
import HowItWorks from "./components/HowItWorks";

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        {/* 2. ADD THIS LINE: Place the component right below the Hero */}
        <ServicesOverview />
        <HowItWorks /> {/* Add this line */}
      </main>
    </>
  );
}