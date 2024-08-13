import React from 'react'

function Footer() {
  return (
    <small className='py-2 border bg-gray-200 flex justify-between px-20 '>
      <div className='space-x-5'> 
        <p>@2024    Umesh sharma <span className='pl-5'>All Rights Reserved</span>
        </p>
         </div>
      <div className='space-x-3'>
        <a href="/about"className='hover:underline'>About</a>
        <a href="/about"className='hover:underline'>Privacy policy</a>
        <a href="/about"className='hover:underline'>Licensing</a>
        <a href="/about"className='hover:underline'>Contact</a>
      </div>
    </small>
  )
}

export default Footer
