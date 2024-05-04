import React from "react";
import twowomen from "../assets/images/2women.webp";

const Program = () => {
  return (
    <div data-aos="zoom-in" id="Program" className=" container py-lg-100 py-50 overflow-hidden ">
      <div className="row align-items-center ">
        <div className="col-lg-6 col-12 d-flex justify-content-around  ">
          <img className=" w-100 max-w-488" src={twowomen} alt="twowomen" />
        </div>
        <div className="col-lg-6 col-12 pt-3 pt-lg-0">
          <h2 className=" font-jost fw-medium fs-xl1 lh-xl1 text-white max-w-558 mx-auto mx-lg-0  text-center text-lg-start">
            Are You A Good Fit For Our Program?
          </h2>
          <p className=" font-jost fw-normal fs-sm1 lh-sm text-lightwhite text-center text-lg-start">
            About Who The Program is For
          </p>
          <p className=" font-jost fw-semibold fs-sm1 lh-sm gradint-clr text-center text-lg-start">
            Our 6-Month Software Engeering Course is for individuals that...
          </p>
          <p className=" font-jost fw-normal fs-sm1 lh-sm text-lightgray max-w-558 mx-auto mx-lg-0  text-center text-lg-start">
            Want to take action now but don't have years to waste in university
            Are extremely motivated and want to succeed Have dreamed of becoming
            a software engineer but don't have hundreds of thousands of dollars
            lying around
          </p>
          <p className="font-jost fw-semibold fs-sm1 lh-sm gradint-clr text-center text-lg-start">
            It isn't for...
          </p>
          <p className="font-jost fw-normal fs-sm1 lh-sm text-lightgray max-w-507 mx-auto mx-lg-0  text-center text-lg-start">
            People that aren't self-starters People that don't have a sense of
            urgency to become a software engineeer People that aren't serious
            about fulfilling their dream
          </p>
        </div>
      </div>
    </div>
  );
};

export default Program;
