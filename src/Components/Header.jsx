import { useState } from 'preact/hooks';
import React from 'react'

function Header() {

  const[brandName, setBrandName]=useState("Umesh vishawakarma")
  const[menuLinks, setMenuLinks]=useState([
    {
      title: "Home",
      link: "/home",
      id: 1,
    },
    {
      title: "About",
      link: "/about",
      id: 2,
    },
    {
      title: "Skills",
      link: "/skills",
      id: 3,
    },
    {
      title: "Portfolio",
      link: "/portfoio",
      id: 4,
    },
    {
      title: "Contact",
      link: "/contact",
      id: 4,
    },
 
  ])
  const [actionButton, setActionButton] = useState({
    title: "Hire Me",
    link: "/hire-me"
  }) ;

  return (
    <>
      <div className=' h-14  main flex justify-between items-center px-5 bg-gray-200'>
       <div>{ /* brend logo*/}
       <h1 className='text-2xl font-bold '>Umesh-vishawakarma</h1>
       
       </div>
       <div className='space-x-4 from-neutral-300'>{ /* mainu links*/}
         {menuLinks.map((link) =>(
          <a key={link.id} href={link.link} className='hover:text-orange-600'>
            {link.title}
          </a>
         ))}

       {/*  <a href="/home" className='hover:text-orange-600'>Home</a>
        <a href="/about" className='hover:text-orange-600'>About</a>
        <a href="/skills" className='hover:text-orange-600'>Skills</a>
        <a href="/Portfolio" className='hover:text-orange-600'>Portfolio</a>
        <a href="/Contact" className='hover:text-orange-600'>Contact</a> */}
       </div>
       <div>{ /* buttons*/}</div>
       <a href={actionButton.link} className="bg-orange-500 px-3 py-1 text-1xl rounded-full shadow-lg hover:bg-blue-400">
         {actionButton.title}   
      </a>
      </div>
    </>
  )
}

export default Header;
