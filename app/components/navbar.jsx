// @flow strict
import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";
import { personalData } from "@/utils/data/personal-data";
// Theme toggle removed to enforce dark-only theme

const navLinks = [
  { href: "/#about", label: "About" },
  { href: "/#experience", label: "Experience" },
  { href: "/#skills", label: "Skills" },
  { href: "/#education", label: "Education" },
  { href: "/#achievements", label: "Achievements" },
  { href: "/#projects", label: "Projects" },
];

function Navbar() {
  return (
    <nav className="sticky top-4 z-[9998]">
      <div className="relative overflow-hidden rounded-2xl dark:ring-1 dark:ring-white/5 dark:bg-white/5 backdrop-blur-xl px-4 sm:px-6 py-3 dark:shadow-[0_20px_80px_rgba(0,0,0,0.45)]">
        <div className="absolute inset-0 opacity-60 dark:bg-[radial-gradient(circle_at_10%_20%,rgba(22,242,179,0.15),transparent_45%),radial-gradient(circle_at_90%_0%,rgba(106,90,249,0.18),transparent_40%)]" />
        <div className="absolute inset-x-6 top-0 h-px dark:bg-gradient-to-r dark:from-transparent dark:via-white/40 dark:to-transparent" />

        <div className="relative flex items-center justify-between gap-3">
          <Link href="/" className="flex items-center gap-3 group">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[#16f2b3] via-[#6a5af9] to-[#f472b6] dark:text-[#050915] font-semibold shadow-[0_10px_30px_rgba(0,0,0,0.35)] group-hover:scale-[1.04] transition-transform duration-300">
              AJ
            </span>
            <span className="text-lg font-semibold dark:text-white">ABHISHEK</span>
          </Link>

          <div className="hidden md:flex items-center gap-1 rounded-full dark:ring-1 dark:ring-white/5 dark:bg-white/5 px-1 py-1 backdrop-blur-sm dark:shadow-[0_10px_40px_rgba(0,0,0,0.25)]">
            {navLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-3 lg:px-4 py-2 rounded-full text-sm font-medium dark:text-white/80 transition-all duration-200 dark:hover:text-white dark:hover:bg-white/10"
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <Link
              href="#contact"
              className="hidden sm:flex items-center gap-2 rounded-full dark:border-white/15 border dark:bg-white/5 px-3 py-2 text-sm font-semibold dark:text-white dark:hover:border-white/30 dark:hover:bg-white/10 transition-all duration-200"
            >
              Let&apos;s Talk
            </Link>
            {personalData?.resume && (
              <Link
                href={personalData.resume}
                target="_blank"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#16f2b3] via-[#6a5af9] to-[#f472b6] px-3 sm:px-4 py-2 text-sm font-semibold dark:text-[#050915] shadow-[0_12px_30px_rgba(0,0,0,0.35)] transition-transform duration-200 hover:translate-y-[-1px]"
              >
                Resume <FiArrowUpRight size={16} />
              </Link>
            )}
          </div>
        </div>

        <div className="md:hidden mt-3 flex items-center gap-2 overflow-x-auto">
          {navLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="px-3 py-1.5 rounded-full text-xs font-medium text-white/80 border border-white/10 bg-white/5 flex-shrink-0"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;