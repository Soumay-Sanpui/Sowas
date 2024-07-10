import React from 'react'

const Navbar = () => {
  const navLinks = [
    '/home.png',
    '/about.png',
    '/service.png',
    '/portfolio.png',
    '/subscribe.png'
  ]
  return (
    <nav  className='p-4 py-6 flex flex-col gap-[3vw] bg-[#232528] rounded-full'>
        {
            navLinks.map((link,index)=>(
                <div key={index} className='hover:cursor-pointer rounded-full hover:bg-slate-600 p-1'>
                    <img src={link} />
                </div>
            ))
        }
    </nav>
  )
}

export default Navbar