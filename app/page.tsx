import { Button } from "@/components/ui/button"
import { Shield, Terminal, BookOpen, Code, Fingerprint, Lock } from "lucide-react"
import Link from "next/link"

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-black text-green-500">
      <main className="flex flex-col items-center justify-center w-full flex-1 px-4 sm:px-20 text-center">
        <h1 className="text-4xl sm:text-6xl font-bold mb-4 sm:mb-8">
          Welcome to the <span className="text-green-400">Frenzy's</span> Lair
        </h1>

        <p className="mt-2 text-xl sm:text-2xl mb-6">
          Cybersecurity Student | Penetration Tester | Web Developer
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl w-full">
          <Link href="/about" className="group">
            <div className="p-4 sm:p-6 text-left border border-green-500 rounded-xl transition-colors duration-300 ease-in-out group-hover:bg-green-500 group-hover:bg-opacity-10">
              <h3 className="text-xl sm:text-2xl font-bold flex items-center mb-2 sm:mb-4">
                <Code className="mr-2" /> Exploit Profile
              </h3>
              <p className="text-base sm:text-xl">
                Decrypt my skills and experience in cybersecurity.
              </p>
            </div>
          </Link>

          <Link href="/projects" className="group">
            <div className="p-4 sm:p-6 text-left border border-green-500 rounded-xl transition-colors duration-300 ease-in-out group-hover:bg-green-500 group-hover:bg-opacity-10">
              <h3 className="text-xl sm:text-2xl font-bold flex items-center mb-2 sm:mb-4">
                <Terminal className="mr-2" /> Payload Arsenal
              </h3>
              <p className="text-base sm:text-xl">
                Explore my latest cybersecurity projects and research.
              </p>
            </div>
          </Link>

          <Link href="/blog" className="group">
            <div className="p-4 sm:p-6 text-left border border-green-500 rounded-xl transition-colors duration-300 ease-in-out group-hover:bg-green-500 group-hover:bg-opacity-10">
              <h3 className="text-xl sm:text-2xl font-bold flex items-center mb-2 sm:mb-4">
                <BookOpen className="mr-2" /> Intelligence Briefings
              </h3>
              <p className="text-base sm:text-xl">
                Access my thoughts on the latest in cybersecurity.
              </p>
            </div>
          </Link>

          <Link href="https://chess.com" className="group">
            <div className="p-4 sm:p-6 text-left border border-green-500 rounded-xl transition-colors duration-300 ease-in-out group-hover:bg-green-500 group-hover:bg-opacity-10">
              <h3 className="text-xl sm:text-2xl font-bold flex items-center mb-2 sm:mb-4">
                Strategic Maneuvers
              </h3>
              <p className="text-base sm:text-xl">
                Challenge me to a game of chess on chess.com or lichess!
              </p>
            </div>
          </Link>
        </div>
      </main>
    </div>
  )
}
