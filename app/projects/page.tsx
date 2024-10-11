import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Shield, Terminal, Eye, Cpu, Network, Lock } from "lucide-react"

export default function Projects() {
  const projects = [
    {
      title: "NullPointerBot",
      description: "Independently designed and implemented a Python-based Discord bot to streamline CTF event management, incorporating key features such as team management, dynamic question handling, score tracking, and AI-driven interactions (RAG) for concise conversation summaries.",
      tags: ["Python","AstraDB","Discord Bot", "CTF"],
      icon: <Shield className="h-6 w-6 mb-2" />
    },
    {
      title: "AI-Based Context-Aware Firewall",
      description: "Developed a high-performance AI-based firewall in Python for the Smart India Hackathon 2024, utilizing machine learning for advanced traffic analysis. Implemented NLP for user-friendly policy creation and contextual awareness to enhance threat detection",
      tags: ["NextJS","Python","TailwindCSS","Network Security", "Machine Learning"],
      icon: <Network className="h-6 w-6 mb-2" />
    },
    {
      title: "Cache Simulator",
      description: "Developed a Svelte-based simulator for L1, L2, and victim cache systems, featuring random/manual address input and visualizations. Deployed on Vercel for educational use, with plans for future enhancements including configurable cache parameters and advanced memory hierarchy simulations.",
      tags: ["Svelte", "TailwindCSS", "Computer Architecture", "Web Development"],
      icon: <Cpu className="h-6 w-6 mb-2" />
    },
    {
      title: "HackYourLMS",
      description: "An immersive cybersecurity simulation platform that offers beginner-friendly access to concepts, including the OWASP Top 10 attacks. The platform features interactive scenarios for learning and practicing common attacks like IDOR, SQLi, and DDoS, along with a simulated online environment for hands-on experience.",
      tags: ["Svelte","TailwindCSS","Cybersecurity", "Web Development", "OWASP"],
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
              <CardTitle className="flex items-center text-green-400 gap-3">
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