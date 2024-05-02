import React from 'react'
import men from '../assets/images/men-with-laptop.webp';
import Commanbtn from './Commanbtn';
import { Corveline1 } from './Icons';

const Course = () => {
  return (
    <>
        <div data-aos="fade-down" className=' container py-lg-150 py-50 overflow-hidden '>
          <div className=' row justify-content-center align-items-center flex-column-reverse flex-lg-row'>
           <div className=' col-lg-7 col-12 position-relative pt-3 pt-lg-0 '>
        <span className=' position-absolute corveline2'><Corveline1/></span>
          <h2 className=' font-jost fw-medium  fs-xl1 text-white max-w-677 lh-xl1 mx-auto mx-lg-0  text-center text-lg-start'>What is KodeDen's <span className=' gradint-clr'>6-Month</span> Software Engineering Course?</h2>
          <ul>
            <li className=' list-dot font-jost fw-normal fs-sm1 lh-md1 text-lightgray text-center text-lg-start'>With 6-figure salaries, unlimited PTO, and the flexibility to work anywhere in the world—(or</li>
            <li className=' list-dot font-jost fw-normal fs-sm1 lh-md1 text-lightgray text-center text-lg-start'>simply pick your kids up from school), you want in.</li>
            <li className=' list-dot font-jost fw-normal fs-sm1 lh-md1 text-lightgray text-center text-lg-start'>But who has $25k+ to drop on a bootcamp?</li>
            <li className=' list-dot font-jost fw-normal fs-sm1 lh-md1 text-lightgray text-center text-lg-start'>Or semesters of free time to dedicate to going back to school?</li>
            <li className=' list-dot font-jost fw-normal fs-sm1 lh-md1 text-lightgray text-center text-lg-start'>Or YEARS to go through the trial and error involved in teaching yourself?</li>
            <li className=' list-dot font-jost fw-normal fs-sm1 lh-md1 text-lightgray text-center text-lg-start'>Heck, most people don’t even know where to start.</li>
            <li className=' list-dot font-jost fw-normal fs-sm1 lh-md1 text-lightgray text-center text-lg-start'>If that's you, you’ve been dreaming of a high-paying tech career but paralyzed when it comes time to take action.</li>
          </ul>
          <p className=' font-jost fw-semibold fs-sm1 lh-sm gradint-clr text-center text-lg-start'>I want to Start My Software Engineering Journey!</p>
                <div className=' d-inline-block d-flex justify-content-center justify-content-lg-start mt-5 '>
                    <Commanbtn text='Book a Call NOW'/>
                </div>
           </div>
           <div className=' col-lg-5 col-12 d-flex justify-content-center  '>
           <img className=' w-100 max-w-461' src={men} alt="men" />
           </div>
          </div>
        </div>
    </>
  )
}

export default Course