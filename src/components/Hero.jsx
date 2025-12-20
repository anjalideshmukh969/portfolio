import React from 'react';
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import gsap from "gsap";
import {useGSAP} from "@gsap/react";
import { RiTwitterXLine } from "react-icons/ri";



const Hero = () => {

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if(element){
            element.scrollIntoView({behavior: "smooth",block:"start"});
        }
    };


    const handleScrollToSection = (sectionId) => {
        scrollToSection(sectionId);
    };

    useGSAP(()=>{

        const gsapTimeline = gsap.timeline();

        gsapTimeline.from(".hero-text-comp",{
            duration:1,
            x:-100,
            ease:"easeInOutExpo",
            opacity:0,
            stagger:0.3
        });

        gsap.from(".hero-img",{
            duration:1,
            y:30,
            ease:"easeInOutExpo",
            opacity:0,
            stagger:0.2
        });

    },[]);

    return (
        <>
            <div id="home" className="main-hero w-screen h-[90dvh]  flex  md:flex-row md:flex-wrap flex-col-reverse justify-center md:justify-center items-center md:items-center p-0  md:p-3 max-w-screen z-10 border-[2px solid blue]">
                <div className="hero-part1 z-10   w-full md:w-[50%] max-h-fit h-[45%] md:h-[80%] px-3  flex flex-col justify-center gap-3 sm:gap-6  ">
                    <span className="text-lg">Hi I'm</span>
                    <div className="hero-text-comp hero-text w-full font-semibold text-4xl bg-gradient-to-br from-indigo-500  to-indigo-600 bg-clip-text text-transparent ">
                        Shaik Mohammed Noushad
                    </div>
                    <div className="hero-text-comp md:text-5xl xl:text-6xl  font-bold hidden md:block">
                        Full Stack
                        <div className="md:text-5xl xl:text-6xl  font-bold hidden md:block  md:ml-[20%]">
                            Developer
                        </div>
                    </div>

                    <div className="hero-text-comp text-md hidden md:block lg:text-lg ">
                        Skilled in building responsive web applications using modern web technologies, specializing in MERN stack.
                        Passionate about solving real world problems using cutting edge technologies and ultimately mastering
                        software development cycle.
                    </div>
                    <div className="hero-text-comp text-sm sm:text-lg md:hidden block  font-semibold">
                        Skilled in building responsive web applications using modern web technologies.
                    </div>
                    <button onClick={()=>{handleScrollToSection("contact")}}
                        className="hero-text-comp cursor-pointer bg-indigo-500 max-w-fit text-black p-3.5 px-4 min-w-fit text-lg flex flex-wrap rounded-lg md:font-semibold">
                        Hire Me
                    </button>
                </div>


                <div className="container hero-part2  w-full md:w-[45dvw] max-h-fit h-[50%]  md:h-[40dvw]   flex flex-col justify-center items-center md:pb-5 gap-2 md:gap-4">
                    <div className="myPic  min-w-fit min-h-fit  simple-center  z-10 ">
                        {/*<img src="/src/assets/IMG_20251128_123625-removebg-preview.png" alt="myPic" className="z-0 bg-cover bg-center bg-transparent h-full w-full rounded-full"/>*/}
                        <div className="main-hero-img z-0 bg-cover bg-center border-5 border-[#615fff]">
                            <img src="/assets/Noushad_img3.jpg" alt="my-pic" className="z-0 bg-contain bg-center  h-full w-full rounded-full"/>
                        </div>
                    </div>

                    <div className="btns h-9 w-[50%] flex justify-center gap-5  ">
                        <a href="https://www.linkedin.com/in/smdnoushad/" target="_blank"  className="hover:text-indigo-500">
                            <FaLinkedin className="hero-img h-[2em] w-[2em] xl:w-[2.5em] xl:h-[2.5em] " />
                        </a>
                        <a href="https://github.com/ShaikNoushad-309/" target="_blank" className="hover:text-indigo-500">
                            <FaGithub className="hero-img h-[2em] w-[2em] xl:w-[2.5em] xl:h-[2.5em]" />
                        </a>
                        <a href="https://x.com/home?lang=en-in" target="_blank" className="hover:text-indigo-500">
                            <RiTwitterXLine  className="hero-img h-[2em]  w-[2em] xl:w-[2.5em] xl:h-[2.5em]" />
                        </a>
                    </div>

                </div>


            </div>
        </>
    );
};

export default Hero;