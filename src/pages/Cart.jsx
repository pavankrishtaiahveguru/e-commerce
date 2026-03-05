import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card, Button, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import EmptyCart from "../assets/EmptyCart.jpeg"

const Cart = () => {
  const [cart, setCart] = useState([]);

  // load cart from local storage
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cartItems")) || [];
    setCart(storedCart);
  }, []);

  // remove from cart
  const removeFromCart = (id) => {
    const updated = cart.filter((item) => item.id !== id);
    localStorage.setItem("cartItems",JSON.stringify(updated));
    setCart(updated);
  };

  // change quantity
  const updateQuantity = (id, amount) => {
    const updated = cart.map((item) => {
      if (item.id === id) {
        const newQty = item.qty + amount;
        return { ...item, qty: newQty < 1 ? 1 : newQty };
      }
      return item;
    });
    localStorage.setItem("cartItems", JSON.stringify(updated));
    setCart(updated);
  };

  // total calculation
  const total = cart.reduce((acc, item) => acc + item.price * item.qty, 0);

  let navigate=useNavigate()

  return (
    <Container className="p-2 vh-100 ">
      <h2 className="text-center">Welcome to Cart</h2>
      {cart.length === 0 ? 
      <div className="text-center">
        <img src={EmptyCart} alt="EmptyCart" className="w-25 mt-5"/> <br /> <br />
        <Link to="/cards" className="text-success">Continue shopping</Link>
      </div> : (
        <Row>
          {/* Cart Items */}
          <Col md={8}>
            {cart.map((item) => (
              <Card key={item.id} className="mb-3 shadow-sm">
                <Row className="g-0 align-items-center">
                  <Col md={3} className="text-center p-3">
                    <img
                      src={item.image}
                      alt={item.title}
                      style={{
                        height: "100px",
                        objectFit: "contain",
                      }}
                    />
                  </Col>

                  <Col md={6}>
                    <Card.Body>
                      <Card.Title className="fs-6">
                        {item.title}
                      </Card.Title>
                      <p className="fw-bold">
                        Price : ₹{item.price}
                      </p>

                      {/* Quantity controls */}
                      <div className="d-flex align-items-center gap-2">
                        <Button
                          variant="outline-secondary"
                          size="sm"
                          onClick={() =>
                            updateQuantity(item.id, -1)
                          }
                        >
                          −
                        </Button>

                        <Form.Control
                          value={item.qty}
                          readOnly
                          style={{ width: "50px", textAlign: "center" }}
                        />

                        <Button
                          variant="outline-secondary"
                          size="sm"
                          onClick={() =>
                            updateQuantity(item.id, 1)
                          }
                        >
                          +
                        </Button>
                      </div>
                    </Card.Body>
                  </Col>

                  <Col md={3} className="text-center">
                    <Button
                      variant="danger"
                      onClick={() => removeFromCart(item.id)}
                    >
                      Remove
                    </Button>
                  </Col>
                </Row>
              </Card>
            ))}
          </Col>

          {/* Order Summary */}
          <Col md={4}>
            <Card className="shadow-sm">
              <Card.Body>
                <h5 className="mb-3">Order Summary</h5>

                <div className="d-flex justify-content-between">
                  <span>Items</span>
                  <span>{cart.length}</span>
                </div>

                <div className="d-flex justify-content-between">
                  <span>Total</span>
                  <span className="fw-bold">
                    ₹{total.toFixed(2)}
                  </span>
                </div>

                <Button
                  variant="success"
                  className="w-100 mt-3"
                >
                  Proceed to Checkout
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      )}
    </Container>
  );
};

export default Cart;
