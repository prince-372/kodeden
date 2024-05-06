import React from "react";
import student from '../assets/images/student-stadyimg.webp';
import Commanbtn from "./Commanbtn";
import { Corveline, Inlinked, Insta, Taligram, Twiter } from "./Icons";

const Header = () => {
  return (
    <>
      <div id="Home" className=" container pt-73 pt-5  position-relative overflow-hidden ">
        <span className=" position-absolute corveline d-none d-md-block"><Corveline/></span>
        <p className=" fw-semibold fs-xl lh-lg1 font-jost text-center text-white text-uppercase max-w-1089">
          Start the Mini-Course: <span className="gradint-clr">Rapidly Learning New Technical Skills</span>
        </p>
        <p className=" font-jost fw-semibold fs-lg lh-lg1 max-w-545 mx-auto  text-center text-white text-uppercase ">Learn All The Skills You Need To Become a Software Engineer!</p>
        <span className=" d-flex justify-content-center align-items-center  "><img className=" w-100 h-100 student-img h-lg-550 " src={student} alt="student" /></span>
        <p className=" fs-lg fw-semibold font-jost lh-md1 text-center text-white pt-4 text-uppercase ">Become a <span className="gradint-clr">Software</span> Engineer Now!</p>
        <p className=" fw-normal fs-sm1 font-jost lh-sm1 text-lightgray1 text-center ">No Math or Science Background Needed</p>
        <span className=" d-flex  justify-content-center mt-md-4 ">
          <Commanbtn  text='Book a Call NOW'/>
        </span>
      </div>
      <div className=" position-fixed icon-bar top-40 d-flex flex-column align-items-center justify-content-center gap-md-2 z-2   ">
        <Twiter className=" side-bar"/>
        <Insta className=" side-bar"/>
        <Taligram className=" side-bar"/>
        <Inlinked className=" side-bar"/>
      </div>
    </>
  );
};

export default Header;
