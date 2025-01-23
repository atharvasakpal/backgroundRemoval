import React, { useState } from 'react'
import { assets } from '../assets/assets';

const Bgslider = () => {

    const [sliderPosition, setSliderPosition] = useState(50);

    const handleSliderChange = (e)=>{
        setSliderPosition(e.target.value)
    }

  return (
    <div className='pb-10 md:py-20 mx-2'>
      <h1 className='mb-12 sm:mb-20 text-center text-2xl md:text-3xl lg:text-4xl mt-4 font-semibold bg-gradient-to-r from-slate-900 to-slate-500 bg-clip-text text-transparent'>
        Remove Background with High <br />Quality and Accuracy
      </h1>

        <div className='relative w-full max-w-3xl overflow-hidden m-auto rounded-xl'>
        {/* {Background Image} */}
        <img src={assets.image_w_bg} style={{clipPath:`inset(0 ${100.2 - sliderPosition}% 0 0)`}} alt="" />

        {/* {Foreground image} */}
        <img src={assets.image_wo_bg}  className='absolute top-0 left-0 w-full h-full 'style={{clipPath:`inset(0 0 0  ${ sliderPosition}%)`}} alt="" />



        {/* {slider} */}
        <input type="range" min={0} max={100} value={sliderPosition} onChange={handleSliderChange} className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full z-10 slider' />
        </div>

    </div>
  )
}

export default Bgslider
