import React from 'react'
import img from '../assets/terminal.png'

const Developers = () => {
  return (
    <div className='text-white w-full bg-black'>
        <div className='max-w-[1240px] px-4 py-16 md:flex'>
            <div>
                <h1 className='ml-4 mt-28'>Superpowers for DEFI developers.</h1>
            
            <p className='ml-4 mt-3 text-lg'>
            Checkout the <span className="blue">documentation</span>, the <span className="blue">quick start</span>  or a guide below to
            integrate your project with thousands of tokens and billions of
            liquidity.
            </p>
            </div>
            <div className='flex justify-center py-16 ml-40 w-[100px]'>
                <img className='max-w-[250px] shadow-lg shadow-cyan-500/50  mb-10 top-0 inset-x-0' src={img} alt="/" />
            </div>

        </div>

    </div>
  )
}

export default Developers