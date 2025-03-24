import React from "react";
import { InfiniteMovingCards } from "./ui/InfiniteCard";
import { companies, testimonials } from "@/data";

const Testimonials = () => {
  return (
    <div className="py-20" id="testimonials">
      <h1 className="heading">
        Hear from our
        <span className="text-purple"> Happy Clients</span>
      </h1>
      <div className="flex flex-col items-center justify-center p-4 gap-x-24 gap-y-8 mt-10">
        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="slow"
        />

        <div className="flex flex-wrap justofy-center gap-4 md:gap-16 mt-10 ">
          {companies.map(({ id, img, name, nameImg }) => (
            <div className="flex md:max-w-60 max-w-32 gap-2" key={id}>
              <img src={img} alt={name} className="md:w-10 w-5" />
              <img src={nameImg} alt={name} className="md:w-24 w-20" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
