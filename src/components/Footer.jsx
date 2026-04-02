import React from "react";

function Footer() {
  return (
    <footer className="relative w-full mt-20">
      {/* subtle top glow line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[85%] h-px bg-gradient-to-r from-transparent via-indigo-500/40 to-transparent" />
      <div className="flex flex-col items-center justify-center gap-3 py-10 text-center">
        <p className="text-sm text-slate-400 tracking-wide">
          © {new Date().getFullYear()}{" "}
          <span className="text-slate-200 font-semibold">
            Anjali
          </span>. All rights reserved.
        </p>
        <p className="text-xs text-slate-500">
          Crafted with <span className="text-red-400">♥</span> using React & Tailwind
        </p>
      </div>
    </footer>
  );
}
export default Footer;

