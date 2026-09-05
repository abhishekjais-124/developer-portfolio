import { personalData } from "@/utils/data/personal-data";
import Link from "next/link";
import { FiLinkedin } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";
import { SiLeetcode } from "react-icons/si";
import ContactForm from "./contact-form";
import Reveal from "../../atelier/reveal";
import SectionFx from "../../atelier/section-fx";

function ContactSection() {
  const links = [
    personalData.github && { href: personalData.github, label: "GitHub", icon: <IoLogoGithub size={16} /> },
    personalData.linkedIn && { href: personalData.linkedIn, label: "LinkedIn", icon: <FiLinkedin size={16} /> },
    personalData.instagram && { href: personalData.instagram, label: "Instagram", icon: <FaInstagram size={16} /> },
    personalData.leetcode && { href: personalData.leetcode, label: "LeetCode", icon: <SiLeetcode size={16} /> },
  ].filter(Boolean);

  return (
    <section id="contact" className="relative overflow-hidden py-10 lg:py-16">
      <SectionFx variant="blob" />
      <div className="atelier-wrap">
        <Reveal>
          <div className="section-kicker">
            <span className="font-display text-lg tracking-normal text-[#c9a962]">13</span>
            <span className="kicker-line h-px w-8 bg-[#c9a962]/50" />
            <span>Correspondence</span>
          </div>
        </Reveal>
        <Reveal delay={80} className="clip-reveal" variant="clip-reveal">
          <h2 className="mt-3 font-display text-[2.15rem] leading-[1.08] text-[#f3eee4] sm:mt-4 sm:text-5xl sm:leading-[1.05]">
            <span>Write. I will answer.</span>
          </h2>
        </Reveal>
        <Reveal delay={120}>
          <p className="mt-4 max-w-xl text-sm leading-7 text-[#8d867b] sm:text-base">
            Collaborations, roles, or a precise question. I usually reply within a day.
          </p>
        </Reveal>

        <div className="mt-10 grid items-stretch gap-6 lg:grid-cols-2">
          <ContactForm />
          <div className="atelier-card flex h-full min-w-0 flex-col p-5 text-left sm:p-8">
            <p className="m-0 text-[0.62rem] uppercase leading-none tracking-[0.16em] text-[#e8d5a3]">Direct lines</p>
            <h3 className="mt-3 font-display text-2xl leading-tight text-[#f3eee4] sm:text-3xl">Reach without the form.</h3>
            <div className="mt-6 flex flex-col sm:mt-8">
              {[
                ["Email", personalData.email, `mailto:${personalData.email}`],
                ["Phone", personalData.phone, null],
                ["Studio", personalData.address, null],
              ].map(([label, value, href], i, arr) => (
                <div
                  key={label}
                  className={`py-4 ${i === 0 ? "pt-0" : ""} ${i !== arr.length - 1 ? "border-b border-[#c9a962]/15" : ""}`}
                >
                  <p className="m-0 text-[0.62rem] uppercase leading-none tracking-[0.16em] text-[#8d867b]">{label}</p>
                  {href ? (
                    <a href={href} className="mt-2 block break-all font-display text-lg leading-snug text-[#f3eee4] sm:text-xl">
                      {value}
                    </a>
                  ) : (
                    <p className="mt-2 break-words font-display text-lg leading-snug text-[#f3eee4] sm:text-xl">{value}</p>
                  )}
                </div>
              ))}
            </div>
            <div className="mt-6 flex gap-3 border-t border-[#c9a962]/15 pt-6 sm:mt-8 sm:pt-8">
              {links.map((item) => (
                <Link
                  key={item.label}
                  target="_blank"
                  href={item.href}
                  aria-label={item.label}
                  className="flex h-11 w-11 shrink-0 items-center justify-center border border-[#c9a962]/45 text-[#c8c0b2] hover:border-[#c9a962] hover:text-[#c9a962]"
                >
                  {item.icon}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
