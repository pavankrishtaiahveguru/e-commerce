import { useContext } from "react";
import { SearchContext } from "./context/SearchContext";
import { CategoryContext } from "./context/CategoryContext";
import Banner from "./components/Banner";
import Cards from "./components/Cards";
import About from "./pages/About"

const Home = () => {
  const { search } = useContext(SearchContext);
  const { selectedCategory } = useContext(CategoryContext);

  const showBanner = search.trim() === "" && selectedCategory === "";

  return (
    <>
      {showBanner && <Banner />}
      <Cards />
      <About/>
    </>
  );
};

export default Home;