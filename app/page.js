import AboutSection from "./components/homepage/about";
import ContactSection from "./components/homepage/contact";
import Education from "./components/homepage/education";
import Achievements from "./components/homepage/achievements";
import Certifications from "./components/homepage/certifications";
import Recommendations from "./components/homepage/recommendations";
import VisualizationSection from "./components/homepage/visualizations";
import Experience from "./components/homepage/experience";
import HeroSection from "./components/homepage/hero-section";
import Projects from "./components/homepage/projects";
import Skills from "./components/homepage/skills";
import Highlights from "./components/homepage/highlights";
import CodingProfiles from "./components/homepage/coding-profiles";
import HobbiesSection from "./components/homepage/hobbies";

export default async function Home() {
  return (
    <div suppressHydrationWarning>
      <HeroSection />
      <AboutSection />
      <Experience />
      <Skills />
      <Projects />
      <Highlights />
      <Education />
      <CodingProfiles />
      <Achievements />
      <Certifications />
      <Recommendations />
      <HobbiesSection />
      <VisualizationSection />
      <ContactSection />
    </div>
  );
}
