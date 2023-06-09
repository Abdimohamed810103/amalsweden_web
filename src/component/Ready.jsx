import React from 'react'

const Ready = (props) => {
  return (
    <div className={`flex items-center justify-center bg-[${props.color}]`}>   
    <div className={`w-[500px] h-[${props.size}px] py-[48px] flex h-screen`} >
      
        <div className='text-[48px] font-bold leading-none '>Ready to get started?
        <div className='text-[18px] py-3 text-center'>Your first transfer is fee-free.</div>
        <button className='text-black font-bold text-[16px] px-[100px] py-[12px] w-[80%] rounded-[100px] mx-4 bg-white'>Get started</button>
        
        </div>
     

        </div>
        <div className={`w-[500px] h-[${props.size}px] py-[48px] `}>
        <img  src={`${props.image}`} />
        </div>
     </div> 
  )
}

export default Ready
