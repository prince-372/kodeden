import Hamburger from "hamburger-react";
import React, { useState } from "react";

const Mynav = () => {
  const [nav, setNav] = useState(false);
  function show() {
    setNav(!nav);
    if (nav) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }
  return (
    <section className=" position-relative  z-3 ">
      <div className=" container pt-3">
        <div className=" d-flex justify-content-end ">
          <nav>
            <ul
              className={`${
                nav && "start-0"
              }  d-flex gap-5 align-items-center  mobileView `}
            >
              <li>
                <a
                  onClick={() => setNav(false)}
                  href="#Home"
                  className=" fw-medium fs-sm lh-sm font-jost text-lightgray nav-icn"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  onClick={() => setNav(false)}
                  href="#About"
                  className=" fw-medium fs-sm lh-sm font-jost text-lightgray nav-icn"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  onClick={() => setNav(false)}
                  href="#Program"
                  className=" fw-medium fs-sm lh-sm font-jost text-lightgray nav-icn"
                >
                  Program
                </a>
              </li>
              <li>
                <a
                  onClick={() => setNav(false)}
                  href="#works"
                  className=" fw-medium fs-sm lh-sm font-jost text-lightgray nav-icn"
                >
                  How it works
                </a>
              </li>
              <li>
                <a
                  onClick={() => setNav(false)}
                  href="#FAQs"
                  className=" fw-medium fs-sm lh-sm font-jost text-lightgray nav-icn"
                >
                  FAQs
                </a>
              </li>
              <li className=" font-jost fw-black fs-sm lh-sm comn-btn text-white">
                Get Started
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