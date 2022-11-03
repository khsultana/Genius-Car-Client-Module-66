import React from "react";
import img1 from "../../../assets/images/products/1.png";
import img2 from "../../../assets/images/products/2.png";
import img3 from "../../../assets/images/products/3.png";
import img4 from "../../../assets/images/products/4.png";
import img5 from "../../../assets/images/products/5.png";
import img6 from "../../../assets/images/products/6.png";
const ProductCard = ({ product }) => {
  //   console.log(product.facility);
  const { price, facility } = product;

  return (
    <div>
      <div className="card card-compact w-80 bg-base-100 shadow-xl">
        <figure>
          <img src={img3} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{facility[0].name}</h2>
          <p className="text-orange-600 font-semibold text-xl">
            Price : ${price}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
