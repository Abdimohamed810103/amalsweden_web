import { useState } from "react";
import ReactFlagsSelect from "react-flags-select";
import React from 'react'

const Main = () => {
  const [select, setSelect] = useState("SE");
  const [select1, setSelect1] = useState("");
  const onSelect = (code) => setSelect(code);
  const onSelect1 = (code1) => setSelect1(code1);
  console.log("SELECT", select);
  return (
    <div className='w-full h-[900px] text-white'>
       <div className='absolute w-full h-[900px] bg-gradient-to-bl from-[rgba(0,0,0,0.58)]'></div>
      <div className=' w-full h-full'>
        <img className='w-full h-full sm:w-full object-cover' src={`https://transfergalaxy.com//media/4503777/transfer_galaxy-people_hugging.jpg`} />

       <div className='absolute w-full top-[20%] flex justify-center'>
        <div className='flex flex-col justify-between items-center'>
          <h1 className='text-[70px] font-bold '>Send money to your loved ones</h1>
          <h3 className='text-[25px] '>Reach beyond borders and be there for those you love.</h3>
          <div className='w-[40%] h-[80%] bg-white rounded-[10px] px-4 py-8 my-8'>
           
            <label for="small" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">I'm sending from</label>
            <div className='relative text-black  bg-white w-[350px] h-[350] rounded-lg '>
            <ReactFlagsSelect
        selected={select}
        onSelect={onSelect}
        countries={["fi", "GB", "IE", "IT", "NL", "SE"]}
        /*showSelectedLabel={showSelectedLabel}
        selectedSize={selectedSize}
        showOptionLabel={showOptionLabel}
        optionsSize={optionsSize}
        placeholder={placeholder}
        searchable={searchable}
        searchPlaceholder={searchPlaceholder}
        alignOptionsToRight={alignOptionsToRight}
        fullWidth={fullWidth}
        disabled={disabled} */
      />
      <br />

      <div className="react-tel-input flag us"></div>
      
            </div>
            <label for="small" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">To someone dear in</label>
            <div className='relative text-black  bg-white w-[350px] h-[350] rounded-lg '>
            <ReactFlagsSelect
        selected={select1}
        onSelect={onSelect1}
        countries={["fi", "GB", "IE", "IT", "NL", "SE"]}
        /*showSelectedLabel={showSelectedLabel}
        selectedSize={selectedSize}
        showOptionLabel={showOptionLabel}
        optionsSize={optionsSize}
        placeholder={placeholder}
        searchable={searchable}
        searchPlaceholder={searchPlaceholder}
        alignOptionsToRight={alignOptionsToRight}
        fullWidth={fullWidth}
        disabled={disabled} */
      />
      <br />

      <div className="react-tel-input flag us"></div>
      
            </div>
            <button className='text-white font-bold text-[16px] px-[116px] py-[12px] w-[92%] rounded-[100px] mx-4 bg-[#D26450]'>Get started</button>

          </div>
        </div>
        </div>  
     </div>
    </div>
  )
}
 
export default Main
