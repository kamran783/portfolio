import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react"

export function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted opacity-50" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          {/* Profile Image */}
          <div className="mb-8">
            <img
              src="/images/kamran-profile.jpg"
              alt="Mohd Kamran Ahmed"
              className="w-48 h-48 rounded-full mx-auto border-4 border-accent shadow-2xl object-cover"
            />
          </div>

          {/* Main Content */}
          <h1 className="font-serif font-bold text-4xl md:text-6xl lg:text-7xl text-primary mb-6">Mohd Kamran Ahmed</h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-4">
            Information Technology Student & Full Stack Developer
          </p>

          <p className="text-lg text-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Passionate about building innovative web applications and exploring machine learning. Currently pursuing
            B.Tech in Information Technology at St. Martin's Engineering College, specializing in React, Java, and ML
            projects.
          </p>

          {/* Contact Info */}
          <div className="flex flex-wrap justify-center gap-4 mb-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              <span>Hyderabad, India</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              <span>+91 82967 044</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4" />
              <span>ahmed22kamran@gmail.com</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button
              size="lg"
              className="bg-accent hover:bg-accent/90 hover:scale-105 hover:shadow-lg text-accent-foreground transition-all duration-300 transform"
            >
              <a href="#contact" className="flex items-center gap-2">
                Get In Touch
                <Mail className="h-4 w-4" />
              </a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="hover:scale-105 hover:shadow-lg hover:bg-accent hover:text-accent-foreground transition-all duration-300 transform bg-transparent"
            >
              <a href="#projects" className="flex items-center gap-2">
                View My Work
              </a>
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-6">
            <a
              href="https://github.com/kamran783"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-accent hover:scale-110 hover:shadow-md transition-all duration-300 transform"
            >
              <Github className="h-6 w-6" />
            </a>
            <a
              href="https://linkedin.com/in/kamran-ahmed-7571b32a7"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-accent hover:scale-110 hover:shadow-md transition-all duration-300 transform"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a
              href="mailto:ahmed22kamran@gmail.com"
              className="text-muted-foreground hover:text-accent hover:scale-110 hover:shadow-md transition-all duration-300 transform"
            >
              <Mail className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
