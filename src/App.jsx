import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import ProductDetails from "./pages/ProductDetails";
import SearchProvider from "./context/SearchContext";
import CategoryProvider from "./context/CategoryContext";
import WishList from "./pages/WishList";
import Cart from "./pages/Cart";
import MainLayout from "./layout/MainLayout";
import Cards from "./components/Cards";
import Home from "./Home";
import ProtectedRoute from "./route/ProtectedRoute";

const App = () => {
  return (
    <CategoryProvider>
      <SearchProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MainLayout />}>
              <Route index element={<Home />} />
              <Route path="/cards" element={<Cards />} />
              <Route
                path="/wishlist"
                element={
                  <ProtectedRoute>
                    <WishList />  
                  </ProtectedRoute>
                }
              />
              <Route path="/details" element={<ProductDetails />} />
              <Route
                path="/cart"
                element={
                  <ProtectedRoute>
                    <Cart />
                  </ProtectedRoute>
                }
              />
            </Route>
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </BrowserRouter>
      </SearchProvider>
    </CategoryProvider>
  );
};

export default App;
