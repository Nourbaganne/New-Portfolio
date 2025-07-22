import { Button } from "@/components/ui/button"
import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react"
import { TypewriterText } from "./typewriter-text"
import { HeroStarField } from "./hero-star-field"

export function HeroSection() {
  const roles = ["Full Stack Developer", "UI/UX Designer", "Problem Solver", "Creative Thinker"]

  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20 relative overflow-hidden">
      <HeroStarField />

      <div className="max-w-4xl mx-auto text-center space-y-8 relative z-10">
        <div className="space-y-4">
          <div className="animate-fade-in-up">
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent animate-gradient-x">
              Nour Baganne
            </h1>
          </div>

          <div className="animate-fade-in-up animation-delay-300">
            <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto">
              <TypewriterText
                texts={roles}
                speed={100}
                deleteSpeed={50}
                pauseTime={2000}
                className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
              />
            </p>
          </div>

          <div className="animate-fade-in-up animation-delay-600">
            <p className="text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed">
              I craft digital experiences that blend beautiful design with powerful functionality. Passionate about
              creating solutions that make a difference.
            </p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up animation-delay-900">
          <a
            href="https://www.upwork.com/freelancers/~0124dd3a9a40ecef2a"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block"
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-3 transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 animate-bounce-slow"
            >
              View My Work
              <ArrowRight className="ml-2 h-4 w-4 animate-pulse" />
            </Button>
          </a>
          <a
            href="/Engineer Resume v0.pdf"
            download
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block"
          >
            <Button
              variant="outline"
              size="lg"
              className="border-gray-600 text-gray-300 hover:bg-gray-800 px-8 py-3 bg-transparent transform hover:scale-105 hover:border-blue-400 hover:text-blue-400 transition-all duration-300"
            >
              <Download className="mr-2 h-4 w-4 animate-bounce" />
              Download CV
            </Button>
          </a>
        </div>

        <div className="flex justify-center space-x-6 pt-8 animate-fade-in-up animation-delay-1200">
          {[
            { icon: Github, href: "https://github.com/Nourbaganne", color: "hover:text-gray-300" },
            { icon: Linkedin, href: "https://www.linkedin.com/in/nour-baganne-19b5b0218/", color: "hover:text-blue-400" },
            { icon: Mail, href: "mailto:bagannenour007@gmail.com", color: "hover:text-green-400" },
          ].map((social, index) => (
            <a
              key={index}
              href={social.href}
              className={`text-gray-400 ${social.color} transition-all duration-300 transform hover:scale-125 hover:-translate-y-1`}
              style={{ animationDelay: `${1200 + index * 100}ms` }}
              target="_blank"
              rel="noopener noreferrer"
            >
              <social.icon className="h-6 w-6" />
            </a>
          ))}
        </div>

        {/* Floating elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-blue-500/10 rounded-full animate-float"></div>
        <div className="absolute bottom-20 right-10 w-16 h-16 bg-purple-500/10 rounded-full animate-float animation-delay-1000"></div>
        <div className="absolute top-1/2 left-5 w-12 h-12 bg-cyan-500/10 rounded-full animate-float animation-delay-2000"></div>
      </div>
    </section>
  )
}
