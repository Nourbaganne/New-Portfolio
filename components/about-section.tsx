import { Card, CardContent } from "@/components/ui/card"
import { Code, Palette, Zap } from "lucide-react"
import { AnimatedSection } from "./animated-section"

export function AboutSection() {
  const skills = [
    {
      icon: Code,
      title: "Full Stack Development",
      description: "React, Node.js, TypeScript, Python",
      color: "blue",
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Figma, Adobe Creative Suite",
      color: "purple",
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      description: "Web Vitals, SEO, Accessibility",
      color: "cyan",
    },
  ]

  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4 animate-gradient-x bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            I'm a passionate developer who loves turning ideas into reality through code and design.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <AnimatedSection animation="fadeInLeft" delay={200}>
            <div className="space-y-6">
              <p className="text-gray-300 text-lg leading-relaxed">
                With over 3 years of experience in web development, I specialize in creating modern, responsive
                applications using cutting-edge technologies. I believe in writing clean, maintainable code and creating
                intuitive user experiences.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                When I'm not coding, you can find me exploring new technologies, contributing to open source projects,
                or sharing knowledge with the developer community.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="fadeInRight" delay={400}>
            <div className="grid gap-6">
              {skills.map((skill, index) => (
                <Card
                  key={index}
                  className="bg-gray-800/50 border-gray-700 hover:bg-gray-800/70 transform hover:scale-105 hover:-translate-y-1 transition-all duration-300 group"
                  style={{ animationDelay: `${400 + index * 100}ms` }}
                >
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div
                        className={`p-3 bg-${skill.color}-500/20 rounded-lg group-hover:bg-${skill.color}-500/30 transition-colors duration-300`}
                      >
                        <skill.icon
                          className={`h-6 w-6 text-${skill.color}-400 group-hover:scale-110 transition-transform duration-300`}
                        />
                      </div>
                      <div>
                        <h3 className="text-white font-semibold group-hover:text-blue-400 transition-colors duration-300">
                          {skill.title}
                        </h3>
                        <p className="text-gray-400 text-sm">{skill.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
