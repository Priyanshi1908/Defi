import React from 'react'
import heroVid from '../assets/video.mp4'

const Hero = () => {
  return (
    <div className='w-full h-[90vh] top-[90px]'>
   <video className='object-cover h-full w-full absolute -z-10' src={heroVid} autoPlay loop muted/>
           
            <div className='w-full h-[90%] flex  flex-col justify-center items-center text-center text-white px-4'>
                <h1>Decentralized</h1>
                <h1 className='py-2'><span className='text-[var(--primary-blue)]'>Trading</span> Protocol</h1>
                <p className='text-xl py-4'>Guaranteed liquidity trading for millions of users and top Ethereum applications</p>
                <div>
                    <button className='m-2'>Use Defi</button>
                    <button1 className='m-2 bg-transparent outline outline-[#0fa8c3] rounded-3xl text-[#74e4f8] py-2 px-10 font-light text-lg '>FAQ</button1>
                </div>
            </div>
            <div>
                <p className='text-white text-center text-2xl'>
                    Total Volume Secured: ₹42,769,184,624.86
                </p>
            </div>

    </div>
     


  )
}

export default Hero