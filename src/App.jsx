import { useEffect } from "react";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Menu from "./components/Menu";
import Offers from "./components/offers";
import Restaurants from "./components/Restaurants";
import Reviews from "./components/Reviews";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  useEffect(() => {
    const initAOS = () => {
      if (typeof window !== "undefined" && window.AOS) {
        window.AOS.init({
          duration: 800,
          easing: "ease-out-cubic",
          once: false,
          mirror: true,
          offset: 80,
          delay: 50,
        });
        window.AOS.refresh();
      }
    };

    initAOS();
    window.addEventListener("load", initAOS);
    const timer = setTimeout(initAOS, 500);

    return () => {
      window.removeEventListener("load", initAOS);
      clearTimeout(timer);
    };
  }, []);

  return (
    <>
      <Navbar />
      <Home />
      <Menu />
      <Offers />
      <Restaurants />
      <Reviews />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
