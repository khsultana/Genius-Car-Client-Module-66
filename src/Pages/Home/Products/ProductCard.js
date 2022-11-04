import React from "react";
import { FaStar } from 'react-icons/fa';


const ProductCard = ({ product }) => {
  //   console.log(product.facility);
  const { image, title } = product;
  console.log(product)

  return (

    <div className=" card card-compact w-80 bg-base-100 shadow-xl">
      <figure>
        <img src={image} alt="" />
      </figure>

      <h2 className="text-xl text-center font-semibold text-orange-600">{title}</h2>
      <div className="flex items-center justify-center gap-2 py-2">
        < FaStar className="text-orange-600"></FaStar>
        < FaStar className="text-orange-600"></FaStar>
        < FaStar className="text-orange-600"></FaStar>
        < FaStar className="text-orange-600"></FaStar>
      </div>


    </div>

  );
};

export default ProductCard;
