import React from 'react'
import { FaGlassWhiskey,FaCheck,FaAngleRight } from "react-icons/fa";

const Middle1 = (props) => {
  return (
  <>
     {props.img ?   
        <div className={`flex items-center justify-center bg-[${props.color}]`}>   
    <div className={`w-[500px] h-[${props.size}px] py-[48px]`}>
      
        <div className='text-[48px] font-bold leading-none'>Send money in a heartbeat</div>
        <div className='h-screen my-10'>
           <div>
           <div className='flex items-center font-bold text-[30px]'><FaGlassWhiskey  /><h1 className='px-[48px]'>Simple</h1></div>
            </div> 
            <div className='flex '>
            <h2></h2> <h3 className='px-[78px]'>Send to mobile wallets or cash pickup points in 20+ countries in just a few taps.</h3>
            </div>

            <div>
           <div className='flex items-center font-bold text-[30px]'><FaGlassWhiskey  /><h1 className='px-[48px]'>Simple</h1></div>
            </div> 
            <div className='flex '>
            <h2></h2> <h3 className='px-[78px]'>Send to mobile wallets or cash pickup points in 20+ countries in just a few taps.</h3>
            </div>
            <div>
           <div className='flex items-center font-bold text-[30px]'><FaGlassWhiskey  /><h1 className='px-[48px]'>Simple</h1></div>
            </div> 
            <div className='flex '>
            <h2></h2> <h3 className='px-[78px]'>Send to mobile wallets or cash pickup points in 20+ countries in just a few taps.</h3>
            </div>
            <div>
           <div className='flex items-center font-bold text-[30px]'><FaGlassWhiskey  /><h1 className='px-[48px]'>Simple</h1></div>
            </div> 
            <div className='flex '>
            <h2></h2> <h3 className='px-[78px]'>Send to mobile wallets or cash pickup points in 20+ countries in just a few taps.</h3>
            </div>
        </div>
        </div>
        <div className={`w-[500px] h-[${props.size}px] py-[48px] `}>
        <img  src={`${props.image}`} />
        </div>
     </div>   :

     <div className={`flex items-center justify-center bg-[${props.color}]`}>   
      <div className={`w-[500px] h-[${props.size}px] py-[48px] flex items-center `}>
            <FaCheck  size='200px' />
     </div>
     <div className={`w-[500px] h-[${props.size}px] py-[78px]` }>
    <div className='text-[48px] font-bold leading-none bottom-[200px]'>You're safe here</div>
    <div className='flex items-center my-4 text-[17px]'><FaAngleRight color='#e69655' size='1.5rem'  /><p className='px-4'>Your data and transfers are encrypted and kept confidential</p></div>
    <div className='flex items-center my-4 text-[17px]'><FaAngleRight color='#e69655' size='1.5rem' /><p className='px-4'>We are regulated by the Swedish Financial Supervisory Authority (Inst. No. 45583)</p></div>
    <div className='flex items-center my-4 text-[17px]'><FaAngleRight color='#e69655' size='1.5rem' /><p className='px-4'>Easy tracking – you always know where your money is</p></div>
    <div className='flex items-center my-4 text-[17px]'><FaAngleRight color='#e69655' size='1.5rem' /><p className='px-4'>We partner with world-leading banks and payment providers, so your money arrives safely every time</p></div>
    <div className='flex items-center my-4 text-[17px]'>
    <p className='px-4'><img src={'https://transfergalaxy.com/images/app-icons/logo_visa.svg'}/></p>
    <p className='px-4'><img src={'https://transfergalaxy.com/images/app-icons/logo_mastercard.svg'}/></p>
    <p className='px-4'><img src={'https://transfergalaxy.com/images/app-icons/logo_trustly.svg'}/></p>
    <p className='px-4'><img src={'https://transfergalaxy.com/images/app-icons/logo_maestro.svg'}/></p>
    </div>
    </div>
   
    </div>}
    </>
    )
}

export default Middle1
