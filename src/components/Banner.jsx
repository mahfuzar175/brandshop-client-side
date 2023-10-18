import React from 'react';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div
      className="hero min-h-screen"
      style={{
        backgroundImage:
          "url(https://i.ibb.co/KGMs4kx/Banner.jpg)",
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-left text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-2xl lg:text-7xl font-bold">
            Healthy <br />
            <span>Smoothy</span>
          </h1>
          <p className="mb-5">
          Indulge in a beverage lover's paradise at our online store! Discover a handpicked selection of top-quality drinks from around the world. From rare brews to classic favorites, find your perfect pour with us. Cheers to exceptional taste! 🥂
          </p>
          <div
            data-aos="fade-left"
            data-aos-anchor="#example-anchor"
            data-aos-offset="500"
            data-aos-duration="500"
          >
            {" "}
            <Link to="/contactUs">
              <button className="btn btn-secondary normal-case text-lg font-bold">
               Buy Now!!!
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
    );
};

export default Banner;