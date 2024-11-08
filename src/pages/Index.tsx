import * as React from "react";
import { createRoot } from "react-dom/client";
import * as logo from "../assets/8bit-logo.webp";
import "../styles/styles.css";
import { initFlowbite } from "flowbite";

const Index = () => {
  React.useEffect(() => {
    initFlowbite();
  }, []);

  return (
    <div>
      <div className="container max-w-screen-xl flex justify-center flex-row flex-wrap mx-auto px-5">
        <div className="py-2">
          <h1 className="text-3xl font-extrabold text-black md:text-5xl lg:text-6xl">
            This is an official{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
              8bit Devplate
            </span>
          </h1>
        </div>

        <div className="py-2">
          <p className="text-lg font-normal text-gray-700 lg:text-xl dark:text-gray-700">
            This 8bit Devplate comes with preset React, Tailwind, Webpack.
          </p>
        </div>

        <div className="py-4">
          <img className="rounded-lg" src={logo}></img>
        </div>
      </div>
    </div>
  );
};

const root = document.getElementById("root");
createRoot(root).render(<Index />);
