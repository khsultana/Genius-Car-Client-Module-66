import React, { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {
  const [services, setService] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/services")
      .then((res) => res.json())
      .then((data) => setService(data));
  }, []);
  return (
    <div>
      <div className="text-center mb-4">
        <p className="py-3 text-2xl font-bold text-orange-600">Services</p>
        <h2 className=" py-3 text-5xl font-semibold">Our Service Area</h2>
        <p className="py-3">
          If you want to buy car tires, batteries, lubricant oil, IPS, UP, etc.,
          you can go to Rahimafrooz. <br /> They have earned praise for customer
          service.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {services.map((service) => (
          <ServiceCard key={service._id} service={service}>
            {" "}
          </ServiceCard>
        ))}
      </div>
    </div>
  );
};

export default Services;
