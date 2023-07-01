import React from 'react'
import img2 from '../assets/subscribe.jpeg'
const Subscribe = () => {
  return (
    <div style={{
      backgroundImage:{img2}
    }}
    className='w-full px-4 py-16  text-white text-center bg-center relative bg-my_bg_image bg-contain  flex justify-center items-center'>
                {/* <img className='object-cover h-full w-full absolute -z-10 mix-blend-overlay ' src={img2} alt="/" /> */}
                <div  className='flex flex-col space-y-4 justify-between '>
                  <div>
                  <h1 className='mt-40 '>Join Our DeFi Community </h1>
                  </div>

        <div className='py-4'>
            <input className='p-3 rounded-3xl mr-4' type="email" placeholder='Enter your email'  />
            <button>Sign Up</button>
       </div>
       <div className='flex justify-center items-center py-2'>
        <input className='mr-2' type="checkbox"  />
        <p>Yes, I agree to receive email communications from DeFi.</p>
        </div>
        </div>
    </div>
  )
}

export default Subscribe