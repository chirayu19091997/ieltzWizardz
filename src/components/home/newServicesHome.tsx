import React from "react";
import edFloat from "../../assets/animations/edfloat.json";
import NewServiceItem from "@/components/home/ServicesHomeBook/newServiceItem";
import Animator from "../Animator";

const NewServicesHome = () => {
  return (
    <section className="py-12 bg-gray-100 lg:py-24">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
          <Animator
            animationData={edFloat}
            className={"h-[80vh] max-md:hidden"}
          />
          <NewServiceItem />
        </div>
      </div>
    </section>
  );
};

export default NewServicesHome;
