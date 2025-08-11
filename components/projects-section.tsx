import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"
import Image from "next/image"
import { AnimatedSection } from "./animated-section"

export function ProjectsSection() {
  const projects = [
    {
      title: "Zainspot - E-commerce",
      description: "Developed ZainSpot, a global e-commerce platform offering virtual office solutions to help businesses expand internationally, with a focus on accessibility, affordability, and support for emerging economies.",
      image: "/zainspot.png?height=200&width=400",
      tags: ["NextJs", "NestJs", "TypeORM", "Mysql", "Stripe", "AWS", "Netlify", "Vercel"],
      liveUrl: "https://www.zainspot.com/",
    },
    {
      title: "Retain Health - Alzheimer's Prevention Platform",
      description: "Contributed to the development of a personalized web app that promotes brain health by guiding users to build better habits and reduce Alzheimer’s risk through small, impactful behavior changes.",
      image: "/retain-health.png?height=200&width=400",
      tags: ["Angular", "Node.js", "ExpressJs", "Mysql", "Stripe", "AWS", "Netlify"],
      liveUrl: "https://retainhealth.com/",
    },
    {
      title: "Menu Qube",
      description: "Helped build a web application for restaurants to display menus via QR codes, manage orders, and update menu items—enhancing efficiency, boosting sales, and streamlining the dining experience with no app downloads required.",
      image: "/menu-cube.png?height=200&width=400",
      tags: ["React", "NextJs", "ExpressJs", "MongoDB", "Charts.js"],
      liveUrl: "https://www.menuqube.tn/",
    },
    {
      title: "Esports LFG Post Board | Next.js & Supabase Real-Time App",
      description: "Built a fast, responsive personal portfolio using Next.js, Tailwind CSS, and Framer Motion. Showcases my skills and projects with smooth animations and a clean design. Deployed on Vercel for optimal performance across devices.",
      image: "/lgp-esports.png?height=200&width=400",
      tags: ["NextJs", "Supabase", "Git", "Vercel"],
      liveUrl: "https://esport-post-board.vercel.app/",
    },
    {
      title: "Real Estate Price Estimation",
      description: "Helped build a web application for restaurants to display menus via QR codes, manage orders, and update menu items—enhancing efficiency, boosting sales, and streamlining the dining experience with no app downloads required.",
      image: "/real-estate.png?height=200&width=400",
      tags: ["NextJs", "ExpressJs", "Groq", "MySql"],
    }
    
  ]

  return (
    <section id="projects" className="py-20 px-4 bg-gray-900/50">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4 animate-gradient-x bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and passion for development.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <AnimatedSection key={index} animation="scaleIn" delay={index * 200}>
              <Card className="bg-gray-800/50 border-gray-700 overflow-hidden hover:bg-gray-800/70 transform hover:scale-105 hover:-translate-y-2 transition-all duration-500 group hover:shadow-2xl hover:shadow-blue-500/10">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <CardHeader>
                  <CardTitle className="text-white group-hover:text-blue-400 transition-colors duration-300">
                    {project.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-400 text-sm">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-2 py-1 bg-blue-500/20 text-blue-400 text-xs rounded-full hover:bg-blue-500/30 transition-colors duration-300 animate-pulse-slow"
                        style={{ animationDelay: `${tagIndex * 100}ms` }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex space-x-2">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button
                          size="sm"
                          variant="outline"
                          className="border-gray-600 text-gray-300 hover:bg-gray-700 bg-transparent hover:border-blue-400 hover:text-blue-400 transform hover:scale-105 transition-all duration-300"
                        >
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Live Demo
                        </Button>
                      </a>
                    )}
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
