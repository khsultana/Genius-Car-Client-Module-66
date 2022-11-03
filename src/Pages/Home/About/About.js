import React from "react";
import image1 from "../../../assets/images/about_us/parts.jpg";
import image2 from "../../../assets/images/about_us/person.jpg";
const About = () => {
  return (
    <div className="hero  ">
      <div className=" hero-content flex-col lg:flex-row">
        <div className="relative w-1/2">
          <img
            alt=""
            src={image2}
            className="w-4/5 h-full rounded-lg shadow-2xl"
          />
          <img
            alt=""
            src={image1}
            className="w-3/5 top-1/2 right-5 absolute
           rounded-lg shadow-2xl"
          />
        </div>
        <div className="w-1/2">
          <p className="my-5 text-2xl font-bold text-orange-600">About Us</p>
          <h1 className="text-4xl font-bold">
            We Are Qualified
            <br />
            & of Experience
            <br />
            in this field
          </h1>
          <p className="py-3">
            Find Car doctor stock images in HD and millions of other
            royalty-free stock photos, illustrations and vectors in the
            Shutterstock collection.
          </p>
          <p className="py-3">
            The Car Doctor will see you now: the quality garage for professional
            service, maintenance and reliable repairs to cars, vans and 4x4s in
            Ennis, Co.{" "}
          </p>
          <button className="btn btn-success rounded-lg">Get More Info</button>
        </div>
      </div>
    </div>
  );
};

export default About;
