import React from 'react';
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Education = () => {

    useGSAP(() => {
        const myGsapTimeline = gsap.timeline();
        myGsapTimeline.from(".edu-comp", {
            y: 20,
            duration: 1,
            ease: "easeInOutExpo",
            opacity: 0,
            stagger: 0.4,
            scrollTrigger: {
                trigger: "#education",
                start: `${window.innerWidth >= 768 ? "center center" : "center+=150 bottom"}`,
                scrub: true,
                pin: true,
            },
        });

    }, []);

    const educationDetails = [
        {
            id: 1,
            title: "Bachelor of Technology",
            subtitle: "Artificial-Intelligence & Data-Science",
            institution: "Sagar Institute Of Research and Technology-Excellence, Bhopal",
            status: "Ongoing",
            year: "2023 - 2027",
            cgpa: "CGPA: 7.2 ",
            description: "Pursuing B.tech in Artificial-Intelligence & Data-Science,passionate about solving problems and building web applications. "
        },
        {
            id: 2,
            title: "Higher Secondary School",
            subtitle: "Physics,Chemistry,Maths",
            institution: "GHS School Paradsinga , Multai",
            status: "Completed",
            year: "2022 - 2023",
            cgpa: "Percentage: 80.6",
            description: "Completed my 12th with PCM from MadhyaPradesh Board Of Secondary Education"
        },
    ];
    return (
        <div id="education" className="mx-auto h-auto min-h-screen w-screen flex flex-col pt-0 sm:pt-[15dvh] items-center gap-7 z-10 px-4 ">
            {/* Header Section */}
            <h1 className="text-4xl md:text-5xl font-normal tracking-[0.3em] uppercase mb-12 relative
             after:content-[''] after:absolute after:left-1/2 after:-bottom-3 after:h-[1px] after:w-16 
             after:-translate-x-1/2 after:bg-gray-400 hover:after:w-28 after:transition-all">
             Education
             </h1>
            <div className="container text-white gap-7 h-auto w-[80%] lg:w-[80%] flex flex-col lg:flex-row justify-center items-start">
                {/* Left Column - Education Details */}
                <div className="w-full lg:w-2/3 flex flex-col gap-7">
                    {educationDetails.map((edu) => (
                        <div
                            key={edu.id}
                            className="edu-comp w-full h-auto rounded-xl border-l-4 border-l-indigo-500 py-5 px-6 text-lg flex flex-col gap-2 justify-center items-start
                                       hover:scale-[1.02] bg-slate-700 backdrop-blur-sm">
                            <div className="flex flex-col md:flex-row md:items-center md:justify-between w-full gap-2">
                                <div className="flex flex-col">
                                    <span className="text-2xl font-semibold ">
                                        {edu.title}
                                    </span>
                                    <span className="text-lg text-cyan-500 font-medium">
                                        {edu.subtitle}
                                    </span>
                                </div>
                                <span className={`px-3 py-1 w-fit rounded-full text-sm font-semibold ${edu.status === 'Ongoing' ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300' : 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300'}`}>
                                    {edu.status}
                                </span>
                            </div>

                            <span className="font-medium mt-2">
                                {edu.institution}
                            </span>
                            <div className="flex flex-wrap items-center gap-4 mt-2">
                                <span className="text-gray-400"> 📅 {edu.year} </span>
                                <span className="font-semibold"> {edu.cgpa}</span>
                                <span className="font-semibold"> {edu.description}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Education;
