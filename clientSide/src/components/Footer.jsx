import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='flex items-center justify-between gap-4 p-4 lg:p-44 py-3'>
      <img width={150} src={assets.logo} alt="" />
      <p className='flex-1 border-l border-gray-400 pl-4 text-sm text-gray-500 max-sm:hidden'>All rights reserved. Atharva Sakpal.</p>
        <div className='flex gap-1'>
            <img src={assets.facebook_icon} alt="" width={40} />
            <img src={assets.twitter_icon} alt="" width={40} />
            <img src={assets.google_plus_icon} alt="" width={40} />
        </div>
    </div>
  )
}

export default Footer
