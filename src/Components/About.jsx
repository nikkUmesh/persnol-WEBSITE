import React from "react";
import { useState } from "preact/hooks";
import bannerImage from "../assets/p1.jpg";
import bannerBg from "../assets/banner_wallpaper3.jpg";
const About = () => {
  const [data, setData] = useState({
    Image: bannerImage,
    title: "Java Backend Developer",
    desc1: ` Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia
              natus tenetur, pariatur molestiae quis quos culpa ipsa recusandae
              ipsum iste!`,
    desc2: ` Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum vel
              temporibus minima laborum facere explicabo excepturi magni ex
              facilis impedit tempore odit beatae recusandae, error illum
              repudiandae quam nemo expedita.`,
    actionButton: {
      title: "Read More...",
      link: "/readmore",
    },
  });
  return (
    <div
    className="main-container py-10 bg-gray-100 ">
      <h1 className="text-center pb-12 text-4xl underline font-bold ">
        About me
      </h1>

      <div
      /* style={{
        backgroundImage: `url(${bannerBg})`,
        backgroundSize: "cover",
      }} */
      className="flex items-center">
        {/* image container */}
        <div className="w-full size-96 flex justify-center">
          <img
            className="size-96 h-96 rounded-full shadow-md w-fit"
            src={data.Image}
            alt="Umesh sharma"
          />
        </div>

        {/* text container */}
        <div className="w-full flex justify-center">
          <div className="space-y-3 w-2/3">
            <h1 className="text-3xl font-semibold">{data.title}</h1>
            <p>{data.desc1}</p>
            <p>{data.desc2}</p>
            <button className="bg-orange-500 px-3 py-1 text-1xl rounded-full shadow-lg hover:bg-blue-400">
              {data.actionButton.title}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
