import React, { useEffect, useState } from "react";
import Empty from "../assets/Empty.png";
import { useNavigate } from "react-router-dom";
import { Button} from "react-bootstrap";
const WishList = () => {
  const [wishList, setWishList] = useState([]);
  const navigate=useNavigate();

  useEffect(() => {
    const existed = JSON.parse(localStorage.getItem("wishListItems")) || [];
    setWishList(existed);
  }, []);

  const removeFromWishList = (productId) => {
    const updateList = wishList.filter((item) => item.id !== productId);
    localStorage.setItem("wishListItems",JSON.stringify(updateList));
    setWishList(updateList);
  };

  return (
    <div className="container py-4 vh-100">
      <h2 className="text-center mb-4">Welcome to Wish List</h2>

      {wishList.length === 0 ? (
        <img
          src={Empty}
          alt="Empty Wishlist"
          className="w-25 mt-5 d-block mx-auto"
        />
      ) : (
        <div className="row">
          {wishList.map((product) => (
            <div className="col-md-3 mb-4" key={product.id}>
              <div className="card h-100 shadow-sm">
                <img
                  src={product.image}
                  alt={product.title}
                  className="card-img-top p-3"
                  style={{ height: "180px", objectFit: "contain" }}
                />
                <div className="card-body">
                  <h6>{product.title.slice(0, 40)}...</h6>
                  <p className="fw-bold">Price : ₹{product.price}</p>
                  <Button
                    variant="success"
                    className="w-100 mb-2"
                    onClick={() => navigate("/details", { state: product })}
                  >
                    More Details
                  </Button>
                  <button className="btn btn-danger btn-sm w-100" onClick={()=>removeFromWishList(product.id)}>
                    Remove from Wishlist
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default WishList;
