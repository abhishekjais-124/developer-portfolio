"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { personalData } from "@/utils/data/personal-data";
import Magnetic from "./atelier/magnetic";
import ProximityNav from "./atelier/proximity-nav";

const navLinks = [
  { href: "/#about", label: "About" },
  { href: "/#experience", label: "Work" },
  { href: "/#projects", label: "Selected" },
  { href: "/#achievements", label: "Marks" },
  { href: "/#contact", label: "Contact" },
];

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 18);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (event) => {
      if (event.key === "Escape") setOpen(false);
    };
    const onResize = () => {
      if (window.innerWidth >= 1024) setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
    };
  }, [open]);

  return (
    <nav className="fixed inset-x-0 top-0 z-[80] pt-[env(safe-area-inset-top)]">
      <div
        className={`transition-all duration-500 ${
          scrolled || open
            ? "border-b border-[#c9a962]/15 bg-[#070707]/80 backdrop-blur-xl"
            : "bg-transparent"
        }`}
      >
        <div className="atelier-wrap flex items-center justify-between py-3 sm:py-4">
          <Link href="/" className="group flex min-w-0 items-center gap-2.5 sm:gap-3" onClick={() => setOpen(false)}>
            <span className="relative flex h-10 w-10 shrink-0 items-center justify-center border border-[#c9a962]/40 font-display text-lg text-[#c9a962] transition-colors group-hover:bg-[#c9a962] group-hover:text-[#070707]">
              <span className="pulse-core absolute inset-0 border border-[#c9a962]/30" />
              AJ
            </span>
            <span className="truncate text-[0.62rem] font-medium uppercase tracking-[0.22em] text-[#f3eee4] sm:text-[0.7rem] sm:tracking-[0.28em]">
              Abhishek
            </span>
          </Link>

          <ProximityNav className="hidden items-center gap-8 lg:flex">
            {navLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                data-proximity
                className="text-[0.68rem] font-medium uppercase tracking-[0.26em] text-[#c8c0b2]"
              >
                {item.label}
              </Link>
            ))}
          </ProximityNav>

          <div className="flex items-center gap-3">
            {personalData?.resume && (
              <Magnetic>
                <Link
                  href={personalData.resume}
                  target="_blank"
                  className="hidden border border-[#c9a962]/40 px-4 py-2 text-[0.65rem] font-medium uppercase tracking-[0.24em] text-[#e8d5a3] transition-colors hover:border-[#c9a962] hover:bg-[#c9a962] hover:text-[#070707] sm:inline-flex"
                >
                  Resume
                </Link>
              </Magnetic>
            )}
            <button
              className="flex h-11 w-11 flex-col items-center justify-center gap-1.5 border border-[#c9a962]/30 lg:hidden"
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
            >
              <span className={`h-px w-4 bg-[#f3eee4] transition ${open ? "translate-y-[4px] rotate-45" : ""}`} />
              <span className={`h-px w-4 bg-[#f3eee4] transition ${open ? "-translate-y-[4px] -rotate-45" : ""}`} />
            </button>
          </div>
        </div>
      </div>

      <div
        className={`fixed inset-x-0 bottom-0 z-[79] bg-[#070707]/96 backdrop-blur-xl transition-opacity duration-300 lg:hidden ${
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
        style={{ top: "calc(4.35rem + env(safe-area-inset-top, 0px))" }}
      >
        <div className="atelier-wrap flex h-full flex-col justify-between pb-[max(1.5rem,env(safe-area-inset-bottom))] pt-8">
          <div className="flex flex-col gap-1">
            {navLinks.map((item, index) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="flex min-h-14 items-baseline justify-between border-b border-[#c9a962]/12 py-4"
              >
                <span className="font-display text-3xl italic text-[#f3eee4] sm:text-4xl">{item.label}</span>
                <span className="font-display text-sm text-[#c9a962]/70">0{index + 1}</span>
              </Link>
            ))}
          </div>
          <div className="mt-8 flex flex-col gap-4">
            {personalData?.resume && (
              <Link
                href={personalData.resume}
                target="_blank"
                onClick={() => setOpen(false)}
                className="btn-gold w-full"
              >
                Resume
              </Link>
            )}
            <p className="text-[0.62rem] uppercase tracking-[0.2em] text-[#8d867b]">Bangalore · Available</p>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
