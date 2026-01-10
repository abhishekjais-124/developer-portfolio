// @flow strict
import Link from 'next/link';
import { personalData } from '@/utils/data/personal-data';
import { BsGithub, BsLinkedin } from 'react-icons/bs';
import { FaInstagram } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';

function Footer() {
  return (
    <footer className="relative mt-12 dark:border-white/10 light:border-gray-300/20 border-t dark:bg-[#050915]/80 light:bg-white/80 dark:text-white light:text-gray-900">
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-40 dark:bg-[radial-gradient(circle_at_20%_20%,rgba(22,242,179,0.16),transparent_35%),radial-gradient(circle_at_80%_0%,rgba(106,90,249,0.2),transparent_32%)] light:bg-[radial-gradient(circle_at_20%_20%,rgba(100,200,150,0.08),transparent_35%),radial-gradient(circle_at_80%_0%,rgba(150,120,200,0.1),transparent_32%)]" />
      <div className="mx-auto px-6 sm:px-12 lg:max-w-[72rem] xl:max-w-[78rem] 2xl:max-w-[94rem] py-8 lg:py-10">
        <div className="flex flex-col items-center gap-4">
          <div className="flex items-center gap-3">
            {personalData.github && (
              <Link target="_blank" href={personalData.github} aria-label="GitHub" className="flex h-10 w-10 items-center justify-center rounded-full dark:border-white/10 light:border-gray-300/20 border dark:bg-white/5 light:bg-black/5 dark:text-white/70 light:text-gray-700 dark:hover:text-white light:hover:text-gray-900 dark:hover:border-white/30 light:hover:border-gray-400/50 transition-all duration-200">
                <BsGithub size={18} />
              </Link>
            )}
            {personalData.linkedIn && (
              <Link target="_blank" href={personalData.linkedIn} aria-label="LinkedIn" className="flex h-10 w-10 items-center justify-center rounded-full dark:border-white/10 light:border-gray-300/20 border dark:bg-white/5 light:bg-black/5 dark:text-white/70 light:text-gray-700 dark:hover:text-white light:hover:text-gray-900 dark:hover:border-white/30 light:hover:border-gray-400/50 transition-all duration-200">
                <BsLinkedin size={18} />
              </Link>
            )}
            {personalData.leetcode && (
              <Link target="_blank" href={personalData.leetcode} aria-label="LeetCode" className="flex h-10 w-10 items-center justify-center rounded-full dark:border-white/10 light:border-gray-300/20 border dark:bg-white/5 light:bg-black/5 dark:text-white/70 light:text-gray-700 dark:hover:text-white light:hover:text-gray-900 dark:hover:border-white/30 light:hover:border-gray-400/50 transition-all duration-200">
                <SiLeetcode size={18} />
              </Link>
            )}
            {personalData.instagram && (
              <Link target="_blank" href={personalData.instagram} aria-label="Instagram" className="flex h-10 w-10 items-center justify-center rounded-full dark:border-white/10 light:border-gray-300/20 border dark:bg-white/5 light:bg-black/5 dark:text-white/70 light:text-gray-700 dark:hover:text-white light:hover:text-gray-900 dark:hover:border-white/30 light:hover:border-gray-400/50 transition-all duration-200">
                <FaInstagram size={18} />
              </Link>
            )}
          </div>

          <p className="text-sm text-center dark:text-white/60 light:text-gray-700">
            © {new Date().getFullYear()} Crafted by <span className="dark:text-white light:text-gray-900">{personalData.name}</span>. Built with care and plenty of coffee.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;