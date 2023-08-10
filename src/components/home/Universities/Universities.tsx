import { logoSlides } from "@/utils/constants";
import "./Universities.css";
import React from "react";

const Universities = () => {
  return (
    <section className="py-12 sm:py-16 lg:py-20">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="xl:flex xl:items-center xl:justify-between">
          <div className="flex w-full space-x-4 moving-text items-center">
            {logoSlides.map((item, index) => (
              <img
                key={`logo-${index}`}
                className="object-contain w-auto h-32 mx-auto mix-blend-multiply"
                src={item}
                alt=""
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Universities;