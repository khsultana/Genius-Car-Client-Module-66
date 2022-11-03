import React from "react";

const BannerItem = ({ slider }) => {
  const { image, id, prev, next } = slider;
  return (
    <div id={`slide${id}`} className="carousel-item relative w-full">
      <div className="carousel-image">
        <img src={image} alt="" className="w-full" />
      </div>

      <div className="absolute flex justify-end transform -translate-y-1/2 left-24  top-1/4">
        <h1 className="text-6xl font-bold text-white">
          Adorable
          <br />
          Price for Car
          <br />
          Servicing
        </h1>
      </div>
      <div className="absolute flex justify-end transform -translate-y-1/2 left-24 w-1/2 top-1/2">
        <p className="text-white text-xl">
          There Are Many Variations Of Pessages Of Avilable, But The Majority
          Have Suffered
        </p>
      </div>
      <div className="absolute flex justify-start transform -translate-y-1/2 left-24 w-1/2 top-3/4">
        <button className="btn btn-warning mr-5 rounded-lg  ">
          Discover more
        </button>
        <button className="btn btn-outline btn-warning rounded-lg ">
          Latest Project
        </button>
      </div>
      <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
        <a href={`#slide${prev}`} className="btn btn-circle mr-5">
          ❮
        </a>
        <a href={`#slide${next}`} className="btn btn-circle ">
          ❯
        </a>
      </div>
    </div>
  );
};

export default BannerItem;
