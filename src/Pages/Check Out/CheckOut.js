import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";

const CheckOut = () => {
  const { _id, title, price } = useLoaderData();
  const { user } = useContext(AuthContext);
  const handlePlaceOrder = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = `${form.firstName.value} ,${form.lastName.value}`;
    const email = user?.email || "unregistered";
    const phone = form.phone.value;
    const message = form.message.value;

    const order = {
      service: _id,
      serviceName: title,
      servicePrice: price,
      customer: name,
      email,
      phone,
      message,
    };
    if (phone.length > 10) {
      alert("Please give the 10 character ");
    } else {
    }

    fetch("https://genius-car-server-module-66-beta.vercel.app/orders", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(order),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          alert("Order Placed Successfully");
          form.reset();
        }
      })
      .catch((err) => console.error(err));
  };

  return (
    <div>
      <h2 className="text-4xl">{title}</h2>
      <h3 className="text-2xl">Price : ${price}</h3>
      <form onSubmit={handlePlaceOrder}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-6 ">
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            className="input rounded-none input-bordered input-warning w-full "
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            className="input rounded-none input-bordered input-warning w-full "
          />
          <input
            type="text"
            name="phone"
            placeholder="Your Phone"
            className="input rounded-none input-bordered input-warning w-full "
            required
          />
          <input
            type="text"
            name="email"
            placeholder="Your Email"
            className="input rounded-none input-bordered input-warning w-full"
            defaultValue={user?.email}
            readOnly
          />
        </div>
        <textarea
          className=" w-full h-80 textarea textarea-warning rounded-none mt-6 mb-6"
          name="message"
          placeholder="Text Area"
        ></textarea>
        <button className="btn btn-wide rounded-none mb-4">Place Order</button>
      </form>
    </div>
  );
};

export default CheckOut;
