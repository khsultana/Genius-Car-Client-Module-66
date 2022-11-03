import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("services.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div>
      <div className="text-center mb-4">
        <p className="py-3 text-2xl font-bold text-orange-600">Services</p>
        <h2 className=" py-3 text-5xl font-semibold">
          Browse Our Service Area
        </h2>
        <p className="py-3">
          If you want to buy car tires, batteries, lubricant oil, IPS, UP, etc.,
          you can go to Rahimafrooz. <br /> They have earned praise for customer
          service.
        </p>
      </div>
      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {products.map((product) => (
            <ProductCard
              key={product.service_id}
              product={product}
            ></ProductCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
