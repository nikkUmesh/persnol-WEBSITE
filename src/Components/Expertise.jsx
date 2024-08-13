import React from "react";
import bannerBackground from "../assets/bg1.jpg";

function Expertise() {
  return (
    <>
      <div className="">
        <h1 className=" mb-10 text-4xl font-bold text-center underline ">
          My Expertise
        </h1>
        {/* Expertise box section */}
        <div 
        style={{
            backgroundImage: `url(${bannerBackground})`,
            backgroundSize: "cover",
          }}
        className="box-container flex items-center">
         <div className="flex justify-center pr-4">
        
         {/* text-container */}
          <div className="w-2/3 text-center space-y-3 my-10 text-white">
           
            <h1 className="text-3xl font-semibold">I love these technologies</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
              quidem quaerat, consectetur alias nihil recusandae autem excepturi
              praesentium animi ipsam ullam veritatis rem aliquam voluptas minus
              ea sed impedit dignissimos.
            </p>
            <button className="bg-orange-500 px-3 py-1 text-1xl rounded-full shadow-lg hover:bg-blue-400">Hire me</button>
          </div>
         </div>
          <div className="flex justify-center ">{/* skill container */}
           <div className="flex justify-center  h-fit space-x-3 flex-wrap my-10">
            <p className="bg-gray-300 w-fit px-3 py-1 mt-2 rounded-full hover:bg-orange-500 max-w-xs transition duration-300 ease-in-out hover:scale-110 cursor-pointer">CoreJava</p>
            <p className="bg-gray-300 w-fit px-3 py-1 mt-2 rounded-full hover:bg-orange-500 max-w-xs transition duration-300 ease-in-out hover:scale-110 cursor-pointer">J2EE</p>
            <p className="bg-gray-300 w-fit px-3 py-1 mt-2 rounded-full hover:bg-orange-500 max-w-xs transition duration-300 ease-in-out hover:scale-110 cursor-pointer">Hibernate(ORM Tool)</p>
            <p className="bg-gray-300 w-fit px-3 py-1 mt-2 rounded-full hover:bg-orange-500 max-w-xs transition duration-300 ease-in-out hover:scale-110 cursor-pointer">Spring framework</p>
            <p className="bg-gray-300 w-fit px-3 py-1 mt-2 rounded-full hover:bg-orange-500 max-w-xs transition duration-300 ease-in-out hover:scale-110 cursor-pointer">Spring Boot</p>
            <p className="bg-gray-300 w-fit px-3 py-1 mt-2 rounded-full hover:bg-orange-500 max-w-xs transition duration-300 ease-in-out hover:scale-110 cursor-pointer">ReactJS</p>
            <p className="bg-gray-300 w-fit px-3 py-1 mt-2 rounded-full hover:bg-orange-500 max-w-xs transition duration-300 ease-in-out hover:scale-110 cursor-pointer">JavaScript</p>
            <p className="bg-gray-300 w-fit px-3 py-1 mt-2 rounded-full hover:bg-orange-500 max-w-xs transition duration-300 ease-in-out hover:scale-110 cursor-pointer">Servlet</p>
            <p className="bg-gray-300 w-fit px-3 py-1 mt-2 rounded-full hover:bg-orange-500 max-w-xs transition duration-300 ease-in-out hover:scale-110 cursor-pointer">JSP</p>
            <p className="bg-gray-300 w-fit px-3 py-1 mt-2 rounded-full hover:bg-orange-500 max-w-xs transition duration-300 ease-in-out hover:scale-110 cursor-pointer">MySql</p>
            <p className="bg-gray-300 w-fit px-3 py-1 mt-2 rounded-full hover:bg-orange-500 max-w-xs transition duration-300 ease-in-out hover:scale-110 cursor-pointer">Tailwind CSS</p>
            <p className="bg-gray-300 w-fit px-3 py-1 mt-2 rounded-full hover:bg-orange-500 max-w-xs transition duration-300 ease-in-out hover:scale-110 cursor-pointer">Oracle</p>
            <p className="bg-gray-300 w-fit px-3 py-1 mt-2 rounded-full hover:bg-orange-500 max-w-xs transition duration-300 ease-in-out hover:scale-110 cursor-pointer">JDBC</p>
            
           </div>
          </div>
        </div>
      
      </div>
    </>
  )
}

export default Expertise;
