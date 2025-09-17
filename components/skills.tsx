import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, Database, Brain, Wrench } from "lucide-react"

export function Skills() {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      skills: [
        { name: "Java", level: "Intermediate" },
        { name: "Python", level: "Intermediate" },
        { name: "JavaScript", level: "Good" },
        { name: "SQL", level: "Good" },
      ],
    },
    {
      title: "Web Technologies",
      icon: Database,
      skills: [
        { name: "HTML", level: "Good" },
        { name: "CSS", level: "Good" },
        { name: "JavaScript", level: "Good" },
        { name: "React", level: "Good" },
      ],
    },
    {
      title: "Databases & Tools",
      icon: Brain,
      skills: [
        { name: "MySQL", level: "Good" },
        { name: "MongoDB", level: "Learning" },
        { name: "Git", level: "Good" },
        { name: "VS Code", level: "Expert" },
        { name: "Eclipse", level: "Good" },
      ],
    },
    {
      title: "Soft Skills",
      icon: Wrench,
      skills: [
        { name: "Problem Solving", level: "Good" },
        { name: "Teamwork", level: "Good" },
        { name: "Communication", level: "Good" },
        { name: "Quick Learning", level: "Expert" },
      ],
    },
  ]

  const getLevelColor = (level: string) => {
    switch (level) {
      case "Expert":
        return "bg-green-100 text-green-800 border-green-200"
      case "Experienced":
        return "bg-blue-100 text-blue-800 border-blue-200"
      case "Intermediate":
        return "bg-purple-100 text-purple-800 border-purple-200"
      case "Good":
        return "bg-accent/10 text-accent border-accent/20"
      case "Learning":
        return "bg-orange-100 text-orange-800 border-orange-200"
      default:
        return "bg-gray-100 text-gray-800 border-gray-200"
    }
  }

  return (
    <section id="skills" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif font-bold text-3xl md:text-4xl text-primary mb-4">Technical Skills</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise and the technologies I work with.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <Card key={index} className="border-accent/20 hover:border-accent/40 transition-colors duration-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-primary">
                  <category.icon className="h-6 w-6 text-accent" />
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge key={skillIndex} variant="outline" className={`${getLevelColor(skill.level)} font-medium`}>
                      {skill.name}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Current Learning Section */}
        <div className="mt-16 text-center">
          <h3 className="font-semibold text-2xl text-primary mb-6 mt-0.5 font-mono">Certifications & Achievements</h3>
          <div className="flex flex-wrap justify-center gap-3">
            <Badge className="bg-accent text-accent-foreground text-base px-4 py-2">Java Certified (Niltech Edu)</Badge>
            <Badge className="bg-accent text-accent-foreground text-base px-4 py-2">Python Certified (D-CODE)</Badge>
            <Badge className="bg-accent text-accent-foreground text-base px-4 py-2">Hackathon Participant</Badge>
          </div>
        </div>
      </div>
    </section>
  )
}
