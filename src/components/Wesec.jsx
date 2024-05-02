import React from "react";
import twomen from "../assets/images/twomen.webp";
import Commanbtn from "./Commanbtn";
import { Corveline3 } from "./Icons";

const Wesec = () => {
  return (
    <div data-aos="fade-down" id="works" className=" position-relative overflow-hidden ">
      <span className=" position-absolute soft-elipes d-none d-sm-block"><Corveline3/></span>
        <div className=" container py-lg-100 py-50 ">
          <h2 className=" font-jost fw-medium fs-xl1 lh-xl1 text-center text-white">
            Who Are <span className="gradint-clr">We</span>?
          </h2>
          <div className="row pt-lg-73 pt-20 ">
            <div className="col-lg-6 col-12 d-flex justify-content-center ">
              <img className=" w-100 max-w-474" src={twomen} alt="twomen" />
            </div>
            <div className="col-lg-6 col-12">
              <p className=" font-jost fw-normal fs-sm lh-sm text-lightwhite  text-center text-lg-start">
                MEET YOUR INSTRUCTORS
              </p>
              <p className=" font-jost fw-medium fs-lg1 lh-lg1 text-white max-w-362 mx-auto mx-lg-0  text-center text-lg-start">
                Hi, We’re Kody Doherty and Kolton Starr 👋
              </p>
              <p className=" font-jost fw-normal fs-sm1 lh-sm1 text-lightgray1 max-w-494 m-0 mx-auto mx-lg-0  text-center text-lg-start">
                And we know firsthand that building a career as a software engineer
                without a computer science degree is possible.
              </p>
              <p className=" font-jost fw-normal fs-sm1 lh-sm1 text-lightgray1 max-w-494 m-0 mx-auto mx-lg-0  text-center text-lg-start">
                We started where you are *right now*—without engineering degrees, a
                professional portfolio, or years of experience.
              </p>
              <p className=" font-jost fw-normal fs-sm1 lh-sm1 text-lightgray1 max-w-494 m-0 mx-auto mx-lg-0  text-center text-lg-start">
                Then we climbed the ranks to hold senior positions at tech titans
                like Amazon, Apple, and the US government.
              </p>
              <p className=" font-jost fw-normal fs-sm1 lh-sm1 text-lightgray1 max-w-494 m-0 mx-auto mx-lg-0  text-center text-lg-start">
                Throughout our careers, we’ve managed entire teams of engineers,
                directed $30 million program budgets, and built 2 successful tech
                startups (one that we sold).
              </p>
              <p className=" font-jost fw-normal fs-sm1 lh-sm1 text-lightgray1 max-w-494 m-0 mx-auto mx-lg-0  text-center text-lg-start">
                Throughout our careers, we’ve managed entire teams of engineers,
                directed $30 million program budgets, and built 2 successful tech
                startups (one that we sold).
              </p>
              <p className=" font-jost fw-normal fs-sm1 lh-sm1 text-lightgray1 max-w-494 m-0 mx-auto mx-lg-0  text-center text-lg-start">
                Learning to code did more than add a few impressive lines to our
                resumes. It literally changed our lives…
              </p>
              <p className=" font-jost fw-semibold fs-sm1 lh-sm gradint-clr pt-3 text-center text-lg-start">I want to live my dream now!</p>
              <div className=' d-inline-block pt-4 d-flex justify-content-center justify-content-lg-start '>
                    <Commanbtn text='Book a Call NOW'/>
                </div>
            </div>
          </div>
        </div>
        <hr  className=" line m-0 "/>
        <div className=" container ">
            <p className=" font-jost fw-normal fs-md1 lh-sm text-lightgray1 d-flex  justify-content-center text-center justify-content-lg-end py-lg-65 py-20 m-0 ">Privacy Policy | Terms of Service | Cookie Policy</p>
        </div>
    </div>
  );
};

export default Wesec;
