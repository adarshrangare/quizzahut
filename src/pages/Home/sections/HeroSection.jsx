import React from "react";
import Link from "antd/es/typography/Link";
import { IoLogoWhatsapp, IoMdMail } from "react-icons/io";
import logo from '../../../assets/Logos/QuizzaHutLogo.svg'
import HeroImage from "../../../assets/HeroImage/HeroImage";

export const HeroSection = () => {
  return (
    // <section
    //   id="home"
    //   className="w-full flex lg:flex-row flex-col justify-center   gap-10 max-container px-5 md:px-20 bg-gradient-to-br from-slate-50 via-sky-200 to-sky-100"
    // >
    //   <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-10 md:pt-20 ">
    //     <p className="text-xl font-montserrat text-coral-red">
    //       Our Ultimate Quiz Series
    //     </p>
    //     <h1 className=" font-palanquin text-6xl max-sm:text-[55px] max-sm:leading-[60px] font-bold z-1 max-lg:z-0 leading-12 ">
    //       <span className=" xl:whitespace-nowrap relative z-10 pr-10 rounded-full text-5xl ">
            
    //         To Enhance <br /> Knowledge
    //       </span>
    //       <br />
    //       <span className="text-coral-red max-sm:text-5xl text-6xl inline-block mt-3 pr-3 text-slate-600">
    //         Have QuizzaHut
    //       </span>
    //     </h1>
    //     <p className="font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm ">
    //       Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur
    //       praesentium, id quidem ipsum unde omnis obcaecati. Repellendus tenetur
    //       cumque pariatur distinctio nostrum! Nihil ipsam ipsum eius doloribus
    //       architecto, repellat nemo!
    //     </p>
    //   </div>

    //   <div className="  relative w-full lg:w-1/2 flex justify-center items-center max-xl:py-20 bg-hero bg-center bg-cover">

    //     <div className="bg-red-500 ">
    //     <HeroImage/>
    //     </div>

    //     <div className="flex gap-4 sm:gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6">
    //       <img src={logo} alt="" />
    //     </div>
    //   </div>
    // </section>

    <section className="w-full flex justify-between mx-auto flex-col-reverse md:flex-row px-5 md:px-20 bg-gradient-to-br from-slate-50 via-sky-200 to-sky-100">

<div className="relative md:w-2/5  flex flex-col justify-center items-start w-full max-md:padding-x pt-10 md:pt-20 ">
        <p className="text-xl font-montserrat text-coral-red">
          Our Ultimate Quiz Series
        </p>
        <h1 className=" font-palanquin text-6xl max-sm:text-[55px] max-sm:leading-[60px] font-bold z-1 max-lg:z-0 leading-12 ">
          <span className=" xl:whitespace-nowrap relative z-10 pr-10 rounded-full text-5xl ">
       
            To Enhance <br /> Knowledge
          </span>
          <br />
          <span className="max-sm:text-4xl text-6xl inline-block mt-3 pr-3 text-slate-600">
            Have QuizzaHut
          </span>
        </h1>
        <p className="font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-8 sm:max-w-sm ">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur
          praesentium, id quidem ipsum unde omnis obcaecati. Repellendus tenetur
          cumque pariatur distinctio nostrum! Nihil ipsam ipsum eius doloribus
          architecto, repellat nemo!
        </p>

        <button className="bg-sky-500 mb-6 hover:bg-sky-600 transition-all active:scale-90  rounded-full text-xl font-semibold py-3 px-8 text-white "> Register Now</button>

      </div> 

      <div className="w-full md:w-2/4 shrink-0 flex scale-90 pr-10">

          <HeroImage/>

      </div>


    </section>

  );
};
