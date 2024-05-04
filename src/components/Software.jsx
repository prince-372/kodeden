import React from 'react'
import { Arrow, Corveline3 } from './Icons';
import cartoon from '../assets/images/cartoon-men.webp';
import Album from '../assets/images/album.webp';
import many from '../assets/images/money-bag.webp';

const Software = () => {
  return (
    <div data-aos="fade-down" className='position-relative py-lg-100 overflow-hidden '>
                <span className=' position-absolute Corveline3 d-none d-sm-block'><Corveline3/></span>
      <div className=' container'>
         <h2 className=' font-jost fw-medium fs-xl1 lh-xl1 max-w-1057 text-center text-white'>“From Confused to Coder”: Kodeden's Exclusive 6-Month <span className='gradint-clr'>Software Engineering</span> Course </h2>
         <p className=' font-jost fw-normal fs-sm1 lh-sm text-lightwhite text-center '>Through twice-weekly live lectures and at-home exercises, you’ll:</p>
         <p className=' font-jost fw-normal fs-sm1 lh-sm text-lightgray max-w-677 text-center mx-auto '>Learn everything you need to know to break into tech from senior engineers with experience at Apple, Amazon, and the DOD.</p>
         <div  v className="row max-w-964 mx-auto pt-lg-88 pt-20 justify-content-center  ">
          <div className="col-lg-4 col-md-6 col-12">
              <div className='soft-card  d-flex flex-column justify-content-end position-relative group'>
                    <p className=' font-jost fw-semibold fs-lg1 lh-xl text-lightgray m-0 group'>01</p>
                    <div className=' d-flex align-items-end gap-2'>
                      <p className=' font-jost fw-bold fs-md lh-sm1 text-lightwhite m-0 group'><span className=' d-block '>Master</span> Full-Stack Coding Skills</p>
                      <Arrow/>
                    </div>
                    <img className=' w-132 h-166 position-absolute top-0 end-0  ' src={cartoon} alt="cartoon" />
              </div>
          </div>
          <div className="col-lg-4 col-md-6 col-12 pt-md-0 pt-2  ">
              <div className='soft-card  d-flex flex-column justify-content-end position-relative group'>
                    <p className=' font-jost fw-semibold fs-lg1 lh-xl text-lightgray m-0 group'>02</p>
                    <div className=' d-flex align-items-end gap-2'>
                      <p className=' font-jost fw-bold fs-md lh-sm1 text-lightwhite m-0 group'><span className=' d-block '>Build a </span>Standout Portfolio</p>
                      <Arrow/>
                    </div>
                    <img className=' w-115 h-166 position-absolute top-0 end-0 ' src={Album} alt="cartoon" />
              </div>
          </div>
          <div className="col-lg-4 col-md-6 col-12 pt-lg-0 pt-2 ">
              <div className='soft-card  d-flex flex-column justify-content-end position-relative group'>
                    <p className=' font-jost fw-semibold fs-lg1 lh-xl text-lightgray m-0 group'>03</p>
                    <div className=' d-flex align-items-end gap-2'>
                      <p className=' font-jost fw-bold fs-md lh-sm1 text-lightwhite m-0 group'><span className=' d-block '>Launch </span>Your Tech Career</p>
                      <Arrow/>
                    </div>
                    <img className=' w-144 h-166 position-absolute top-0 end-0 ' src={many} alt="cartoon" />
              </div>
          </div>
         </div>
      </div>
    </div>
  )
}

export default Software