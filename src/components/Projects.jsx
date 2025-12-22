import React, { useRef } from 'react';
import Project from "./Project.jsx";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import Shoppy from "../assets/Shoppy.jpeg"
import vAI from "../assets/vAI.jpeg"
import ecomm from "../assets/ecomm.png"


gsap.registerPlugin(ScrollTrigger);
const Projects = () => {
    const containerRef = useRef(null);
    const projectsRef = useRef(null);

    const projects = [{
        id: 1,
        title: "Virtual AI assistant",
        img: vAI,
        desc: "Working on this project.....",
        techStack: ["React", "Next.js", "mongoDB", "mongoose", "jwt", "Tailwind CSS", "Next.js", "Rest API", "NLP",],
        vc_link: "https://github.com/anjalideshmukh969/Minor-Project"
    },
    {
        id: 2,
        title: "E-commerce backend",
        img: ecomm,
        desc: "E-commerce backend system with secure authentication,implemented CRUD operations with structured data validation and error handling,Integrate Imagekit and multer,tested APIs via postman and added nodemailer for emails and OTPs, this project helped me strenthen my understanding in backend development ",
        techStack: ["MERN Stack","EJS", "Rest API"],
        vc_link: "https://github.com/anjalideshmukh969/Learning-backend"
    },
    {
        id: 3,
        title: "Shoppy",
        img: Shoppy,
        desc: "Redesign a E-commerce website Shoppy's UI with focus on animation and responsiveness.",
        techStack: ["HTML", "CSS", "Javascript", "ScrollTrigger"],
        vc_link: "https://github.com/anjalideshmukh969/Animations"
    }];
    useGSAP(() => {
        let sections = gsap.utils.toArray(".project-box");
        gsap.to(sections, {
            xPercent: -100 * (sections.length - 1),
            ease: "none",
            scrollTrigger: {
                // trigger:".projects-container",
                trigger: "#projects",
                scrub: 1,
                pin: true,
                snap: 1 / (sections.length - 1),
                end: () => "+=" + document.querySelector(".projects-scroll-container").offsetWidth + "+100",
            }
        })
    }, []);

    return (
        <div id="projects" className="h-auto min-h-screen w-screen flex flex-col justify-start pt-20 items-center gap-7 sm:gap-0 md:gap-10 z-10 relative">
            <h1 className="text-4xl md:text-5xl font-normal tracking-[0.3em] uppercase mb-12 relative
             after:content-[''] after:absolute after:left-1/2 after:-bottom-3 after:h-[1px] after:w-16 
             after:-translate-x-1/2 after:bg-gray-400 hover:after:w-28 after:transition-all">
             Projects
             </h1>

            <div ref={containerRef} className="projects-container relative w-full h-[80dvh] sm:h-[65dvh]  overflow-hidden">
                <div ref={projectsRef} className="projects-scroll-container absolute left-0 flex h-full items-center gap-14 pl-10"
                    style={{ width: "max-content" }}>

                    {projects.map((project) => {
                        return <div key={project.id} className="project-box h-[90%] sm:h-[80%] lg:w-[65dvw] xl:w-[60dvw] sm:w-[90dvw] w-[95dvw] max-w-screen min-w-[60dvw] rounded-lg  flex flex-col sm:flex-row justify-center items-center shadow-xl">
                            <Project myProject={project} />
                        </div>
                    })}
                </div>
            </div>
        </div>
    );
};

export default Projects;
