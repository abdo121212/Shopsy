import { useEffect } from "react";
import { Hero } from "./Components/hero";
import { Navbar } from "./Components/navbar/Navbar";
import { Products } from "./Components/Products";
import AOS from "aos";
import "aos/dist/aos.css";
import { TopProducts } from "./Components/TopProducts";
import { Banner } from "./Components/Banner";
import { Notified } from "./Components/Notified";
import { TestImonials } from "./Components/TestImonials";
import { Detalis } from "./Components/Detalis";
function App() {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);
  return (
    <>
      <Navbar />
      <Hero />
      <Products />
      <TopProducts />
      <Banner />
      <Notified />
      <Products />
      <TestImonials />
      <Detalis/>
    </>
  );
}

export default App;
