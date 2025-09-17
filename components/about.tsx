import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap, Trophy, Code, Brain } from "lucide-react"

export function About() {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif font-bold text-3xl md:text-4xl text-primary mb-4">About Me</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A passionate developer with a strong foundation in computer science and hands-on experience in full-stack
            development.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <div className="text-center md:text-left">
            <img
              src="/images/kamran-workspace.png"
              alt="Kamran Ahmed coding"
              className="w-full max-w-md mx-auto md:mx-0 rounded-lg shadow-lg"
            />
          </div>

          {/* About Content */}
          <div className="space-y-6">
            <p className="text-foreground leading-relaxed">
              Currently pursuing Bachelor of Technology (B.Tech) in Information Technology with a strong foundation in
              programming, web development, and problem-solving. I'm a quick learner with a passion for technology and
              innovation, seeking opportunities to contribute and grow in a dynamic organization.
            </p>

            <p className="text-foreground leading-relaxed">
              My journey began with a diploma in Civil Engineering, but I found my true calling in Information
              Technology. I've developed expertise in Java, Python, and web technologies, building projects that range
              from responsive web applications to advanced machine learning systems for bio-signal analysis.
            </p>

            {/* Highlights */}
            <div className="grid sm:grid-cols-2 gap-4 mt-8">
              <Card className="border-accent/20">
                <CardContent className="p-4 text-center">
                  <GraduationCap className="h-8 w-8 text-accent mx-auto mb-2" />
                  <h3 className="font-semibold text-primary">Education</h3>
                  <p className="text-sm text-muted-foreground">B.Tech IT (CGPA: 7.53)</p>
                  <p className="text-xs text-muted-foreground mt-1">St. Martins Engineering College</p>
                  <p className="text-xs text-muted-foreground">2023 - 2026</p>
                </CardContent>
              </Card>

              <Card className="border-accent/20">
                <CardContent className="p-4 text-center">
                  <Code className="h-8 w-8 text-accent mx-auto mb-2" />
                  <h3 className="font-semibold text-primary">Certifications</h3>
                  <p className="text-sm text-muted-foreground">Java & Python Certified</p>
                  <p className="text-xs text-muted-foreground mt-1">Niltech Edu & D-CODE</p>
                </CardContent>
              </Card>

              <Card className="border-accent/20">
                <CardContent className="p-4 text-center">
                  <Brain className="h-8 w-8 text-accent mx-auto mb-2" />
                  <h3 className="font-semibold text-primary">Specialization</h3>
                  <p className="text-sm text-muted-foreground">Bio-Signal Analysis</p>
                  <p className="text-xs text-muted-foreground mt-1">ML & Web Development</p>
                </CardContent>
              </Card>

              <Card className="border-accent/20">
                <CardContent className="p-4 text-center">
                  <Trophy className="h-8 w-8 text-accent mx-auto mb-2" />
                  <h3 className="font-semibold text-primary">Achievement</h3>
                  <p className="text-sm text-muted-foreground">Cricket Runner-up</p>
                  <p className="text-xs text-muted-foreground mt-1">College Championship</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
