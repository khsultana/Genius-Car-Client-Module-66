import React from "react";

const ServiceCard = ({ service }) => {
  const { price, title, img } = service;
  return (
    <div>
      <div className="card card-compact w-80 bg-base-100 shadow-xl">
        <figure>
          <img src={img} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p className="text-orange-600 font-semibold text-xl">
            Price : $ {price}
          </p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary rounded-none">Next to go</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
