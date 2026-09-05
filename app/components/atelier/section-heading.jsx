import Reveal from "./reveal";
import { OrbitGif } from "./loop-visuals";

export default function SectionHeading({
  index,
  kicker,
  title,
  subtitle,
  align = "left",
}) {
  return (
    <div className={`relative mb-7 lg:mb-10 ${align === "center" ? "text-center" : ""}`}>
      <OrbitGif
        className={`pointer-events-none absolute -top-8 hidden opacity-50 sm:block ${align === "center" ? "left-1/2 -translate-x-1/2" : "right-0"}`}
        size={88}
      />
      <Reveal>
        <div className={`section-kicker ${align === "center" ? "justify-center" : ""}`}>
          <span className="font-display text-lg tracking-normal text-[#c9a962]">{index}</span>
          <span className="kicker-line h-px w-8 bg-[#c9a962]/50" />
          <span>{kicker}</span>
        </div>
      </Reveal>
      <Reveal delay={80} className="clip-reveal" variant="clip-reveal">
        <h2 className="mt-3 font-display text-[2.15rem] leading-[1.05] text-[#f3eee4] sm:mt-4 sm:text-5xl sm:leading-[0.95] lg:text-6xl">
          <span>{title}</span>
        </h2>
      </Reveal>
      {subtitle && (
        <Reveal delay={160}>
          <p className={`mt-5 max-w-xl text-sm leading-7 text-[#8d867b] sm:text-base ${align === "center" ? "mx-auto" : ""}`}>
            {subtitle}
          </p>
        </Reveal>
      )}
    </div>
  );
}
