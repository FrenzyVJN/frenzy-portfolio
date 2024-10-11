import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Lock, Eye, Shield } from "lucide-react"

export default function Blog() {
  const posts = [
    {
      title: "Enhance Your Mac's Cybersecurity Capabilities: A Complete Guide to CTFs and Pentesting",
      description: "Unlock your Mac's potential for cybersecurity challenges with this comprehensive guide. Learn how to set up essential tools, configure virtual machines, and utilize your GPU for powerful password cracking. Whether you're new to CTFs or an experienced pentester, discover how to make the most of your Macbook Pro M2 Pro for your cybersecurity journey.",
      date: "2023-09-15",
      slug: "mac-cybersecurity-ctfs-pentesting-guide",
      icon: <Lock className="h-6 w-6 mb-2" />
    },
    // {
    //   title: "Navigating the OWASP Top 10: A Hacker's Perspective",
    //   description: "Analyzing the most critical web application security risks and how to exploit... I mean, prevent them.",
    //   date: "2023-08-22",
    //   slug: "owasp-top-10",
    //   icon: <Shield className="h-6 w-6 mb-2" />
    // },
    // {
    //   title: "The Art of Ethical Hacking: Tools of the Trade",
    //   description: "A comprehensive guide to the essential tools every ethical hacker should master.",
    //   date: "2023-07-30",
    //   slug: "ethical-hacking-tools",
    //   icon: <Eye className="h-6 w-6 mb-2" />
    // }
  ]

  return (
    <div className="container mx-auto px-4 py-8 bg-black text-green-500">
      <h1 className="text-4xl font-bold mb-8 flex items-center">
        <Eye className="mr-2" /> Intelligence Briefings
      </h1>
      <div className="grid grid-cols-1 gap-6">
        {posts.map((post, index) => (
          <Link href={`/blog/${post.slug}`} key={index}>
            <Card className="bg-black border-green-500 hover:bg-green-900 transition-colors duration-300">
              <CardHeader>
                <CardTitle className="flex items-center text-green-400">
                  {post.icon}
                  {post.title}
                </CardTitle>
                <CardDescription className="text-green-500">{post.date}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-green-400">{post.description}</p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  )
}