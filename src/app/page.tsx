// app/page.tsx
import Hero from "./components/Hero";
import About from "./components/About";
import Destinations from "./components/Destinations";
import Events from "./components/Events";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Hero />
      <About />
      <Destinations />
      <Events />
      <Footer />
    </main>
  );
}
