import { Shield, Terminal, BookOpen, Code, Fingerprint, Lock, Eye, Cpu, Network } from "lucide-react"

export default function About() {
  return (
    <div className="container mx-auto px-4 py-8 bg-black text-green-500">
      <h1 className="text-4xl font-bold mb-8 flex items-center">
        <Code className="mr-2" /> Exploit Profile
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="border border-green-500 rounded-xl p-6">
          <h2 className="text-2xl font-semibold mb-4 flex items-center">
            <Terminal className="mr-2" /> Payload Arsenal
          </h2>
          <ul className="list-disc list-inside space-y-2">
            <li><Network className="inline mr-2" /> Network Infiltration</li>
            <li><Eye className="inline mr-2" /> Web Application Reconnaissance</li>
            <li><Cpu className="inline mr-2" /> Reverse Engineering Malware</li>
            <li><Shield className="inline mr-2" /> Threat Analysis and Mitigation</li>
            <li><Fingerprint className="inline mr-2" /> OSINT (Open Source Intelligence)</li>
            <li><Lock className="inline mr-2" /> Secure Software Development</li>
          </ul>
        </div>
        <div className="border border-green-500 rounded-xl p-6">
          <h2 className="text-2xl font-semibold mb-4 flex items-center">
            <BookOpen className="mr-2" /> Training Logs
          </h2>
          <p>Sophomore, Cybersecurity Major</p>
          <p>Expected Graduation: 2027</p>
          <p className="mt-4">Certifications:</p>
          <ul className="list-disc list-inside space-y-2">
            <li>CompTIA Security+ - In Progress</li>
            {/* <li>Certified Ethical Hacker (CEH) - In Progress</li> */}
          </ul>
        </div>
      </div>
      <div className="mt-8 border border-green-500 rounded-xl p-6">
        <h2 className="text-2xl font-semibold mb-4 flex items-center">
          <Fingerprint className="mr-2" /> Hacker Profile
        </h2>
        <p className="mb-4">
          I'm an aspiring cybersecurity engineer with a passion for uncovering vulnerabilities and fortifying digital assets. My background in web development provides me with a unique perspective in identifying and neutralizing security threats.
        </p>
        <p>
          When I'm not penetrating networks or analyzing malware, you can find me strategizing over a game of chess. The analytical and strategic thinking required in chess directly translates to the world of cybersecurity, helping me stay steps ahead of potential threats.
        </p>
      </div>
    </div>
  )
}