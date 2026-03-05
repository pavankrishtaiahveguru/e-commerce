import {
  Button,
  Container,
  Form,
  Nav,
  Navbar,
  ButtonGroup,
  Dropdown,
  DropdownButton,
} from "react-bootstrap";
import BuyNestLogo from "../assets/BuyNest.png";
import { NavLink, useLocation } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { SearchContext } from "../context/SearchContext";
import { CategoryContext } from "../context/CategoryContext";
import { FiShoppingCart } from "react-icons/fi";
import { AiOutlineHeart } from "react-icons/ai";

const NavBar = () => {
  const { setSearch } = useContext(SearchContext);
  const { category, selectedCategory, setSelectedCategory } =
    useContext(CategoryContext);

  const [user, setUser] = useState(null);
  const [inputValue, setInputValue] = useState("");
  const [cartCount, setCartCount] = useState(0);
  const location = useLocation();

  // load user
  useEffect(() => {
    const retrievedUser = JSON.parse(localStorage.getItem("userDetails"));
    setUser(retrievedUser);
  }, []);

  const logout = () => {
    localStorage.clear();
    window.location.reload();
  };

  // update wishlist count
  const wishListCount =
    JSON.parse(localStorage.getItem("wishListItems"))?.length || 0;

  // update cart count
  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("cartItems")) || [];
    setCartCount(items.length);
  }, [location]);

  return (
    <Navbar expand="lg" className="bg-body-tertiary sticky-top shadow-sm">
      <Container fluid>
        <Navbar.Brand>
          <img src={BuyNestLogo} alt="BuyNest" height="35" />
        </Navbar.Brand>

        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav className="me-auto">
            <NavLink to="/" className="nav-link">
              Home
            </NavLink>
            <NavLink to="/about" className="nav-link">
              About
            </NavLink>
          </Nav>

          {/* CATEGORY DROPDOWN */}
          <select
            className="me-3 bg-transparent text-dark"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            style={{
              border: "none",
              outline: "none",
              boxShadow: "none",
              cursor: "pointer",
            }}
          >
            <option value="">All Categories</option>
            {category.map((cat, index) => (
              <option key={index} value={cat}>
                {cat}
              </option>
            ))}
          </select>

          {/* SEARCH */}
          <Form
            className="d-flex me-3"
            onSubmit={(e) => {
              e.preventDefault();
              setSearch(inputValue);
            }}
          >
            <Form.Control
              type="search"
              placeholder="Search products..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
            <Button variant="outline-success" className="ms-2" type="submit">
              Search
            </Button>
          </Form>

          <div className="d-flex align-items-center me-3">
            {/* Wishlist Icon */}
            <NavLink to="/wishlist" className="me-3">
              <AiOutlineHeart
                size={22}
                color="red"
                style={{
                  top: "10px",
                  right: "10px",
                  zIndex: 10,
                  cursor: "pointer",
                  transition: "transform 0.2s",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.transform = "scale(1.2)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.transform = "scale(1)")
                }
              />
              <span
                className="position-absolute text-black top-1 start-1 translate-middle"
                style={{ fontSize: "14px" }}
              >
                {wishListCount}
              </span>
            </NavLink>

            {/* Cart Icon */}
            <NavLink to="/cart">
              <FiShoppingCart size={22} />
              <span
                className="position-absolute top-1 start-1 translate-middle"
                style={{ fontSize: "14px" }}
              >
                {cartCount}
              </span>
            </NavLink>
          </div>

          {user ? (
            <DropdownButton
              as={ButtonGroup}
              variant="info"
              title="Profile"
              style={{ marginRight: "200px" }}
            >
              <Dropdown.Item>{user.name}</Dropdown.Item>
              <Dropdown.Item>{user.email}</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item onClick={logout}>Log Out</Dropdown.Item>
            </DropdownButton>
          ) : (
            <>
              <Button variant="success" className="me-2">
                <NavLink
                  to="/signup"
                  className="text-white text-decoration-none"
                >
                  Register
                </NavLink>
              </Button>

              <Button variant="success">
                <NavLink
                  to="/login"
                  className="text-white text-decoration-none"
                >
                  Login
                </NavLink>
              </Button>
            </>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
