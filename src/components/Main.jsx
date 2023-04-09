import React from 'react'
import hero1 from "../assets/hero1.jpg"

const Main = () => {
  return (
    <div>
        <img src={hero1} alt="" className='h-full bg-cover bg-no-repeat relative'/>
        <div><h1 className='text-[70px] font-bold top-[90px] absolute text-center text-white'>Welcome to Shyambook - India's No. 1 Cricket Betting ID Provider</h1>
        <p className='text-[20px] font-medium top-[310px] left-[32%] absolute text-center text-white'>Bet on your favorite cricket matches<br/> with Shyambook's superfast withdrawal and professional support.</p></div>
    </div>
  )
}

export default Main