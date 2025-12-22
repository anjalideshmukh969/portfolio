import React from 'react';
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import myPic from "../assets/temp3.jpeg";

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

    useGSAP(() => {
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

        // Floating 3D animation for image
        gsap.to(".hero-3d-img", {
            y: -20,
            x: 10,
            rotationY: 10,
            rotationX: 5,
            duration: 3,
            repeat: -1,
            yoyo: true,
            ease: "power1.inOut",
        });
    }, []);

    return (
        <div id="home" className="main-hero w-screen h-[90dvh] flex md:flex-row md:flex-wrap flex-col-reverse justify-center md:justify-center items-center md:items-center p-0 md:p-3 max-w-screen z-10">
            
            {/* Text Section */}
            <div className="hero-part1 z-10 w-full md:w-[50%] max-h-fit h-[45%] md:h-[80%] px-3 flex flex-col justify-center gap-3 sm:gap-6">
                <span className="text-2xl">Hello I'm</span>
                <div className="hero-text-comp hero-text w-full font-semibold text-4xl bg-linear-to-br from-indigo-500 to-indigo-600 bg-clip-text text-transparent">
                    Anjali Deshmukh
                </div>
                <div className="hero-text-comp md:text-6xl xl:text-6xl font-semibold hidden md:block">
                    MERN Stack <br/> Developer
                </div>
                <div className="hero-text-comp text-md hidden md:block lg:text-lg">
                    Skilled in crafting dynamic web experiences where <span className='text-blue-800 hover:text-blue-100 '>code meets creativity</span>.  
                    Driven by curiosity, I love transforming complex problems into seamless digital solutions.
                </div>
                <div className="hero-text-comp text-sm sm:text-lg md:hidden block font-semibold">
                    Skilled in building responsive web applications using modern web technologies.
                </div>
                <button onClick={() => handleScrollToSection("projects")}
                    className="hero-text-comp cursor-pointer bg-indigo-500 max-w-fit text-black py-2 px-5 min-w-fit text-lg flex flex-wrap rounded-lg md:font-semibold hover:bg-indigo-400 hover:text-gray-600">
                    Projects
                </button>
            </div>

            {/* 3D Floating Image Section */}
            <div className="container hero-part2 w-full md:w-[45dvw] max-h-fit h-[50%] md:h-[40dvw] flex flex-col justify-center items-center md:pb-5 gap-2 md:gap-4">
                <div className="myPic relative z-10 w-full h-full flex justify-center items-center">
                    {/* Parent div with overflow-hidden and rounded corners */}
                    <div className="main-hero-img w-full h-full rounded-3xl overflow-hidden shadow-xl">
                        <img 
                            src={myPic} 
                            alt="my-pic" 
                            className="hero-3d-img w-full h-full object-cover" 
                        />
                    </div>
                </div>

                {/* Social buttons */}
                <div className="btns h-9 w-[50%] flex justify-center gap-5">
                    <a href="https://www.linkedin.com/in/anjalideshmukh-/" target="_blank" className="hover:text-indigo-500">
                        <FaLinkedin className="hero-img h-[2em] w-[2em] xl:w-[2.5em] xl:h-[2.5em]" />
                    </a>
                    <a href="https://github.com/anjalideshmukh969/" target="_blank" className="hover:text-indigo-500">
                        <FaGithub className="hero-img h-[2em] w-[2em] xl:w-[2.5em] xl:h-[2.5em]" />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Hero;

