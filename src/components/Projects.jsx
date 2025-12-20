import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

/* ---------------- Project Card ---------------- */
const ProjectCard = ({ project }) => {
    return (
        <>
            <div className="project-part1 h-[60%] sm:h-full w-full sm:w-[45%] bg-slate-700 rounded-t-lg sm:rounded-t-none sm:rounded-l-lg flex justify-center items-center py-1 px-4">
                <img src={project.img} alt="Project" className="h-full w-full object-contain rounded-xl" />
            </div>

            <div className="project-part2 p-3 md:p-6 h-[50%] sm:h-full w-full sm:w-[55%] bg-slate-800 rounded-b-lg sm:rounded-b-none sm:rounded-r-lg flex flex-col gap-4 text-white">
                <h1 className="text-2xl font-bold">{project.title}</h1>
                <p className="text-sm sm:text-lg">{project.desc}</p>
                <div className="flex gap-2 flex-wrap">
                    {project.techStack.map((tech, i) => (
                        <span
                            key={i}
                            className="py-1 px-3 text-sm rounded-md bg-[#293556]"
                        >
                            {tech}
                        </span>
                    ))}
                </div>

                <a
                    href={project.vc_link}
                    target="_blank"
                    rel="noreferrer"
                    className="px-3 py-2 bg-indigo-500 text-black font-semibold rounded-sm w-fit">
                    View Code
                </a>
            </div>
        </>
    );
};
/* ---------------- Main Projects Component ---------------- */
const Projects = () => {
    const projects = [
        {
            id: 1,
            title: "Recurring Date Picker",
            img: "/assets/recc_date_picker.png",
            desc:
                "A customizable React component for scheduling repeating events with flexible recurrence rules.",
            techStack: ["React", "Next.js", "MongoDB", "Tailwind", "REST API"],
            vc_link:
                "https://github.com/ShaikNoushad-309/Recurring-Date-Picker",
        },
        {
            id: 2,
            title: "Web Password Manager",
            img: "/assets/pass_man_2.png",
            desc:
                "Perform CRUD operations on encrypted passwords in a clean responsive UI.",
            techStack: ["React", "Node", "Express", "MongoDB", "Tailwind"],
            vc_link:
                "https://github.com/ShaikNoushad-309/Password-Manager",
        },
    ];

    useGSAP(() => {
        const sections = gsap.utils.toArray(".project-box");

        gsap.to(sections, {
            xPercent: -100 * (sections.length - 1),
            ease: "none",
            scrollTrigger: {
                trigger: "#projects",
                scrub: 1,
                pin: true,
                snap: 1 / (sections.length - 1),
                end: () =>
                    "+=" +
                    document.querySelector(".projects-scroll-container")
                        .offsetWidth,
            },
        });
    }, { scope: "#projects" });

    return (
        <div
            id="projects"
            className="min-h-screen w-screen flex flex-col items-center pt-20 gap-10"
        >
            <h1 className="text-5xl xl:text-6xl font-bold">Projects</h1>

            <div className="relative w-full h-[80vh] overflow-hidden">
                <div
                    className="projects-scroll-container absolute left-0 flex h-full items-center gap-14 pl-10"
                    style={{ width: "max-content" }}
                >
                    {projects.map((project) => (
                        <div
                            key={project.id}
                            className="project-box h-[85%] w-[90vw] lg:w-[65vw] rounded-lg flex flex-col sm:flex-row shadow-xl"
                        >
                            <ProjectCard project={project} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Projects;
