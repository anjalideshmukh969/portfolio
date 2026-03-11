import React from 'react';
import { SiSocketdotio } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { BiLogoMongodb } from "react-icons/bi";
import { RiTailwindCssFill } from "react-icons/ri";
import { GrMysql } from "react-icons/gr";
import { FaGitAlt } from "react-icons/fa";
import { useGSAP } from "@gsap/react";
import { SiTypescript } from "react-icons/si";
import { SiJavascript } from "react-icons/si";
import { SiPostgresql } from "react-icons/si";
import { SiPostman, SiFirebase, SiVite } from "react-icons/si";
import { FaServer } from "react-icons/fa";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const Skills = () => {

    useGSAP(() => {

        const gsapTimeline = gsap.timeline();

        gsapTimeline.from(".box", {
            y: 20,
            duration: 1,
            ease: "easeInOutExpo",
            opacity: 0,
            stagger: 0.5,
            scrollTrigger: {
                trigger: "#skills",
                scroller: "body",
                start: "center center",
                scrub: true,
                pin: true,
            },
        });

    }, []);


    return (
        <div id="skills" className="mx-auto  h-auto min-h-screen w-screen flex flex-col pt-0 sm:pt-[15dvh]  items-center gap-7 sm:gap-0 md:gap-0 z-10">
            <h1 className="text-4xl md:text-5xl font-normal tracking-[0.3em] uppercase mb-12 relative
             after:content-[''] after:absolute after:left-1/2 after:-bottom-3 after:h-[1px] after:w-16 
             after:-translate-x-1/2 after:bg-gray-400 hover:after:w-28 after:transition-all">
                My Skills
            </h1>


            <div className=" boxes-container  container gap-7 h-[80%] w-[80%] flex  flex-wrap justify-center items-center   ">
                <div className="box text-lg flex flex-col gap-2 justify-center items-center">
                    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
                        target="_blank" rel="noreferrer">
                        <SiJavascript className="h-20 w-20 md:hover:scale-110 cursor-pointer text-yellow-400 rounded-2xl" />
                    </a>JavaScript
                </div>

                <div className="box text-lg flex flex-col gap-2 justify-center items-center">
                    <a href="https://react.dev/" target="_blank">
                        <FaReact className="h-20 w-20 md:hover:scale-110 cursor-pointer text-blue-500" />
                    </a>React
                </div>

                <div className="box text-lg flex flex-col gap-2 justify-center items-center">
                    <a href="https://nodejs.org/en" target="_blank">
                        <FaNodeJs className="h-20 w-20 md:hover:scale-110 cursor-pointer  text-green-400" />
                    </a>Node.js
                </div>

                <div className="box text-lg flex flex-col gap-2 justify-center items-center">
                    <a href="https://expressjs.com/" target="_blank">
                        <SiExpress className="h-20 w-20 md:hover:scale-110   cursor-pointer" />
                    </a>Express.js
                </div>

                <div className="box text-lg flex flex-col gap-2 justify-center items-center">
                    <a href="https://www.mongodb.com/" target="_blank">
                        <BiLogoMongodb className="h-20 w-20 md:hover:scale-110  cursor-pointer text-green-900" />
                    </a>MongoDB
                </div>

                <div className="box text-lg flex flex-col gap-2 justify-center items-center">
                    <a href="https://nextjs.org/" target="_blank">
                        <img alt="next.js" loading="lazy"
                            className=" transition-transform duration-300 md:hover:scale-110 h-20 w-20"
                            src="https://sagarshah.dev/_next/static/media/icon-nextjs.3f6cd734.svg" />
                    </a> Next.js
                </div>

                <div className="box text-lg flex flex-col gap-2 justify-center items-center">
                    <a href="https://tailwindcss.com/" target="_blank">
                        <RiTailwindCssFill className="h-20 w-20 md:hover:scale-110 cursor-pointer text-blue-400" />
                    </a> TailwindCSS
                </div>

                <div className="box text-lg flex flex-col gap-2 justify-center items-center">
                    <a href="https://socket.io/" target="_blank">
                        <SiSocketdotio className=" h-20 w-20 md:hover:scale-110 cursor-pointer " />
                    </a>Socket.io
                </div>

                <div className="box text-lg flex flex-col gap-2 justify-center items-center">
                    <a href="https://git-scm.com/" target="_blank">
                        <FaGitAlt className="h-20 w-20  md:hover:scale-110 cursor-pointer text-orange-500" />
                    </a>Git & Github
                </div>


                <div className="box text-lg flex flex-col gap-2 justify-center items-center">
                    <a href="https://www.typescriptlang.org/" target="_blank" rel="noreferrer">
                        <SiTypescript className="h-20 w-20 md:hover:scale-110 cursor-pointer text-blue-500 rounded-2xl" />
                    </a>TypeScript
                </div>

                <div className="box text-lg flex flex-col gap-2 justify-center items-center">
                    <a href="https://www.postgresql.org/docs/" target="_blank" rel="noreferrer">
                        <SiPostgresql className="h-20 w-20 md:hover:scale-110 cursor-pointer text-blue-500 rounded-2xl" />
                    </a> PostgreSQL
                </div>

                <div className="box text-lg flex flex-col gap-2 justify-center items-center">
                    <a href="https://www.postman.com/" target="_blank" rel="noreferrer">
                        <SiPostman className="h-20 w-20 md:hover:scale-110 cursor-pointer text-orange-500 rounded-2xl" />
                    </a>Postman
                </div>

                <div className="box text-lg flex flex-col gap-2 justify-center items-center">
                    <a href="https://firebase.google.com/" target="_blank" rel="noreferrer">
                        <SiFirebase className="h-20 w-20 md:hover:scale-110 cursor-pointer text-yellow-500 rounded-2xl" />
                    </a>Firebase
                </div>

                <div className="box text-lg flex flex-col gap-2 justify-center items-center">
                    <a href="https://restfulapi.net/" target="_blank" rel="noreferrer">
                        <FaServer className="h-20 w-20 md:hover:scale-110 cursor-pointer text-green-500 rounded-2xl" />
                    </a>REST API
                </div>

                <div className="box text-lg flex flex-col gap-2 justify-center items-center">
                    <a href="https://vitejs.dev/" target="_blank" rel="noreferrer">
                        <SiVite className="h-20 w-20 md:hover:scale-110 cursor-pointer text-purple-500 rounded-2xl" />
                    </a>Vite
                </div>

            </div>
        </div>
    );
};
export default Skills;