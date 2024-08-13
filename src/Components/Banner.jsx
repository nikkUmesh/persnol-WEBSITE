import React from "react";
import bannerImage from "../assets/p3.jpg";
import bannerBackground from "../assets/banner_wallpaper2.jpg";
import Typed from "typed.js";
import { useEffect, useRef } from "preact/hooks";

const Banner = () => {

  const el=useRef(null);
  useEffect(()=>{
    const typed = new Typed(el.current, {
      strings: ["Android Developer", "Frontend Developer", "Backend Developer", "Java Fullstack Developer"], // Strings to display
      // Speed settings, try diffrent values untill you get good results
      startDelay: 100,
      typeSpeed: 50,
      backSpeed: 10,
      backDelay: 100,
      loop: true
    });

    // Destropying
    return () => {
      typed.destroy();
    };
  

  },[]);

  return (
    <div
      style={{
        backgroundImage: `url(${bannerBackground})`,
        backgroundSize: "cover",
      }}
      className="main-container flex items-center text-white h-96 "
    >
      <div className="w-full flex justify-center">
        {/* text */}
        <div className="w-2/3 ms-10">
          <h3 className="mt-3 text-2xl font-semibold">Hi, I am</h3>
          <h1 className=" text-4xl font-bold">Umesh vishawakarma</h1>
          <h2 className="mt-3 text-2xl"> I am <span className=" font-bold underline" ref={el}></span></h2>
          <p className="mt-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
            temporibus sit, laboriosam vel quasi repellat corporis voluptatem
            exercitationem nemo ducimus laudantium officiis,
          </p>
           <br />
          <div className="icons-container flex space-x-4">
            <a className="border hover:bg-orange-600 cursor-pointer py-1 w-10 h-10 rounded-xl flex justify-center bg-gray-800 ">
              <i class="fa-brands text-2xl fa-facebook"></i>
            </a>
            <a className=" border hover:bg-orange-600 cursor-pointer py-1 w-10 h-10 rounded-xl flex justify-center bg-gray-800 ">
              <i class="fa-brands text-2xl fa-instagram"></i>
            </a>
            <a className="border hover:bg-orange-600 cursor-pointer py-1 w-10 h-10 rounded-xl flex justify-center bg-gray-800 ">
              <i class="fa-brands text-2xl fa-youtube"></i>
            </a>
            <a className="border hover:bg-orange-600 cursor-pointer py-1 w-10 h-10 rounded-xl flex justify-center bg-gray-800 ">
              <i class="fa-brands text-2xl fa-linkedin"></i>
            </a>
          </div>
          <br />
          <a
            className="bg-orange-500 px-3 py-1 text-1xl rounded-full shadow-lg hover:bg-blue-400"
            href="/contact"
          >
            Contact Me
          </a>
        </div>
      </div>
      <div className="w-full flex justify-center">
        {/*  image */}
        <img
          className="size-80 rounded-full shadow-md w-fit "
          src={bannerImage}
        />
      </div>
    </div>
  );
};

export default Banner;
