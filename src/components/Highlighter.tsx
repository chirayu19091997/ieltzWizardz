import { DirectContacts, Socials } from "@/utils/constants";
import Link from "next/link";
import React from "react";

const Highlighter = () => {
  return (
    <header className="animate__animated animate__slideInDown flex justify-between w-full bg-secondaryColor">
      <div></div>
      <ul className="flex space-x-2 p-2">
        {DirectContacts.slice(0, 1).map((item) => (
          <li key={`direct-${item.title}`}>
            <Link
              href={item.route}
              target="_blank"
              title={item.title}
              className="flex items-center justify-center text-secondaryTextColor border rounded-full"
            >
              <span className="flex items-center justify-center h-7 px-2 space-x-2">
                {item.logo}
                <p>{item.route.split(":")[1]}</p>
              </span>
            </Link>
          </li>
        ))}
        {Socials.map((item) => (
          <li key={`socials-${item.title}`}>
            <Link
              href={item.route}
              target="_blank"
              title={item.title}
              className="flex items-center justify-center rounded-full w-7 h-7 border text-secondaryTextColor"
            >
              {item.logo}
            </Link>
          </li>
        ))}
      </ul>
    </header>
  );
};

export default Highlighter;
