import React from 'react'
import logo from "../../../assets/img/logo.png"

export const Footer = () => {
  return (
    <footer className='w-full h-36 bg-green-50 flex flex-col justify-center items-center font-semibold'>
        <img src={logo} className="w-12 h-12" />
        <p>LUCKY TRADING GROUP, 2022 All rights reserved</p>
        <p>Privacy Policy</p>
    </footer>
  )
}
