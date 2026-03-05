import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";

const BannerShimmer = () => {
  return (
    <div
      className="w-100 bg-secondary bg-opacity-25 mb-3"
      style={{
        height: "350px",
        animation: "pulse 1.5s infinite",
      }}
    ></div>
  );
};

const Banner = () => {
  const [loading, setLoading] = useState(true);

  return (
    <div>
      {/* 🔹 Shimmer while banner loads */}
      {loading && <BannerShimmer />}

      {/* 🔹 Carousel */}
      <Carousel
        onSlid={() => setLoading(false)}
        className={loading ? "d-none" : "d-block"}
      >
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/MA2025/GW/BAU/Unrec/PC/934044814_1._CB551384116_.jpg"
            alt="Slide 1"
            onLoad={() => setLoading(false)}
          />
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images-eu.ssl-images-amazon.com/images/G/31/INSLGW/premium_edit_mar27_2x._CB546733684_.jpg"
            alt="Slide 2"
          />
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG2026/SMB/Mocks/Feb/Dektop_Hero_V1_Clock_2x._CB772681369_.jpg"
            alt="Slide 3"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Banner;
