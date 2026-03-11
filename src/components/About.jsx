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
                <div className="about-p-div translate-y-10   px-8  md:p-0 md:w-[90%] h-auto  flex flex-col w-full   min-h-fit space-x-4">
                    <p className="about-p text-sm sm:text-[1em] lg:text-lg">
                        <span className="about-comp about-p-span text-justify">
                            Hello! I'm <span className="highlighted-text">Anjali</span>, an aspiring&nbsp;
                            <span className="highlighted-text">Computer Science Undergraduate</span> and passionate&nbsp;
                            <span className="highlighted-text">MERN Stack Developer</span>.
                        </span>

                        <span className="about-comp about-p-span text-justify">
                            I specialize in building responsive, modern web applications using technologies like
                            <span className="highlighted-text"> React.js</span>, <span className="highlighted-text">Next.js</span>,
                            &nbsp;<span className="highlighted-text">Node.js</span>, <span className="highlighted-text"> Express.js, PostgreSQL</span>,
                            and <span className="highlighted-text"> MongoDB</span>.
                        </span>

                        <span className="about-comp about-p-span text-justify">
                            Alongside my web development skills, I have a strong foundation in&nbsp;
                            <span className="highlighted-text">Data Structures</span> and practical experience with
                            programming languages including <span className="highlighted-text">Java</span>,&nbsp;
                            <span className="highlighted-text">Python</span>.
                        </span>

                        <span className="about-comp about-p-span text-justify">
                            My passion lies in the entire development lifecycle, from designing intuitive&nbsp;
                            <span className="highlighted-text">UI/UX interfaces</span> to implementing scalable server architectures
                            and efficient <span className="highlighted-text">database management</span> solutions.
                        </span>

                        <span className="about-comp about-p-span text-justify">
                            I am committed to mastering <span className="highlighted-text">full‑stack development</span>
                            &nbsp;principles and continuously learning to blend cutting‑edge web technologies with robust
                            software engineering practices.
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
