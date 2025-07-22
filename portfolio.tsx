import { Navigation } from "./components/navigation"
import { HeroSection } from "./components/hero-section"
import { AboutSection } from "./components/about-section"
import { ProjectsSection } from "./components/projects-section"
import { ExperienceSection } from "./components/experience-section"
import { EducationSection } from "./components/education-section"
import { ContactSection } from "./components/contact-section"

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <ExperienceSection />
      <EducationSection />
      <ContactSection />
    </div>
  )
}
