"use client";

import { personalData } from "@/utils/data/personal-data";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";
import { MdDownload } from "react-icons/md";
import { SiLeetcode } from "react-icons/si";
import Magnetic from "../../atelier/magnetic";
import Tilt from "../../atelier/tilt";
import CountUp from "../../atelier/count-up";
import KineticName from "../../atelier/kinetic-name";
import GridDistort from "../../atelier/grid-distort";

function HeroSection() {
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);
  const stageRef = useRef(null);
  const copyRef = useRef(null);
  const imageRef = useRef(null);
  const statsRef = useRef(null);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    let raf = 0;
    const update = () => {
      const desktop = window.matchMedia("(min-width: 1024px)").matches;
      if (!desktop) {
        if (stageRef.current) stageRef.current.style.transform = "";
        if (copyRef.current) {
          copyRef.current.style.transform = "";
          copyRef.current.style.opacity = "";
        }
        if (imageRef.current) imageRef.current.style.transform = "";
        if (statsRef.current) {
          statsRef.current.style.opacity = "";
          statsRef.current.style.transform = "";
        }
        return;
      }

      const progress = Math.min(1, window.scrollY / (window.innerHeight * 0.92));
      const ease = 1 - (1 - progress) * (1 - progress);

      if (stageRef.current) {
        stageRef.current.style.transform = `scale(${1 + ease * 0.1})`;
      }
      if (copyRef.current) {
        copyRef.current.style.transform = `translate3d(0, ${ease * 72}px, 0) scale(${1 - ease * 0.06})`;
        copyRef.current.style.opacity = String(1 - ease * 0.92);
      }
      if (imageRef.current) {
        imageRef.current.style.transform = `scale(${1 + ease * 0.55})`;
      }
      if (statsRef.current) {
        statsRef.current.style.opacity = String(1 - ease * 1.15);
        statsRef.current.style.transform = `translate3d(0, ${ease * 36}px, 0)`;
      }
    };

    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  const heroStats = [
    { label: "Years", value: "4+" },
    { label: "LinkedIn", value: personalData.linkedinFollowers || "7.7k+" },
    { label: "Repositories", value: personalData.githubRepositories || "60+" },
    { label: "Based in", value: "BLR" },
  ];

  return (
    <section className="relative overflow-hidden pt-[5.5rem] pb-10 sm:pt-24 lg:pt-28 lg:pb-16">
      <GridDistort />
      <div ref={stageRef} className="origin-center lg:will-change-transform">
        <div className="atelier-wrap">
          <div className="grid items-end gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-8">
            <div ref={copyRef} className="pb-2 will-change-transform lg:pb-8">
              <div className="hero-in section-kicker" style={{ animationDelay: "80ms" }}>
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#c9a962] opacity-60" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[#c9a962]" />
                </span>
                {personalData.designation} · Bangalore
              </div>

              <KineticName />

              <p className="hero-in mt-5 max-w-xl text-[0.95rem] leading-7 text-[#c8c0b2] sm:mt-8 sm:text-lg sm:leading-8" style={{ animationDelay: "280ms" }}>
                I design backend systems that stay composed at scale — payments, live AI, and platforms serving millions.
              </p>

              <div className="hero-in hero-actions mt-7 flex flex-wrap items-center gap-3 sm:mt-9" style={{ animationDelay: "380ms" }}>
                <Magnetic>
                  <Link href="#contact" className="btn-gold shine-parent">
                    Enquire
                  </Link>
                </Magnetic>
                <Magnetic>
                  <button onClick={() => setIsResumeModalOpen(true)} className="btn-ghost">
                    View dossier
                  </button>
                </Magnetic>
                <Magnetic>
                  <a
                    href="https://drive.google.com/uc?export=download&id=10HVraDNws8YxkR9bP069HtwvHa_Q5LsN"
                    download="Abhishek_Jaiswal_Resume.pdf"
                    className="btn-ghost"
                  >
                    Download
                    <MdDownload size={14} />
                  </a>
                </Magnetic>
              </div>

              <div className="hero-in mt-6 flex items-center gap-2.5 sm:mt-8 sm:gap-3" style={{ animationDelay: "480ms" }}>
                {[
                  { href: personalData.github, icon: <FiGithub size={16} />, label: "GitHub" },
                  { href: personalData.linkedIn, icon: <FiLinkedin size={16} />, label: "LinkedIn" },
                  { href: personalData.leetcode, icon: <SiLeetcode size={15} />, label: "LeetCode" },
                  { href: personalData.instagram, icon: <FaInstagram size={16} />, label: "Instagram" },
                ].map((item) =>
                  item.href ? (
                    <Link
                      key={item.label}
                      href={item.href}
                      target="_blank"
                      aria-label={item.label}
                      className="flex h-11 w-11 items-center justify-center border border-[#c9a962]/18 text-[#c8c0b2] transition-all duration-300 hover:-translate-y-1 hover:border-[#c9a962] hover:text-[#c9a962]"
                    >
                      {item.icon}
                    </Link>
                  ) : null
                )}
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-[280px] sm:max-w-[380px] lg:mr-0 lg:max-w-[460px]">
              <div className="pointer-events-none absolute -inset-6 rounded-full bg-[radial-gradient(circle,rgba(201,169,98,0.22),transparent_62%)] blur-2xl sm:-inset-10" />
              <Tilt>
                <div className="relative overflow-hidden border border-[#c9a962]/25 bg-[#0c0c0d] shadow-[0_40px_120px_rgba(0,0,0,0.55)]">
                  <div className="absolute left-4 top-4 z-10 text-[0.58rem] uppercase tracking-[0.24em] text-[#e8d5a3] sm:left-5 sm:top-5 sm:text-[0.62rem] sm:tracking-[0.28em]">
                    Portrait · 01
                  </div>
                  <div className="overflow-hidden">
                    <div ref={imageRef} className="origin-center lg:will-change-transform">
                      <Image
                        src={personalData.profile}
                        width={720}
                        height={900}
                        alt="Abhishek Jaiswal"
                        priority
                        className="aspect-[4/5] h-auto max-h-[52vh] w-full object-cover object-top sm:max-h-none"
                      />
                    </div>
                  </div>
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#070707] via-transparent to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-4 sm:p-5">
                    <div>
                      <p className="font-display text-2xl italic text-[#f3eee4]">Atelier</p>
                      <p className="text-[0.62rem] uppercase tracking-[0.24em] text-[#c8c0b2]">Systems · Cloud · AI</p>
                    </div>
                    <p className="text-[0.62rem] uppercase tracking-[0.24em] text-[#c9a962]">Est. 2021</p>
                  </div>
                </div>
              </Tilt>
            </div>
          </div>

          <div ref={statsRef} className="mt-8 will-change-transform sm:mt-10">
            <div className="grid grid-cols-2 border-y border-[#c9a962]/12 sm:grid-cols-4">
              {heroStats.map((item, i) => (
                <div
                  key={item.label}
                  className={`hero-in px-3 py-5 sm:px-4 sm:py-6 ${
                    i % 2 === 1 ? "border-l border-[#c9a962]/12" : ""
                  } ${i >= 2 ? "border-t border-[#c9a962]/12 sm:border-t-0" : ""} ${
                    i !== 0 ? "sm:border-l sm:border-[#c9a962]/12" : ""
                  }`}
                  style={{ animationDelay: `${560 + i * 80}ms` }}
                >
                  <p className="text-[0.58rem] uppercase tracking-[0.2em] text-[#8d867b] sm:text-[0.62rem] sm:tracking-[0.24em]">{item.label}</p>
                  <p className="mt-1.5 font-display text-[1.85rem] text-[#f3eee4] sm:mt-2 sm:text-4xl">
                    <CountUp value={item.value} instant />
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-10 hidden items-center gap-4 lg:flex">
              <span className="text-[0.62rem] uppercase tracking-[0.28em] text-[#8d867b]">Scroll</span>
              <span className="relative h-12 w-px overflow-hidden bg-[#c9a962]/20">
                <span className="scroll-hint absolute inset-x-0 top-0 h-4 bg-[#c9a962]" />
              </span>
            </div>
          </div>
        </div>
      </div>

      {isResumeModalOpen && (
        <div
          className="fixed inset-0 z-[10000] flex items-end justify-center bg-black/80 p-0 backdrop-blur-md sm:items-center sm:p-3"
          onClick={() => setIsResumeModalOpen(false)}
        >
          <div
            className="relative h-[92dvh] w-full max-w-6xl overflow-hidden border border-[#c9a962]/20 bg-[#0c0c0d] sm:h-[92vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between gap-3 border-b border-[#c9a962]/15 px-4 py-3 sm:px-5 sm:py-4">
              <h3 className="truncate font-display text-lg text-[#f3eee4] sm:text-xl">Dossier — {personalData.name}</h3>
              <button
                onClick={() => setIsResumeModalOpen(false)}
                className="flex h-9 w-9 items-center justify-center border border-[#c9a962]/25 text-[#f3eee4] hover:border-[#c9a962] hover:text-[#c9a962]"
                aria-label="Close modal"
              >
                ×
              </button>
            </div>
            <div className="h-[calc(100%-3.6rem)] bg-white">
              <iframe
                src="https://drive.google.com/file/d/10HVraDNws8YxkR9bP069HtwvHa_Q5LsN/preview"
                className="h-full w-full border-0"
                allow="autoplay"
                title="Resume"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default HeroSection;
