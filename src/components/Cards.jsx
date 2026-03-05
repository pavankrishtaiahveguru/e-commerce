import React, { useEffect, useState, useContext } from "react";
import { Button, Card, Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { SearchContext } from "../context/SearchContext";
import { CategoryContext } from "../context/CategoryContext";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import ProductNotFound from "../assets/ProductNotFound.png";

const ShimmerCard = () => {
  // localStorage.clear();
  return (
    <Card className="h-100 shadow-sm">
      <div
        className="bg-secondary bg-opacity-25"
        style={{ height: "180px" }}
      ></div>
      <Card.Body>
        <div
          className="bg-secondary bg-opacity-25 mb-2 rounded"
          style={{ height: "15px", width: "80%" }}
        ></div>
        <div
          className="bg-secondary bg-opacity-25 rounded"
          style={{ height: "35px", width: "100%" }}
        ></div>
      </Card.Body>
    </Card>
  );
};

const Cards = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { search } = useContext(SearchContext);
  const { selectedCategory, setCategory } = useContext(CategoryContext);
  const [wish, setWish] = useState([]);
  const [activeMsgId, setActiveMsgId] = useState(null);
  const [msgText, setMsgText] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
        // extract unique categories
        const uniqueCategories = [...new Set(data.map((p) => p.category))];
        setCategory(uniqueCategories);
      })
      .catch((err) => console.log(err));
    const storedItems = JSON.parse(localStorage.getItem("wishListItems")) || [];
    setWish(storedItems);
  }, [setCategory]);

  // wishlist for add to wishlist
  const toggleWishList = (product) => {
    let WishListItems = JSON.parse(localStorage.getItem("wishListItems")) || [];
    let alreadyExisted = WishListItems.find((item) => item.id === product.id);
    if (alreadyExisted) {
      // remove
      WishListItems = WishListItems.filter((item) => item.id !== product.id);
      setMsgText("Removed");
    } else {
      // add
      WishListItems.push(product);
      setMsgText("Added");
    }
    localStorage.setItem("wishListItems", JSON.stringify(WishListItems));
    setWish(WishListItems);
    setActiveMsgId(product.id);
    setTimeout(() => {
      setActiveMsgId(null);
    }, 2000);
  };

  // for filling wishlist icon
  const isAdded = (productId) => {
    return wish.some((item) => item.id === productId);
  };

  // combined search + category filtering
  const filteredProducts = products.filter((p) => {
    const matchesSearch = (p.title + p.description + p.category)
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory =
      selectedCategory === "" || p.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <Container className="py-4">
      <h2 className="text-center mb-4 fw-bold">Products</h2>

      <Row className="g-4">
        {/* Shimmer while loading */}
        {loading &&
          Array.from({ length: 8 }).map((_, i) => (
            <Col key={i} md={3}>
              <ShimmerCard />
            </Col>
          ))}

        {/* Actual products */}
        {!loading &&
          filteredProducts.length > 0 &&
          filteredProducts.map((product) => (
            <Col key={product.id} md={3}>
              <Card className="h-100 p-2 shadow-sm position-relative">
                {/* Wishlist Icon */}
                <div
                  className="position-absolute"
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
                  onClick={() => toggleWishList(product)}
                >
                  {isAdded(product.id) ? (
                    <AiFillHeart size={22} color="red" />
                  ) : (
                    <AiOutlineHeart size={22} color="red" />
                  )}
                  {activeMsgId === product.id && (
                    <div
                      style={{
                        position: "absolute",
                        top: "28px",
                        right: "0",
                        color: "green",
                        fontSize: "11px",
                        fontWeight: "500",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {msgText}
                    </div>
                  )}
                </div>
                <Card.Img
                  src={product.image}
                  style={{
                    height: "180px",
                    padding: "10px",
                    objectFit: "contain",
                  }}
                />

                <Card.Body>
                  <Card.Title className="fs-6">
                    {product.title.slice(0, 40)}...
                  </Card.Title>

                  <Button
                    variant="success"
                    className="w-100"
                    onClick={() => navigate("/details", { state: product })}
                  >
                    More Details
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}

        {/* No results */}
        {!loading && filteredProducts.length === 0 && (
          <img
            src={ProductNotFound}
            alt=""
            className="w-25 object-contain block mx-auto"
          />
        )}
      </Row>
    </Container>
  );
};

export default Cards;
