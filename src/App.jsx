import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import WhyUs from "./components/WhyUs";
import Products from "./components/Products";
import BrandStory from "./components/BrandStory";
import GoldenDifference from "./components/GoldenDifference";
import Franchise from "./components/Franchise";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <WhyUs />
      <Products />  
      <BrandStory /> 
      <GoldenDifference />
      <Franchise />
      <Footer />

      
    </>
  );
}

export default App;