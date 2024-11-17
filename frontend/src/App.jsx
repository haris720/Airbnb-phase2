// import SearchBar from "./Components/SearchBar";
// import Navbar from "./Components/Navbar";
// import Categories from "./Components/Categories";
// import Cards from "./Components/Cards";
// import Footer from "./Components/Footer";
// import SingleSearchBar from "./Components/SingleSearchBar";
// import LowerNavbar from "./Components/LowerNavbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import ProductDetail from "./Pages/ProductDetail";

const App = () => {
  return (
    <div>
      {/* <Navbar />
      <SingleSearchBar />
      <SearchBar />
      <Categories />
      <Cards />
      <Footer />
      <LowerNavbar /> */}

      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<ProductDetail />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
