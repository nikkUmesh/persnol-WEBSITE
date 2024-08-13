import { useState } from "preact/hooks";
import React from "react";

function Services() {
  const [box, setBox] = useState({
    box1: ``,
    box2: ``,
    box3: ``,
  });
  return (
    <>
      <div className="main-container py-10">
        <h1 className="text-4xl font-bold text-center underline ">
          My Services
        </h1>
        <div className="services-container flex mt-10 space-x-5 px-5">
          <div className="hover:bg-slate-200 cursor-pointer bg-gray-100 p-5 text-center space-y-4 shadow-lg rounded-lg">
            <i class=" text-4xl fa-brands fa-aws"></i>
            <h1 className="text-3xl">Web Development</h1>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem
              facere aliquam culpa quisquam at sapiente dicta ratione
              reprehenderit eius iusto!
            </p>
            <button className="bg-orange-500 px-3 py-1 text-1xl rounded-full shadow-lg hover:bg-blue-400">
              Check
            </button>
          </div>
          <div className=" hover:bg-slate-200 cursor-pointe bg-gray-100 p-5 text-center space-y-4 shadow-lg rounded-lg">
            <i class=" text-4xl fa-solid fa-server"></i>
            <h1 className="text-3xl">Backend Development</h1>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem
              facere aliquam culpa quisquam at sapiente dicta ratione
              reprehenderit eius iusto!
            </p>
            <button className="bg-orange-500 px-3 py-1 text-1xl rounded-full shadow-lg hover:bg-blue-400">
              Check
            </button>
          </div>
          <div className="hover:bg-slate-200 cursor-pointer bg-gray-100 p-5 text-center space-y-4 shadow-lg rounded-lg">
            <i class=" text-4xl fa-solid fa-mobile-screen"></i>
            <h1 className="text-3xl">Android Development</h1>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem
              facere aliquam culpa quisquam at sapiente dicta ratione
              reprehenderit eius iusto!
            </p>
            <button className="bg-orange-500 px-3 py-1 text-1xl rounded-full shadow-lg hover:bg-blue-400">
              Check
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Services;
