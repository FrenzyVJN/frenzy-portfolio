import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Shield, Terminal, Eye, Cpu, Network, Lock } from "lucide-react"

export default function Projects() {
  const projects = [
    {
      title: "Operation Firewall Breach",
      description: "Developed advanced techniques to bypass next-gen web application firewalls.",
      tags: ["Web Security", "Penetration Testing"],
      icon: <Shield className="h-6 w-6 mb-2" />
    },
    {
      title: "Project Sentinel",
      description: "Engineered a machine learning-powered Network Intrusion Detection System (NIDS) to identify anomalous behavior.",
      tags: ["Network Security", "Machine Learning"],
      icon: <Network className="h-6 w-6 mb-2" />
    },
    {
      title: "Operation Binary Autopsy",
      description: "Conducted in-depth analysis of sophisticated malware samples using advanced reverse engineering techniques.",
      tags: ["Reverse Engineering", "Malware Analysis"],
      icon: <Cpu className="h-6 w-6 mb-2" />
    },
    {
      title: "Project Digital Shadow",
      description: "Developed an OSINT framework to automate the collection and analysis of threat intelligence from open sources.",
      tags: ["OSINT", "Threat Intelligence"],
      icon: <Eye className="h-6 w-6 mb-2" />
    }
  ]

  return (
    <div className="container mx-auto px-4 py-8 bg-black text-green-500">
      <h1 className="text-4xl font-bold mb-8 flex items-center">
        <Terminal className="mr-2" /> Payload Arsenal
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <Card key={index} className="bg-black border-green-500">
            <CardHeader>
              <CardTitle className="flex items-center text-green-400">
                {project.icon}
                {project.title}
              </CardTitle>
              <CardDescription className="text-green-500">{project.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, tagIndex) => (
                  <Badge key={tagIndex} variant="outline" className="border-green-500 text-green-400">{tag}</Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}