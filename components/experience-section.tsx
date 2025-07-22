import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, MapPin, Award, TrendingUp } from "lucide-react"
import { AnimatedSection } from "./animated-section"

// Color mapping function
const getColorClasses = (color: string) => {
  const colorMap: { [key: string]: { text: string; bg: string; border: string; hover: string } } = {
    blue: {
      text: "text-blue-400",
      bg: "bg-blue-500/10",
      border: "border-blue-500/20",
      hover: "hover:bg-blue-500/20 hover:border-blue-500/40"
    },
    purple: {
      text: "text-purple-400",
      bg: "bg-purple-500/10",
      border: "border-purple-500/20",
      hover: "hover:bg-purple-500/20 hover:border-purple-500/40"
    },
    green: {
      text: "text-green-400",
      bg: "bg-green-500/10",
      border: "border-green-500/20",
      hover: "hover:bg-green-500/20 hover:border-green-500/40"
    },
    orange: {
      text: "text-orange-400",
      bg: "bg-orange-500/10",
      border: "border-orange-500/20",
      hover: "hover:bg-orange-500/20 hover:border-orange-500/40"
    },
    cyan: {
      text: "text-cyan-400",
      bg: "bg-cyan-500/10",
      border: "border-cyan-500/20",
      hover: "hover:bg-cyan-500/20 hover:border-cyan-500/40"
    },
    pink: {
      text: "text-pink-400",
      bg: "bg-pink-500/10",
      border: "border-pink-500/20",
      hover: "hover:bg-pink-500/20 hover:border-pink-500/40"
    },
    red: {
      text: "text-red-400",
      bg: "bg-red-500/10",
      border: "border-red-500/20",
      hover: "hover:bg-red-500/20 hover:border-red-500/40"
    },
    yellow: {
      text: "text-yellow-400",
      bg: "bg-yellow-500/10",
      border: "border-yellow-500/20",
      hover: "hover:bg-yellow-500/20 hover:border-yellow-500/40"
    },
    gray: {
      text: "text-gray-400",
      bg: "bg-gray-500/10",
      border: "border-gray-500/20",
      hover: "hover:bg-gray-500/20 hover:border-gray-500/40"
    }
  }
  return colorMap[color] || colorMap.blue
}

export function ExperienceSection() {
  const experiences = [
    {
      title: "Software Engineer",
      company: "Retain Health Inc.",
      location: "Remote",
      period: "August 2022 - Present",
      description:
        "Full-stack Software Engineer at Retain Health, responsible for developing and maintaining both frontend and backend systems using Angular and Node.js. Involved in feature development, automated testing, and infrastructure support to deliver a product that promotes healthy habits for Alzheimer's prevention.",
      achievements: [
        "Design, develop, and execute automated tests using Javascript test frameworks",
        "Identify and report issues found",
        "Review and analyze requirements, specifications",
        "Develop detailed test plans and test cases",
        "Prioritize and plan testing activities",
        "Perform regression testing",
        "Fix software bugs",
        "Develop new features for product"
      ],
      skills: [
        { name: "AngularJS", color: "red" },
        { name: "Javascript", color: "yellow" },
        { name: "Node.js", color: "green" },
        { name: "AWS", color: "orange" },
        { name: "MySql", color: "pink" },
      ],
      color: "blue",
    },
    {
      title: "Full Stack Developer",
      company: "Freelance on Upwork",
      location: "Remote",
      period: "June 2024 - December 2024",
      description: "Spearheaded the end-to-end development of a full-featured e-commerce subscription platform, handling everything from initial architecture to final deployment. Built with Next.js on the frontend and NestJS on the backend, using a MySQL database.",
      achievements: [
        "Designed and developed the platform from scratch, covering frontend, backend, and database integration.", 
        "Built a responsive, high-performance frontend using Next.js with optimized API consumption.", 
        "IDeveloped a scalable backend with NestJS and MySQL, implementing modular and maintainable code.",
        "Integrated Stripe for secure subscription-based payment processing.",
        "Implemented secure JWT authentication and dynamic role-based authorization for user access control.",
        "Wrote automated tests and performed thorough debugging to ensure a stable, production-ready product.",
        "IManaged infrastructure setup, deployment, and version control using tools like Docker, GitHub, and Vercel.",
        "Delivered a complete, secure, and performant platform ready for real-world use.",
      ],
      skills: [
        { name: "NextJs", color: "blue" },
        { name: "TypeScript", color: "Blue" },
        { name: "NestJs", color: "green" },
        { name: "MySql", color: "pink" },
        { name: "Express", color: "gray" },
        { name: "Stripe", color: "purple" },
        { name: "AWS", color: "Orange" },
      ],
      color: "purple",
    },
    {
      title: "Web Developper",
      company: "ARSII Association",
      location: "Hybrid",
      period: "2019 - 2020",
      description: "During my internship at ARSII Association, I played a crucial role in developing a dynamic user interface using Angular for an admin dashboard. This required coding expertise and integrating a teammate's API for enhanced functionality. I collaborated closely with cross-functional teams to ensure smooth communication and integration between front-end and back-end systems. Prioritizing user experience, I crafted responsive interfaces and optimized performance for various devices, honing my technical skills and contributing to a comprehensive and user-friendly system.",
      achievements: ["Developped the admin Dashboard", "Learned Angular and Node.js", "Collaborated with design team"],
      skills: [
        { name: "Angular", color: "red" },
        { name: "NodeJs", color: "green" },
        { name: "Git", color: "White" },
        { name: "Figma", color: "purple" },
        { name: "Bootstrap", color: "purple" },
        { name: "jQuery", color: "blue" },
      ],
      color: "cyan",
    },
  ]

  return (
    <section id="experience" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4 animate-gradient-x bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
            Experience
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            My professional journey and the experiences that shaped my career.
          </p>
        </AnimatedSection>

        <div className="grid gap-8 max-w-4xl mx-auto">
          {experiences.map((exp, index) => {
            const expColorClasses = getColorClasses(exp.color)
            return (
              <AnimatedSection key={index} animation="fadeInUp" delay={index * 200}>
                <Card
                  className={`bg-gray-800/50 border-gray-700 hover:bg-gray-800/70 transform hover:scale-[1.02] hover:-translate-y-1 transition-all duration-500 group hover:shadow-2xl hover:shadow-${exp.color}-500/10`}
                >
                  <CardHeader>
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                      <div className="space-y-2">
                        <CardTitle
                          className={`text-white text-xl group-hover:${expColorClasses.text} transition-colors duration-300 flex items-center gap-2`}
                        >
                          <TrendingUp
                            className={`h-5 w-5 ${expColorClasses.text} group-hover:scale-110 transition-transform duration-300`}
                          />
                          {exp.title}
                        </CardTitle>
                        <p
                          className={`${expColorClasses.text} font-semibold text-lg group-hover:${expColorClasses.text.replace('400', '300')} transition-colors duration-300`}
                        >
                          {exp.company}
                        </p>
                      </div>
                      <div className="flex flex-col lg:items-end space-y-2 mt-4 lg:mt-0">
                        <div className="flex items-center text-gray-400 text-sm group-hover:text-gray-300 transition-colors duration-300">
                          <Calendar className="h-4 w-4 mr-2 group-hover:text-blue-400 transition-colors duration-300" />
                          <span className="font-medium">{exp.period}</span>
                        </div>
                        <div className="flex items-center text-gray-400 text-sm group-hover:text-gray-300 transition-colors duration-300">
                          <MapPin className="h-4 w-4 mr-2 group-hover:text-green-400 transition-colors duration-300" />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                      {exp.description}
                    </p>

                    <div>
                      <div className="flex items-center mb-3">
                        <Award
                          className={`h-5 w-5 ${expColorClasses.text} mr-2 group-hover:scale-110 transition-transform duration-300`}
                        />
                        <h4 className="text-white font-semibold group-hover:text-blue-400 transition-colors duration-300">
                          Key Achievements:
                        </h4>
                      </div>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, achIndex) => (
                          <li
                            key={achIndex}
                            className="text-gray-400 text-sm flex items-start group-hover:text-gray-300 transition-all duration-300 transform hover:translate-x-2"
                            style={{ animationDelay: `${achIndex * 100}ms` }}
                          >
                            <span
                              className={`${expColorClasses.text} mr-3 text-lg leading-none group-hover:scale-125 transition-transform duration-300`}
                            >
                              •
                            </span>
                            <span className="leading-relaxed">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Skills Section */}
                    <div>
                      <h4 className="text-white font-semibold mb-4 flex items-center group-hover:text-purple-400 transition-colors duration-300">
                        <div className="w-2 h-2 bg-purple-400 rounded-full mr-2 animate-pulse"></div>
                        Technologies & Skills:
                      </h4>
                      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                        {exp.skills.map((skill, skillIndex) => {
                          const skillColorClasses = getColorClasses(skill.color)
                          return (
                            <div
                              key={skillIndex}
                              className={`${skillColorClasses.bg} ${skillColorClasses.border} rounded-lg p-3 ${skillColorClasses.hover} transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 group/skill`}
                              style={{ animationDelay: `${skillIndex * 50}ms` }}
                            >
                              <div className="flex items-center justify-center">
                                <span
                                  className={`${skillColorClasses.text} font-medium text-sm group-hover/skill:${skillColorClasses.text.replace('400', '300')} transition-colors duration-300`}
                                >
                                  {skill.name}
                                </span>
                              </div>
                              <div className={`w-full h-0.5 ${skillColorClasses.bg.replace('/10', '/30')} mt-2 rounded-full overflow-hidden`}>
                                <div
                                  className={`h-full bg-gradient-to-r from-${skill.color}-400 to-${skill.color}-500 rounded-full transform scale-x-0 group-hover/skill:scale-x-100 transition-transform duration-500 origin-left`}
                                  style={{ animationDelay: `${skillIndex * 100}ms` }}
                                ></div>
                              </div>
                            </div>
                          )
                        })}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>
            )
          })}
        </div>
      </div>
    </section>
  )
}
