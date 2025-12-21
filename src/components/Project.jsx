import React from 'react';

const Project = (props) => {
    const myProject = props.myProject;
    // console.log("My Project: ",myProject);
    // console.log("Title: ", myProject.title, "Desc: ", myProject.desc, "Tech Stack: ", myProject.techStack, "Img: ", myProject.img, "");

    return (
        <>
            <div className="project-part1 h-[60%] sm:h-full w-full sm:w-[45%] bg-slate-700 rounded-t-lg sm:rounded-t-none sm:rounded-l-lg flex justify-center items-center py-1 sm:py-1 px-4 sm:px-2">
                <img src={myProject.img} className="h-full w-full object-contain rounded-xl sm:rounded-md" alt="Project" />
            </div>
            <div className="project-part2 p-3 md:p-6 lg:py-2 xl:py-10 h-[50%] sm:h-full w-full sm:w-[55%] bg-slate-800 rounded-b-lg sm:rounded-b-none sm:rounded-r-lg flex flex-col justify-start items-start gap-3 md:gap-4 text-white">
                <h1 className="text-2xl font-bold">{myProject.title}</h1>
                <p className="block project-p text-sm sm:text-lg ">{myProject.desc}</p>
                <div className="tech-stack flex gap-2 flex-wrap">
                    {myProject.techStack.map((tech,index)=>(
                        <span key={index} className="h-fit w-fit py-1 px-2 sm:px-3 text-sm rounded-md bg-[#293556]">{tech}</span>
                    ))}
                </div>
                <a href={myProject.vc_link} target="_blank" className="sm:px-3 sm:py-2 px-2 py-1 bg-indigo-500 text-black text-lg font-semibold rounded-sm flex gap-3 justify-center items-center">View Code</a>
            </div>
        </>
    );

};

export default Project;