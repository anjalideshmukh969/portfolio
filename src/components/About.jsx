import React from 'react'
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
// import myPic from "../assets/temp3.jpeg";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };

    const handleScrollToSection = (sectionId) => {
        scrollToSection(sectionId);
    };

    useGSAP(() => {
        const myGsapTimeline = gsap.timeline();

        myGsapTimeline.from(".about-comp", {
            y: 20,
            duration: 1,
            ease: "easeInOutExpo",
            opacity: 0,
            stagger: 0.3,
            scrollTrigger: {
                trigger: "#about",
                // scroller:"body",
                start: `center center`,
                scrub: true,
                pin: true,
            },
        });
    }, []);

    return (
        <div id="about" className="main-about  z-10 h-screen sm:h-auto min-h-[60dvh] sm:min-h-[80dvh] md:h-screen w-screen flex  justify-start sm:justify-center  items-center md:flex-row ">
            <div className="about2  h-full pb-12 md:pb-0 md:w-[60dvw]   flex flex-col  justify-center  sm:items-start  gap-7 sm:gap-15 lg:gap-10 ">
                <h1 className="text-4xl md:text-5xl font-normal tracking-[0.3em] uppercase mb-12 relative
                after:content-[''] after:absolute after:left-1/2 after:-bottom-3 after:h-[1px] after:w-16 
                after:-translate-x-1/2 after:bg-gray-400 hover:after:w-28 after:transition-all">
                    About Me
                </h1>
                <div className="about-p-div translate-y-10 px-8 md:p-0 md:w-[90%] h-auto flex flex-col w-full min-h-fit space-x-4">
                    <p className="about-p text-base sm:text-lg lg:text-xl leading-8 text-justify">
                        <span className="about-comp about-p-span">
                            I am a passionate
                            <span className="highlighted-text"> Software Developer</span> with hands-on experience in building
                            <span className="highlighted-text"> scalable</span>,
                            <span className="highlighted-text"> responsive</span>, and
                            <span className="highlighted-text"> user-centric web applications</span> using the
                            <span className="highlighted-text"> MERN stack</span>.
                        </span>

                        <span className="about-comp about-p-span">
                            My expertise includes
                            <span className="highlighted-text"> MongoDB</span>,
                            <span className="highlighted-text"> Express.js</span>,
                            <span className="highlighted-text"> React.js</span>,
                            <span className="highlighted-text"> Node.js</span>,
                            <span className="highlighted-text"> REST APIs</span>, and
                            <span className="highlighted-text"> modern JavaScript (ES6+)</span>,
                            enabling me to develop robust full-stack solutions tailored to real-world needs.
                        </span>

                        <span className="about-comp about-p-span">
                            Beyond frontend and backend development, I bring strong knowledge in
                            <span className="highlighted-text"> database architecture</span>,
                            <span className="highlighted-text"> performance optimization</span>, and
                            <span className="highlighted-text"> scalable server-side systems</span>.
                            I also have practical experience with
                            <span className="highlighted-text"> PostgreSQL</span> and
                            <span className="highlighted-text"> CI/CD pipelines</span>, ensuring seamless deployment and maintainable workflows.
                        </span>

                        <span className="about-comp about-p-span">
                            I am deeply committed to writing
                            <span className="highlighted-text"> clean</span>,
                            <span className="highlighted-text"> efficient</span>, and
                            <span className="highlighted-text"> maintainable code</span>,
                            while continuously learning and adapting to emerging technologies in the software development ecosystem.
                        </span>

                        <span className="about-comp about-p-span">
                            My goal is to create impactful digital experiences and deliver
                            <span className="highlighted-text"> innovative software solutions</span> that combine technical excellence with exceptional user value.
                        </span>
                    </p>
                </div>
                <div className='justify-between flex gap-10 '>
                    <button onClick={() => { handleScrollToSection("education") }}
                        className="about-comp about-btn translate-y-10  bg-indigo-500 max-w-fit text-black p-2  px-6 min-w-fit text-lg flex flex-wrap rounded-lg md:font-semibold cursor-pointer ml-2
                    hover:bg-indigo-400 hover:text-gray-600">
                        Education
                    </button>
                    <button onClick={() => { handleScrollToSection("skills") }}
                        className="about-comp about-btn translate-y-10  bg-indigo-500 max-w-fit text-black p-2  px-12 min-w-fit text-lg flex flex-wrap rounded-lg md:font-semibold cursor-pointer ml-2
                    hover:bg-indigo-400 hover:text-gray-600">
                        Skills
                    </button>
                </div>
            </div>
        </div>

    )
}

export default About
