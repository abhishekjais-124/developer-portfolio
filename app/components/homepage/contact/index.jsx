// @flow strict
import { personalData } from '@/utils/data/personal-data';
import Link from 'next/link';
import { BiLogoLinkedin } from "react-icons/bi";
import { CiLocationOn } from "react-icons/ci";
import { FaInstagram } from 'react-icons/fa';
import { IoLogoGithub, IoMdCall } from "react-icons/io";
import { MdAlternateEmail } from "react-icons/md";
import { SiLeetcode } from "react-icons/si";
import ContactForm from './contact-form';

function ContactSection() {
  return (
    <div id="contact" className="relative my-12 lg:my-20 text-white">
      <div className="absolute inset-0 -z-20 bg-[radial-gradient(120%_120%_at_80%_0%,rgba(106,90,249,0.18),transparent_48%),radial-gradient(120%_120%_at_10%_10%,rgba(22,242,179,0.18),transparent_46%)]" />
      <div className="absolute inset-0 -z-10 opacity-25 bg-[linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(0deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:140px_140px]" />

      <div className="flex justify-center my-6 lg:py-10">
        <div className="flex flex-col items-center gap-3">
          <div className="flex items-center gap-3">
            <span className="hidden sm:block h-[1px] w-16 bg-gradient-to-r from-transparent via-pink-500/60 to-transparent" />
            <span className="rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm md:text-base font-semibold text-white shadow-[0_12px_40px_rgba(0,0,0,0.35)] backdrop-blur">
              Let&apos;s Talk
            </span>
            <span className="hidden sm:block h-[1px] w-16 bg-gradient-to-r from-transparent via-[#16f2b3]/60 to-transparent" />
          </div>
          <p className="text-xs sm:text-sm text-[#c7d2ff]/80 max-w-2xl text-center px-4">
            Drop a note for collaborations, consulting, or a simple hello. I usually respond within a day.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14 items-start">
        <ContactForm />

        <div className="lg:mt-[52px]">
          <div className="relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-5 sm:p-7 lg:p-8 shadow-[0_20px_70px_rgba(0,0,0,0.35)] overflow-hidden">
            <div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_20%_20%,rgba(22,242,179,0.18),transparent_35%),radial-gradient(circle_at_80%_30%,rgba(106,90,249,0.22),transparent_34%)]" />
            <div className="relative flex flex-col gap-6">
              <div>
                <p className="text-sm uppercase tracking-[0.18em] dark:text-white/70 light:text-gray-700">Direct lines</p>
              <h3 className="text-2xl font-semibold dark:text-white light:text-gray-900 mt-2">Reach out anytime</h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3">
                <div className="h-11 w-11 rounded-lg bg-gradient-to-br from-[#16f2b3]/30 to-[#6a5af9]/30 border border-white/10 flex items-center justify-center dark:text-white light:text-gray-900">
                  <MdAlternateEmail size={22} />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.14em] dark:text-white/60 light:text-gray-600">Email</p>
                  <p className="text-sm font-semibold dark:text-white light:text-gray-900 break-all">{personalData.email}</p>
                </div>
              </div>

              <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3">
                <div className="h-11 w-11 rounded-lg bg-gradient-to-br from-[#f472b6]/30 to-[#6a5af9]/30 border border-white/10 flex items-center justify-center dark:text-white light:text-gray-900">
                  <IoMdCall size={22} />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.14em] dark:text-white/60 light:text-gray-600">Phone</p>
                  <p className="text-sm font-semibold dark:text-white light:text-gray-900">{personalData.phone}</p>
                </div>
              </div>

              <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3 sm:col-span-2">
                <div className="h-11 w-11 rounded-lg bg-gradient-to-br from-[#16f2b3]/30 to-[#f472b6]/30 border border-white/10 flex items-center justify-center dark:text-white light:text-gray-900">
                  <CiLocationOn size={22} />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.14em] dark:text-white/60 light:text-gray-600">Location</p>
                  <p className="text-sm font-semibold dark:text-white light:text-gray-900">{personalData.address}</p>
                </div>
              </div>
            </div>

            <div className="mt-2 flex flex-wrap items-center gap-3">
              {personalData.github && (
                <Link target="_blank" href={personalData.github} aria-label="GitHub" className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/80 hover:text-white hover:border-white/30 transition-all duration-200">
                  <IoLogoGithub size={22} />
                </Link>
              )}

              {personalData.linkedIn && (
                <Link target="_blank" href={personalData.linkedIn} aria-label="LinkedIn" className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/80 hover:text-white hover:border-white/30 transition-all duration-200">
                  <BiLogoLinkedin size={22} />
                </Link>
              )}

              {personalData.instagram && (
                <Link target="_blank" href={personalData.instagram} aria-label="Instagram" className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/80 hover:text-white hover:border-white/30 transition-all duration-200">
                  <FaInstagram size={22} />
                </Link>
              )}

              {personalData.leetcode && (
                <Link target="_blank" href={personalData.leetcode} aria-label="LeetCode" className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/80 hover:text-white hover:border-white/30 transition-all duration-200">
                  <SiLeetcode size={20} />
                </Link>
              )}
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}

export default ContactSection;