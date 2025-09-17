"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github, Brain, Calendar, Train } from "lucide-react"

export function Projects() {
  const projects = [
    {
      title: "Railway Ticketing Web App",
      description:
        "A comprehensive railway ticket booking simulation with user authentication, seat selection, and booking management.",
      image: "/railway-ticket-booking-interface.png",
      technologies: ["React", "JavaScript", "CSS", "Firebase"],
      liveUrl: "https://railwayticket-kamran.netlify.app/",
      githubUrl: "https://github.com/kamran783",
      icon: Train,
      category: "Web Development",
    },
    {
      title: "Event Planner Web App",
      description:
        "A full-featured event management platform with Firebase backend for creating, managing, and tracking events.",
      image: "/event-planning-dashboard.png",
      technologies: ["React", "Firebase", "JavaScript", "CSS"],
      liveUrl: "https://event-planner-kamran.netlify.app/",
      githubUrl: "https://github.com/kamran783",
      icon: Calendar,
      category: "Web Development",
    },
    {
      title: "Bio-Signals Smoking Detection",
      description:
        "Advanced system analyzing ECG, GSR, and heart rate to detect smoking behavior and assess health risks using machine learning algorithms like SVM and Random Forest.",
      image: "/bio-signal-smoking-dashboard.png",
      technologies: ["Python", "Scikit-learn", "SVM", "Random Forest", "Signal Processing"],
      githubUrl: "https://github.com/kamran783",
      icon: Brain,
      category: "Machine Learning",
      date: "Feb 2025",
    },
  ]

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif font-bold text-3xl md:text-4xl text-primary mb-4">Featured Projects</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of my recent work in web development and machine learning projects.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="group border-accent/20 hover:border-accent/40 transition-all duration-300 hover:shadow-lg"
            >
              <div className="relative overflow-hidden rounded-t-lg">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-accent text-accent-foreground">{project.category}</Badge>
                </div>
              </div>

              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-primary">
                  <project.icon className="h-5 w-5 text-accent" />
                  {project.title}
                </CardTitle>
                <CardDescription className="text-foreground leading-relaxed">{project.description}</CardDescription>
              </CardHeader>

              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-3">
                  {project.liveUrl && (
                    <Button size="sm" className="bg-accent hover:bg-accent/90">
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Live Demo
                      </a>
                    </Button>
                  )}
                  <Button variant="outline" size="sm">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      <Github className="h-4 w-4" />
                      Code
                    </a>
                  </Button>
                </div>
                {project.date && (
                  <div className="mt-4">
                    <Badge variant="outline" className="text-xs">
                      {project.date}
                    </Badge>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">More projects available on my GitHub profile</p>
          <Button variant="outline">
            <a
              href="https://github.com/kamran783"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <Github className="h-4 w-4" />
              View All Projects
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
