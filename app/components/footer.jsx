import Link from "next/link";
import { personalData } from "@/utils/data/personal-data";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { WavesGif } from "./atelier/loop-visuals";

function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-[#c9a962]/12 pb-[env(safe-area-inset-bottom)]">
      <WavesGif className="pointer-events-none absolute inset-x-0 top-0 h-24 w-full opacity-60" />
      <div className="atelier-wrap py-10 lg:py-12">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <div>
            <p className="section-kicker mb-3 sm:mb-4">
              <span className="font-display text-lg tracking-normal">AJ</span>
              <span className="h-px w-8 bg-[#c9a962]/50" />
              <span>Available for conversations</span>
            </p>
            <h2 className="font-display text-[2.15rem] italic leading-[1.08] text-[#f3eee4] sm:text-5xl">
              Let&apos;s make something
              <span className="gold-text"> enduring.</span>
            </h2>
          </div>
          <div className="flex items-center gap-3">
            {personalData.github && (
              <Link target="_blank" href={personalData.github} aria-label="GitHub" className="flex h-11 w-11 items-center justify-center border border-[#c9a962]/20 text-[#c8c0b2] transition-colors hover:border-[#c9a962] hover:text-[#c9a962]">
                <FiGithub size={16} />
              </Link>
            )}
            {personalData.linkedIn && (
              <Link target="_blank" href={personalData.linkedIn} aria-label="LinkedIn" className="flex h-11 w-11 items-center justify-center border border-[#c9a962]/20 text-[#c8c0b2] transition-colors hover:border-[#c9a962] hover:text-[#c9a962]">
                <FiLinkedin size={16} />
              </Link>
            )}
            {personalData.leetcode && (
              <Link target="_blank" href={personalData.leetcode} aria-label="LeetCode" className="flex h-11 w-11 items-center justify-center border border-[#c9a962]/20 text-[#c8c0b2] transition-colors hover:border-[#c9a962] hover:text-[#c9a962]">
                <SiLeetcode size={16} />
              </Link>
            )}
            {personalData.instagram && (
              <Link target="_blank" href={personalData.instagram} aria-label="Instagram" className="flex h-11 w-11 items-center justify-center border border-[#c9a962]/20 text-[#c8c0b2] transition-colors hover:border-[#c9a962] hover:text-[#c9a962]">
                <FaInstagram size={16} />
              </Link>
            )}
          </div>
        </div>
        <div className="mt-12 flex flex-col justify-between gap-3 border-t border-[#c9a962]/10 pt-6 text-[0.68rem] uppercase tracking-[0.22em] text-[#8d867b] sm:flex-row">
          <p>© {new Date().getFullYear()} {personalData.name}</p>
          <p>Bangalore · Crafted with restraint</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
