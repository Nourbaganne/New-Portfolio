import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { GraduationCap, Calendar, MapPin, Award, BookOpen, Users } from "lucide-react"
import { AnimatedSection } from "./animated-section"

export function EducationSection() {
  const education = [
    {
      degree: "Master of Software Engineering",
      school: "EPI Digital School",
      location: "Tunis, Sousse",
      period: "2022-2024",
      description: "Specialized in Software Engineering and Human-Computer Interaction with focus on web technologies.",
      courses: ["Advanced Web Development", "Machine Learning", "Database Systems", "Software Architecture"],
      color: "blue",
      icon: GraduationCap,
    },
    {
      degree: "Master's Degree in Artifical Intelligences For Health Care",
      school: "Higher Institute of Computer Science and Multimedia of Sfax",
      location: "Tunis, Sfax",
      period: "2021-2023",
      description: "Strong foundation in computer science fundamentals with emphasis on software development.",
      courses: ["Data Structures", "Algorithms", "Web Programming", "Software Engineering"],
      color: "purple",
      icon: BookOpen,
    },
  ]

  const certifications = [
    {
      name: "IELTS English Test (C1 Level)",
      issuer: "British Council",
      date: "2025",
      color: "orange",
    },
  ]

  return (
    <section id="education" className="py-20 px-4 bg-gray-900/30">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4 animate-gradient-x bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
            Education & Certifications
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            My academic background and professional certifications that built my expertise.
          </p>
        </AnimatedSection>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Education Timeline */}
          <div className="lg:col-span-2">
            <AnimatedSection animation="fadeInLeft" delay={200}>
              <h3 className="text-2xl font-semibold text-white mb-8 flex items-center">
                <GraduationCap className="h-6 w-6 text-blue-400 mr-3 animate-bounce-slow" />
                Academic Journey
              </h3>
            </AnimatedSection>

            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-400 to-purple-500 hidden md:block animate-gradient-y"></div>

              <div className="space-y-8">
                {education.map((edu, index) => (
                  <AnimatedSection key={index} animation="fadeInUp" delay={300 + index * 200}>
                    <div className="relative">
                      {/* Timeline dot */}
                      <div className="absolute left-6 top-8 w-4 h-4 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full border-4 border-gray-900 hidden md:block animate-pulse-slow z-10"></div>

                      <Card
                        className={`bg-gray-800/50 border-gray-700 hover:bg-gray-800/70 transform hover:scale-[1.02] hover:-translate-y-1 transition-all duration-500 group hover:shadow-2xl hover:shadow-${edu.color}-500/10 md:ml-16`}
                      >
                        <CardHeader>
                          <div className="flex flex-col md:flex-row md:items-start md:justify-between">
                            <div className="space-y-2 flex-1">
                              <CardTitle
                                className={`text-white text-xl group-hover:text-${edu.color}-400 transition-colors duration-300 flex items-center gap-2`}
                              >
                                <edu.icon
                                  className={`h-5 w-5 text-${edu.color}-400 group-hover:scale-110 transition-transform duration-300`}
                                />
                                {edu.degree}
                              </CardTitle>
                              <p
                                className={`text-${edu.color}-400 font-semibold text-lg group-hover:text-${edu.color}-300 transition-colors duration-300`}
                              >
                                {edu.school}
                              </p>
                              <div className="flex flex-wrap gap-4 text-sm text-gray-400">
                                <div className="flex items-center group-hover:text-gray-300 transition-colors duration-300">
                                  <Calendar className="h-4 w-4 mr-1 group-hover:text-blue-400 transition-colors duration-300" />
                                  {edu.period}
                                </div>
                                <div className="flex items-center group-hover:text-gray-300 transition-colors duration-300">
                                  <MapPin className="h-4 w-4 mr-1 group-hover:text-green-400 transition-colors duration-300" />
                                  {edu.location}
                                </div>
                              </div>
                            </div>
                          </div>
                        </CardHeader>
                        <CardContent className="space-y-6">
                          <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                            {edu.description}
                          </p>

                          <div>
                            <h4 className="text-white font-semibold mb-3 flex items-center group-hover:text-purple-400 transition-colors duration-300">
                              <BookOpen className="h-4 w-4 text-purple-400 mr-2 group-hover:scale-110 transition-transform duration-300" />
                              Relevant Coursework:
                            </h4>
                            <div className="flex flex-wrap gap-2">
                              {edu.courses.map((course, courseIndex) => (
                                <span
                                  key={courseIndex}
                                  className={`px-3 py-1 bg-${edu.color}-500/20 text-${edu.color}-400 text-xs rounded-full hover:bg-${edu.color}-500/30 transition-all duration-300 transform hover:scale-105 animate-pulse-slow`}
                                  style={{ animationDelay: `${courseIndex * 100}ms` }}
                                >
                                  {course}
                                </span>
                              ))}
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            </div>
          </div>

          {/* Certifications Sidebar */}
          <div className="lg:col-span-1">
            <AnimatedSection animation="fadeInRight" delay={400}>
              <h3 className="text-2xl font-semibold text-white mb-8 flex items-center">
                <Award className="h-6 w-6 text-yellow-400 mr-3 animate-bounce-slow" />
                Certifications
              </h3>
            </AnimatedSection>

            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <AnimatedSection key={index} animation="scaleIn" delay={600 + index * 150}>
                  <Card
                    className={`bg-gray-800/50 border-gray-700 hover:bg-gray-800/70 transform hover:scale-105 hover:-translate-y-1 transition-all duration-300 group hover:shadow-lg hover:shadow-${cert.color}-500/20`}
                  >
                    <CardContent className="p-4">
                      <div className="flex items-start space-x-3">
                        <div
                          className={`p-2 bg-${cert.color}-500/20 rounded-lg group-hover:bg-${cert.color}-500/30 transition-colors duration-300`}
                        >
                          <Award
                            className={`h-4 w-4 text-${cert.color}-400 group-hover:scale-110 transition-transform duration-300`}
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4
                            className={`text-white font-medium text-sm group-hover:text-${cert.color}-400 transition-colors duration-300 leading-tight`}
                          >
                            {cert.name}
                          </h4>
                          <p className="text-gray-400 text-xs mt-1 group-hover:text-gray-300 transition-colors duration-300">
                            {cert.issuer}
                          </p>
                          <p className="text-gray-500 text-xs mt-1 group-hover:text-gray-400 transition-colors duration-300">
                            {cert.date}
                          </p>
                        </div> 
                      </div>
                    </CardContent>
                  </Card>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
