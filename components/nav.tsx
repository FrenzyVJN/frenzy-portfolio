import Link from "next/link"
import { Shield, Terminal, BookOpen, Code, Fingerprint } from "lucide-react"

export function MainNav() {
  return (
    <header className="bg-black sticky top-0 z-40 pl-10 w-full border-b border-green-500">
      <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
        <div className="flex gap-6 md:gap-10">
          <Link href="/" className="flex items-center space-x-2">
            <Fingerprint className="h-6 w-6 text-green-500" />
            <span className="inline-block font-bold text-green-500">FrenzyVJN</span>
          </Link>
          <nav className="flex gap-6">
            <Link
              href="/about"
              className="flex items-center text-sm font-medium text-green-500 hover:text-green-400"
            >
              <Code className="mr-2 h-4 w-4" />
              Exploit
            </Link>
            <Link
              href="/projects"
              className="flex items-center text-sm font-medium text-green-500 hover:text-green-400"
            >
              <Terminal className="mr-2 h-4 w-4" />
              Payloads
            </Link>
            <Link
              href="/blog"
              className="flex items-center text-sm font-medium text-green-500 hover:text-green-400"
            >
              <BookOpen className="mr-2 h-4 w-4" />
              Intel
            </Link>
          </nav>
        </div>
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-1">
            <Link href="https://github.com/FrenzyVJN" className="text-green-500 hover:text-green-400">
              <Shield className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link href="https://www.chess.com/member/vijayan1" className="text-green-500 hover:text-green-400">
              <span className="sr-only">Chess</span>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}