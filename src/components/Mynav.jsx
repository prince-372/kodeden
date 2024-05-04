import Hamburger from "hamburger-react";
import React, { useState } from "react";

const Mynav = () => {
  const [nav, setNav] = useState(false);
  function show() {
    setNav(!nav);
    if (nav === false) {
      document.body.classList.add("max-lg-overflow-hidden");
    } else {
      document.body.classList.remove("max-lg-overflow-hidden");
    }
  }
  return (
    <section className=" position-relative z-3 ">
      <div className=" container mt-4">
        <div className=" d-flex justify-content-end ">
          <nav>
            <ul
              className={`${
                nav && "start-0"
              }  d-flex gap-32 align-items-center  mobileView `}
            >
              <li>
                <a
                  onClick={() => show()}
                  href="#Home"
                  className=" fw-medium fs-sm lh-sm font-jost text-lightgray nav-icn"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  onClick={() => show()}
                  href="#About"
                  className=" fw-medium fs-sm lh-sm font-jost text-lightgray nav-icn"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  onClick={() => show()}
                  href="#Program"
                  className=" fw-medium fs-sm1 lh-sm font-jost text-lightgray nav-icn"
                >
                  Program
                </a>
              </li>
              <li>
                <a
                  onClick={() => show()}
                  href="#works"
                  className=" fw-medium fs-sm1 lh-sm font-jost text-lightgray nav-icn"
                >
                  How it works
                </a>
              </li>
              <li>
                <a
                  onClick={() => show()}
                  href="#FAQs"
                  className=" fw-medium fs-sm1 lh-sm font-jost text-lightgray nav-icn"
                >
                  FAQs
                </a>
              </li>
                <li>
              <a href="" className=" font-jost fw-black fs-sm1 lh-sm comn-btn text-white">
                  Get Started
              </a>
                </li>
            </ul>
          </nav>
        </div>
        <label
          className="overflow-hidden d-lg-none  setnavbutton"
          onClick={show}
        >    
          <Hamburger
            toggle={setNav}
            toggled={nav}
            size={26}
            rounded
            distance="sm"
            direction="right"
            duration={0.5}
            color="#ffffff"
          />
        </label>
      </div>
    </section>
  );
};

export default Mynav;
