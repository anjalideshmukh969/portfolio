import React, { useRef, useContext } from 'react'
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { TiThMenu } from "react-icons/ti";
import { IoClose } from "react-icons/io5";
import { AppContext } from "../context/Context";
import { BsBrightnessHigh } from "react-icons/bs";
import { MdOutlineDarkMode } from "react-icons/md";
import Resume from "../assets/resume.pdf"

const Navbar = () => {
    const menuRef = useRef(null);
    const closeRef = useRef(null);
    const { darkMode, setDarkMode } = useContext(AppContext);

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };

    useGSAP(() => {
        gsap.from(".nav-comp", {
            duration: 1,
            y: 20,
            opacity: 0,
            stagger: 0.2
        });
    });

    useGSAP((context, contextSafe) => {
        const handleMenuClick = contextSafe(() => {
            gsap.to(".aside", { right: 0, duration: 1.2, ease: "power3.out" });
        });

        const handleCloseClick = contextSafe(() => {
            gsap.to(".aside", { right: "-55%", duration: 1.3, ease: "power3.out" });
        });

        const handleResize = contextSafe(() => {
            if (window.innerWidth >= 768) {
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
        gsap.to(".aside", { right: "-55%", duration: 1.3, ease: "power3.out" });
        scrollToSection(comp);
    });

    return (
        <>
            <div className="main-nav w-full sticky top-0 flex justify-between items-center h-[10dvh] px-5 z-50 backdrop-filter backdrop-blur-[17px]">

                <div className="logo text-xl font-bold bg-linear-to-br from-indigo-500 to-indigo-600 bg-clip-text text-transparent">
                    Portfolio
                </div>

                <TiThMenu className="visible md:hidden h-6 w-6 cursor-pointer" ref={menuRef} />


                <div
                    className="
                        nav-links
                        w-[60%]
                        hidden md:flex
                        items-center
                        justify-end
                        space-x-8
                        font-medium">
                    <button onClick={() => scrollToSection("home")}
                        className="nav-comp linkEffect linkEffect--rightToLeft">
                        Home
                    </button>

                    <button onClick={() => scrollToSection("about")}
                        className="nav-comp linkEffect linkEffect--rightToLeft">
                        About Me
                    </button>

                    <button onClick={() => scrollToSection("contact")}
                        className="nav-comp linkEffect linkEffect--rightToLeft">
                        Contact Me
                    </button>

                    <a href={Resume} download>
                        <button className="nav-comp bg-indigo-500 text-black p-1.5 px-2 text-sm rounded-lg font-semibold 
                        hover:bg-indigo-400 hover:text-gray-200">
                            DOWNLOAD RESUME
                        </button>
                    </a>

                    <button
                        onClick={() => setDarkMode(!darkMode)}
                        className="nav-comp mode-btn py-2 px-3 rounded-lg border border-slate-700"
                    >
                        <MdOutlineDarkMode className={`h-5 w-5 ${darkMode ? "hidden" : "block"}`} />
                        <BsBrightnessHigh className={`h-5 w-5 ${darkMode ? "block" : "hidden"}`} />
                    </button>
                </div>

                {/* SIDEBAR — underline restored */}
                <div className={`aside ${darkMode ? "text-white border-l-2 border-white" : "text-black border-l-2 border-black"}`}>
                    <div className="close">
                        <IoClose ref={closeRef} className="cursor-pointer h-6 w-6" />
                    </div>

                    <button onClick={() => handleSideLinkClick("home")}
                        className="sidebar linkEffect1 linkEffect--rightToLeft1">
                        Home
                    </button>

                    <button onClick={() => handleSideLinkClick("about")}
                        className="sidebar linkEffect1 linkEffect--rightToLeft1">
                        About Me
                    </button>

                    <button onClick={() => handleSideLinkClick("contact")}
                        className="sidebar linkEffect1 linkEffect--rightToLeft1">
                        Contact Me
                    </button>

                    <a href={Resume} download
                        className="aside-cvBtn sidebar linkEffect1 linkEffect--rightToLeft1">
                        <button className="nav-comp bg-indigo-500 text-black p-1.5 px-2 text-sm rounded-lg">
                            Download CV
                        </button>
                    </a>

                    <button
                        onClick={() => setDarkMode(!darkMode)}
                        className="aside-modeBtn sidebar linkEffect1 linkEffect--rightToLeft1"
                    >
                        <div className="nav-comp p-2 rounded-lg border border-slate-700">
                            <MdOutlineDarkMode className={`h-5 w-5 ${darkMode ? "hidden" : "block"}`} />
                            <BsBrightnessHigh className={`h-5 w-5 ${darkMode ? "block" : "hidden"}`} />
                        </div>
                    </button>
                </div>
            </div>
        </>
    );
};

export default Navbar;

