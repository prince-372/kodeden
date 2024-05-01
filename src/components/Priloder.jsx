import React from 'react'
import logo from '../assets/images/kodeden.png'

const Priloder = () => {
  return (
    <>
<div className=' position-fixed h-100 w-100 bg-black '>
    <div className=' d-flex flex-column  justify-content-center align-items-center h-100  '>
        <img className=' pri-logo' src={logo} alt="logo" />
        <div class="loading-wave">
  <div class="loading-bar"></div>
  <div class="loading-bar"></div>
  <div class="loading-bar"></div>
  <div class="loading-bar"></div>
</div>
    </div>
    </div>
    </>
  )
}

export default Priloder