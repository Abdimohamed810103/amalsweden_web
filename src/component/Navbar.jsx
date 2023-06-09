import React from 'react'

const Navbar = () => {
  return (
    <div className='flex justify-center h-full'>
    <div className='flex items-center justify-between px-4 py-8 z-[100] w-[1125px] absolute'>
     
      <div className='flex items-center justify-between w-[50%]'>
        <h1 className='text-white text-2xl font-bold cursor-pointer'>Tawakal logo</h1>
        <h2 className='text-white font-bold cursor-pointer'>How it works</h2>
        <h2 className='text-white font-bold cursor-pointer'>Customer support</h2>
        <h2 className='text-white font-bold cursor-pointer'>Help center</h2>
      </div>
      <div className='flex items-center justify-between w-[30%]'>
        <button className='text-white font-bold text-[16px] px-[45px] py-[12px] rounded-[100px] mx-4 bg-[rgba(255,255,255,.15)]'>English</button>
        <button className='text-white font-bold text-[16px] px-[16px] py-[12px] rounded-[100px] mx-4 bg-[rgba(255,255,255,.15)]'>Login</button>
        <button className='text-white font-bold text-[16px] px-[16px] py-[12px] rounded-[100px] mx-4 bg-[#D26450]'>Signup</button>
      </div>
    </div>
    </div>
  )
}

export default Navbar
