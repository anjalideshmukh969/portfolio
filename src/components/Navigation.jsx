import React, { useEffect, useRef, useState} from 'react'
import { TiThMenu } from "react-icons/ti";
import { IoClose } from "react-icons/io5";
import { MdOutlineDarkMode } from "react-icons/md";
import gsap from "gsap";
import {useGSAP} from "@gsap/react";

const Navigation = () => {
    const menuRef = useRef(null)
    const closeRef = useRef(null);
    const asideRef = useRef(null);

    const [showAside, setShowAside] = useState(false);

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if(element){
            element.scrollIntoView({behavior: "smooth",block:"start"});
        }
    };
    const handleScrollToSection = (sectionId) => {
        // already in home page,just need to scroll
        scrollToSection(sectionId);
    };
    useGSAP(()=>{
        const gsapTimeline = gsap.timeline();
        gsapTimeline.from(".nav-comp",{
            duration:1,
            y:20,
            ease:"easeInOutExpo",
            opacity:0,
            stagger:0.2
        });
    });
    useGSAP((context, contextSafe) => {
        const handleMenuClick = contextSafe(() => {
            // setShowAside(true);
            // tl.play();
            gsap.to(asideRef.current, {
                right: 0,
                duration: 1.2,
                ease: "power3.out"
            });
        });
        const handleCloseClick = contextSafe(() => {
            // setShowAside(false);
            gsap.to(asideRef.current, {
                right:"-55%",
                duration: 1.3,
                ease: "power3.out"
            });
        });
        // Close sidebar immediately when screen size increases
        const handleResize = contextSafe(() => {
            if (window.innerWidth >= 768) {
                // Hide sidebar immediately without animation on larger screens
                gsap.set(asideRef.current, { right: "-100%" });
            }
        });

        menuRef.current?.addEventListener("click", handleMenuClick);
        closeRef.current?.addEventListener("click", handleCloseClick);
        window.addEventListener("resize", handleResize);

        return () => {
            menuRef.current?.removeEventListener("click", handleMenuClick);
            closeRef.current?.removeEventListener("click", handleCloseClick);
            window.removeEventListener("resize", handleResize);
        };
    }, []);
    const {contextSafe} = useGSAP({scope: asideRef});
    const handleSideLinkClick = contextSafe((comp) => {
        gsap.to('.good', { rotation: 180 });
        setShowAside(false);
    });

  return (
    <>
            <div  className="main-nav w-dvw sticky flex top-0  justify-between  items-center  h-[10dvh] px-5 ">
                <div className="logo text-xl font-bold text-indigo-400">Portfolio</div>
                <TiThMenu className="visible md:hidden h-6 w-6 cursor-pointer" ref={menuRef} />
                <div
                    className="nav-links xl:[25%] w-[60%]  hidden md:flex items-center justify-evenly  px-1 gap-5 xl:gap-0  mx-3 min-h-fit min-w-fit font-medium lg:mx-5 xl:mx-10">
                    <button  onClick={()=>{handleScrollToSection("home")}} className="nav-comp linkEffect  linkEffect--rightToLeft ">Home</button>
                    <button  onClick={()=>{handleScrollToSection("about")}} className="nav-comp linkEffect  linkEffect--rightToLeft">About Me</button>
                    <button  onClick={()=>{handleScrollToSection("skills")}} className="nav-comp linkEffect  linkEffect--rightToLeft">Skills</button>
                    <button onClick={()=>{handleScrollToSection("projects")}}  className="nav-comp linkEffect  linkEffect--rightToLeft">Projects</button>
                    <button  onClick={()=>{handleScrollToSection("contact")}} className="nav-comp linkEffect  linkEffect--rightToLeft">Contact Me</button>
                    {/*<button className="bg-[#de7595] text-black p-1.5 rounded-lg font-semibold">Download CV</button>*/}
                    <button
                        className="nav-comp bg-indigo-500 text-black p-1.5 px-2 min-w-fit text-sm flex flex-wrap md:rounded-lg md:font-semibold">Download
                        CV
                    </button>
                    <button className="nav-comp mode-btn py-2 px-3 rounded-lg border-[1px] border-slate-600">
                        <MdOutlineDarkMode className="h-5 w-5"/>
                    </button>
                </div>
                <div className={`aside `} ref={asideRef}>
                    <div className="close " ref={closeRef}> <IoClose className="close-i cursor-pointer h-6 w-6" /></div>
                    <button onClick={()=>{handleSideLinkClick("home")}} className="sidebar linkEffect1  linkEffect--rightToLeft1">Home</button>
                    <button onClick={()=>{handleScrollToSection("about")}} className="sidebar linkEffect1  linkEffect--rightToLeft1">About Me</button>
                    <button onClick={()=>{handleScrollToSection("skills")}} className="sidebar linkEffect1  linkEffect--rightToLeft1">Skills</button>
                    <button onClick={()=>{handleScrollToSection("projects")}} className="sidebar linkEffect1  linkEffect--rightToLeft1">Projects</button>
                    <button onClick={()=>{handleScrollToSection("contact")}} className="sidebar linkEffect1  linkEffect--rightToLeft1">Contact Me</button>

                </div>
            </div>
        </>
    
  )
}

export default Navigation