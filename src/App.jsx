import "./styles/global.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero/Hero"; // 1. Import the Hero component
import About from "./components/About/About"; // 2. Import the About component

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />  {/* 3. Hero Section */}
        <About /> {/* 4. About Section */}
      </main>
    </>
  );
}