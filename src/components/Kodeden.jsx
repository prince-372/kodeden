import React from 'react'
import Commanbtn from './Commanbtn'
import kodeden from '../assets/images/kodeden.png'
import { Corveline1 } from './Icons'

const Kodeden = () => {
  return (
    <div data-aos="fade-down" className=' position-relative '>
      <span className=' position-absolute kodeden'><Corveline1/></span>
      <div className=' container py-lg-100 py-50'>
      <div className="row align-items-center flex-column-reverse flex-lg-row">
          <div className="col-lg-7 col-12">
              <h2 className=' font-jost fw-medium fs-xl1 lh-xl1 text-white text-center text-lg-start'>our Guarantee</h2>
              <p className=' font-jost fw-normal fs-lg lh-lg1 text-lightgray1 max-w-592 mx-auto mx-lg-0  text-center text-lg-start'>If you decide coding isn’t right for you within 15 days of starting the program, we’ll give you your money back. </p>
              <p className=' font-jost fw-semibold fs-sm1 lh-sm gradint-clr text-center text-lg-start'>I want to become a software engineer in 6 months!</p>
              <div className=' d-inline-block d-flex justify-content-center justify-content-lg-start '>
                  <Commanbtn text='Book a Call NOW'/>
              </div>
          </div>
          <div className="col-lg-5 col-12">
              <img className=' w-100 ' src={kodeden} alt="kodeden" />
          </div>
      </div>
      </div>
    </div>
  )
}

export default Kodeden