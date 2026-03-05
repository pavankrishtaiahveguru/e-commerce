import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";

const ProductDetails = () => {
  let location = useLocation();
  const product = location.state;
  const [wish, setWish] = useState([]);
  const [activeCartMsgId, setActiveCartMsgId] = useState(null);
  const [cartMsgText, setCartMsgText] = useState("");

  // Safety check
  if (!product) {
    return (
      <div className="container text-center mt-5">
        <h4>Product not found</h4>
      </div>
    );
  }

  useEffect(() => {
    const storedItems = JSON.parse(localStorage.getItem("wishListItems")) || [];
    setWish(storedItems);
  }, []);

  // wishlist for add to wishlist
  const toggleWishList = (product) => {
    let WishListItems = JSON.parse(localStorage.getItem("wishListItems")) || [];
    let alreadyExisted = WishListItems.find((item) => item.id === product.id);
    if (alreadyExisted) {
      // remove
      WishListItems = WishListItems.filter((item) => item.id !== product.id);
    } else {
      // add
      WishListItems.push(product);
    }
    localStorage.setItem("wishListItems", JSON.stringify(WishListItems));
    setWish(WishListItems);
  };

  // for filling wishlist icon
  const isAdded = (productId) => {
    return wish.some((item) => item.id === productId);
  };

  // add to cart
  const addToCart = (product) => {
    let cart = JSON.parse(localStorage.getItem("cartItems")) || [];
    let exists = cart.find((item) => item.id === product.id);

    if (exists) {
      cart = cart.map((item) =>
        item.id === product.id ? { ...item, qty: item.qty + 1 } : item,
      );
      setCartMsgText("Qty updated + 1");
    } else {
      cart.push({ ...product, qty: 1 });
      setCartMsgText("Added");
    }
    localStorage.setItem("cartItems", JSON.stringify(cart));
    // show message
    setActiveCartMsgId(product.id);
    // hide after 2 seconds
    setTimeout(() => {
      setActiveCartMsgId(null);
    }, 2000);
  };

  return (
    <div className="container min-vh-100 d-flex flex-wrap align-items-center justify-content-center">
      {/* Image section */}
      <div className="col-md-5 p-4 text-center position-relative">
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
          onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.2)")}
          onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
          onClick={() => toggleWishList(product)}
        >
          {isAdded(product.id) ? (
            <AiFillHeart size={22} color="red" />
          ) : (
            <AiOutlineHeart size={22} color="red" />
          )}
        </div>
        <img
          src={product.image}
          alt={product.title}
          className="img-fluid"
          style={{ maxHeight: "300px", objectFit: "contain" }}
        />
      </div>

      {/* Details section */}
      <div className="col-md-5 p-4">
        <h2 className="fw-bold mb-3">{product.title}</h2>
        <p className="text-muted">{product.description}</p>
        <h4 className="text-success fw-bold mt-3">Price : ₹{product.price}</h4>
        <span>Rating : ⭐{product.rating.rate}</span> <br />
        <span>Count : {product.rating.count}</span>
        <div className="d-flex gap-3 mt-3">
          {/* Add to cart section */}
          <div className="d-flex flex-column align-items-start">
            <Button onClick={() => addToCart(product)} variant="success">
              Add to Cart
            </Button>
          </div>
          {/* Buy now button */}
          <Button variant="warning">Buy Now</Button>
        </div>
        {/* Cart message below button */}
        {activeCartMsgId === product.id && (
          <span
            style={{
              color: "green",
              fontSize: "13px",
              fontWeight: "500",
              marginTop: "4px",
            }}
          >
            {cartMsgText}
          </span>
        )}
      </div>
    </div>
  );
};

export default ProductDetails;
