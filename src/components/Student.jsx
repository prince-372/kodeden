import React from "react";
import sliderimg1 from "../assets/images/slider1st-img.webp";
import sliderimg2 from "../assets/images/slider2nd-img.webp";
import sliderimg3 from "../assets/images/slider3rd-img.webp";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation } from "swiper/modules";
import "swiper/css/navigation";
import { Linkedin } from "./Icons";
import Commanbtn from "./Commanbtn";

const Student = () => {
  return (
    <div data-aos="zoom-in" className="mt-208 pt-lg-88">
      <div className="container position-relative">
        <h2 className="text-lightwhite fs-xl1 fw-medium text-center text-capitalize  lh-xl1 m-0 pb-5">
          What our <span className="gradint-clr">students</span> are saying
        </h2>
        <Swiper
          speed={1000}
          modules={[Navigation]}
          breakpoints={{
                       
            768: {
                slidesPerView: 2,
            },
            992: {
slidesPerView: 3,
            },
        
        }}
          spaceBetween={24}
          slidesPerView={1}
          navigation={{ nextEl: ".next-btn", prevEl: ".prev-btn" }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
          loop={true}
          className="pb-5"
                >
          <SwiperSlide >
            <div className="slider-card">
              <h4 className=" m-0 fw-normal fs-md1 lh-lg text-white">
                Ross O’Rourke Founder, iC-1 <br /> Solutions. CEO Agile Onboarding
              </h4>
              <p className="m-0 fs-sm1 fw-normal text-lightgray1 lh-lg-t pt-1 pb-1">
                Vitae elit dapibus facilisis magna. Sem amet sem ullamcorper augue
                magna egestas sit tempus, cras. Mauris gravida elit eget mi et
                vitae viverra duis eget. Aliquam, quisque gravida est pretium
                suscipit vel. Non blandit eget tortor netus pellentesque mauris,
                diam.{" "}
              </p>
              <p className="fw-semibold fs-sm1 lh-lg-t text-white pt-6 m-0">
                Read More...
              </p>
              <div className="d-flex align-items-center pe-3 me-1 justify-content-between pt-26">
                <div className="d-flex align-items-center">
                  <img width={52} height={52} src={sliderimg1} alt="img1-slider" />
                  <div className="ps-2 ms-1">
                    <p className="text-white m-0 fw-normal fs-md1">
                      Ross O’Rourke
                    </p>
                    <p className="m-0 fw-normal fs-sm text-lightgray1">
                      @Ross O’Rourke
                    </p>
                  </div>
                </div>
                <Linkedin/>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide >
            <div className="slider-card">
              <h4 className=" m-0 fw-normal fs-md1 lh-lg text-white">
                “Luke O’Malley Tech Lead Agile Onboarding.”
              </h4>
              <p className="m-0 fs-sm1 fw-normal text-lightgray1 lh-lg-t pt-1 pb-1">
                Vitae elit dapibus facilisis magna. Sem amet sem ullamcorper augue
                magna egestas sit tempus, cras. Mauris gravida elit eget mi et
                vitae viverra duis eget. Aliquam, quisque gravida est pretium
                suscipit vel. Non blandit eget tortor netus pellentesque mauris,
                diam.{" "}
              </p>
              <p className="fw-semibold fs-sm1 lh-lg-t text-white pt-6 m-0">
                Read More...
              </p>
              <div className="d-flex align-items-center pe-3 me-1 justify-content-between pt-26">
                <div className="d-flex align-items-center">
                  <img width={52} height={52} src={sliderimg2} alt="img1-slider" />
                  <div className="ps-2 ms-1">
                    <p className="text-white m-0 fw-normal fs-md1">
                      Luke O’Malley
                    </p>
                    <p className="m-0 fw-normal fs-sm text-lightgray1">
                      @Luke O’Malley
                    </p>
                  </div>
                </div>
                <Linkedin/>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide >
            <div className="slider-card">
              <h4 className=" m-0 fw-normal fs-md1 lh-lg text-white">
                Leslie Sage Director of Data <br /> Science at DevResults
              </h4>
              <p className="m-0 fs-sm1 fw-normal text-lightgray1 lh-lg-t pt-1 pb-1">
                Vitae elit dapibus facilisis magna. Sem amet sem ullamcorper augue
                magna egestas sit tempus, cras. Mauris gravida elit eget mi et
                vitae viverra duis eget. Aliquam, quisque gravida est pretium
                suscipit vel. Non blandit eget tortor netus pellentesque mauris,
                diam.{" "}
              </p>
              <p className="fw-semibold fs-sm1 lh-lg-t text-white pt-6 m-0">
                Read More...
              </p>
              <div className="d-flex align-items-center pe-3 me-1 justify-content-between pt-26">
                <div className="d-flex align-items-center">
                  <img width={52} height={52} src={sliderimg3} alt="img1-slider" />
                  <div className="ps-2 ms-1">
                    <p className="text-white m-0 fw-normal fs-md1">Leslie Sage</p>
                    <p className="m-0 fw-normal fs-sm text-lightgray1">
                      @Leslie Sage
                    </p>
                  </div>
                </div>
                <Linkedin/>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide >
            <div className="slider-card">
              <h4 className=" m-0 fw-normal fs-md1 lh-lg text-white">
                “Luke O’Malley Tech Lead Agile Onboarding.”
              </h4>
              <p className="m-0 fs-sm1 fw-normal text-lightgray1 lh-lg-t pt-1 pb-1">
                Vitae elit dapibus facilisis magna. Sem amet sem ullamcorper augue
                magna egestas sit tempus, cras. Mauris gravida elit eget mi et
                vitae viverra duis eget. Aliquam, quisque gravida est pretium
                suscipit vel. Non blandit eget tortor netus pellentesque mauris,
                diam.{" "}
              </p>
              <p className="fw-semibold fs-sm1 lh-lg-t text-white pt-6 m-0">
                Read More...
              </p>
              <div className="d-flex align-items-center pe-3 me-1 justify-content-between pt-26">
                <div className="d-flex align-items-center">
                  <img width={52} height={52} src={sliderimg2} alt="img1-slider" />
                  <div className="ps-2 ms-1">
                    <p className="text-white m-0 fw-normal fs-md1">
                      Luke O’Malley
                    </p>
                    <p className="m-0 fw-normal fs-sm text-lightgray1">
                      @Luke O’Malley
                    </p>
                  </div>
                </div>
                <Linkedin/>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
        <div className=' d-inline-block d-flex justify-content-center mt-5 mt-sm-0 '>
                  <Commanbtn text='Book a Call NOW'/>
              </div>
        <button className="bg-transparent prev border-0 hover-scale position-absolute z-2 prev-btn">
          <svg
            width="44"
            height="44"
            viewBox="0 0 44 44"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="22" cy="22" r="22" fill="url(#paint0_linear_2_1773)" />
            <path
              d="M26.7992 16.0001L20.7992 22.0001L26.7992 28.0001L25.5992 30.4001L17.1992 22.0001L25.5992 13.6001L26.7992 16.0001Z"
              fill="#F4F4F4"
            />
            <defs>
              <linearGradient
                id="paint0_linear_2_1773"
                x1="-1.14444e-07"
                y1="1.29412"
                x2="20.5626"
                y2="32.2782"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#FF2801" />
                <stop offset="1" stopColor="#FF6B0A" />
              </linearGradient>
            </defs>
          </svg>
        </button>
        <button className="bg-transparent next border-0 hover-scale position-absolute z-2 next-btn">
          <svg
            width="44"
            height="44"
            viewBox="0 0 44 44"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="22"
              cy="22"
              r="22"
              transform="matrix(-1 0 0 1 44 0)"
              fill="url(#paint0_linear_2_1776)"
            />
            <path
              d="M17.2008 16.0001L23.2008 22.0001L17.2008 28.0001L18.4008 30.4001L26.8008 22.0001L18.4008 13.6001L17.2008 16.0001Z"
              fill="#F4F4F4"
            />
            <defs>
              <linearGradient
                id="paint0_linear_2_1776"
                x1="-1.14444e-07"
                y1="1.29412"
                x2="20.5626"
                y2="32.2782"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#FF2801" />
                <stop offset="1" stopColor="#FF6B0A" />
              </linearGradient>
            </defs>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Student;
