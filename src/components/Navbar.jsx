import React, { useRef, useContext } from 'react'
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { TiThMenu } from "react-icons/ti";
import { IoClose } from "react-icons/io5";
import { AppContext } from "../context/Context";
import { BsBrightnessHigh } from "react-icons/bs";
import { MdOutlineDarkMode } from "react-icons/md";



const Navbar = () => {
    const menuRef = useRef(null);
    const closeRef = useRef(null);
    const { darkMode, setDarkMode } = useContext(AppContext);
    console.log("darkMNode initially in Navbar: ", darkMode, " ");

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

        const gsapTimeline = gsap.timeline();

        gsapTimeline.from(".nav-comp", {
            duration: 1,
            y: 20,
            ease: "easeInOutExpo",
            opacity: 0,
            stagger: 0.2
        });
    });
    useGSAP((context, contextSafe) => {
        const handleMenuClick = contextSafe(() => {
            gsap.to(".aside", {
                right: 0,
                duration: 1.2,
                ease: "power3.out"
            });
        });
        const handleCloseClick = contextSafe(() => {
            gsap.to(".aside", {
                right: "-55%",
                duration: 1.3,
                ease: "power3.out"
            });
        });
        // Close sidebar immediately when screen size increases
        const handleResize = contextSafe(() => {
            if (window.innerWidth >= 768) {
                // Hide sidebar immediately without animation on larger screens
                gsap.set(".aside", { right: "-100%" });
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

    const { contextSafe } = useGSAP();

    const handleSideLinkClick = contextSafe((comp) => {
        gsap.to(".aside", {
            right: "-55%",
            duration: 1.3,
            ease: "power3.out"
        });
        handleScrollToSection(comp);
    });


    return (
        <>
            <div className={`main-nav  w-full sticky flex top-0 justify-between  items-center  h-[10dvh] px-5  z-50 backdrop-filter backdrop-blur-[17px] `}>
                <div className="logo text-xl font-bold bg-linear-to-br from-indigo-500  to-indigo-600 bg-clip-text text-transparent ">SMN</div>
                <TiThMenu className="visible md:hidden h-6 w-6 cursor-pointer" ref={menuRef} />

                <div
                    className="nav-links xl:[25%] w-[60%]  hidden md:flex items-center justify-evenly  px-1 gap-5 xl:gap-0  mx-3 min-h-fit min-w-fit font-medium lg:mx-5 xl:mx-10">
                    <button onClick={() => { handleScrollToSection("home") }} className="nav-comp linkEffect  linkEffect--rightToLeft ">Home</button>
                    <button onClick={() => { handleScrollToSection("about") }} className="nav-comp linkEffect  linkEffect--rightToLeft">About Me</button>
                    <button onClick={() => { handleScrollToSection("education") }} className="nav-comp linkEffect  linkEffect--rightToLeft">Education</button>
                    <button onClick={() => { handleScrollToSection("skills") }} className="nav-comp linkEffect  linkEffect--rightToLeft">Skills</button>
                    <button onClick={() => { handleScrollToSection("projects") }} className="nav-comp linkEffect  linkEffect--rightToLeft">Projects</button>
                    <button onClick={() => { handleScrollToSection("contact") }} className="nav-comp linkEffect  linkEffect--rightToLeft">Contact Me</button>
                    {/*<button className="bg-[#de7595] text-black p-1.5 rounded-lg font-semibold">Download CV</button>*/}


                    <a href="/assets/Shaik_Mohammed_Noushad_Resume.pdf" download>
                        <button
                            className="nav-comp bg-indigo-500 text-black p-1.5 px-2 min-w-fit text-sm flex flex-wrap md:rounded-lg md:font-semibold cursor-pointer">Download
                            CV
                        </button>
                    </a>

                    <button onClick={() => { setDarkMode(!darkMode) }}
                        className={`nav-comp mode-btn py-2 px-3 cursor-pointer rounded-lg border border-slate-700`}>
                        <MdOutlineDarkMode className={`h-5 w-5 ${darkMode ? "hidden" : "block"}`} />
                        <BsBrightnessHigh className={`h-5 w-5 ${darkMode ? "block" : "hidden"}`} />
                    </button>
                </div>

                <div className={`aside ${darkMode ? "text-white border-l-2 border-l-white" : "text-black border-l-2 border-l-black"}`} >
                    <div className="close ">  <IoClose ref={closeRef} className="close-i cursor-pointer h-6 w-6" /></div>
                    <button onClick={() => { handleSideLinkClick("home") }} className="sidebar linkEffect1  linkEffect--rightToLeft1">Home</button>
                    <button onClick={() => { handleSideLinkClick("about") }} className="sidebar linkEffect1  linkEffect--rightToLeft1">About Me</button>
                    <button onClick={() => { handleSideLinkClick("education") }} className="sidebar linkEffect1  linkEffect--rightToLeft1">Education</button>
                    <button onClick={() => { handleSideLinkClick("skills") }} className="sidebar linkEffect1  linkEffect--rightToLeft1">Skills</button>
                    <button onClick={() => { handleSideLinkClick("projects") }} className="sidebar linkEffect1  linkEffect--rightToLeft1">Projects</button>
                    <button onClick={() => { handleSideLinkClick("contact") }} className="sidebar linkEffect1  linkEffect--rightToLeft1">Contact Me</button>
                    <a href="/assets/Shaik_Mohammed_Noushad_Resume.pdf" className="aside-cvBtn sidebar linkEffect1  linkEffect--rightToLeft1" download>
                        <button
                            className="nav-comp bg-indigo-500 text-black p-1.5 px-2 min-w-fit text-sm flex flex-wrap rounded-lg cursor-pointer">Download
                            CV
                        </button>
                    </a>
                    <button className="aside-modeBtn sidebar linkEffect1  linkEffect--rightToLeft1" onClick={() => { setDarkMode(!darkMode) }}>
                        <div className="nav-comp  p-2 py-2 min-w-fit w-25 simple-center cursor-pointer rounded-lg border border-slate-700">
                            <MdOutlineDarkMode className={`h-5 w-5 ${darkMode ? "hidden" : "block"}`} />
                            <BsBrightnessHigh className={`h-5 w-5 ${darkMode ? "block" : "hidden"}`} />
                        </div>
                    </button>
                </div>
            </div>
        </>
    )
}

export default Navbar