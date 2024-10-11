
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism'

export async function generateStaticParams() {
  const files = fs.readdirSync(path.join('app/blog'))
  return files.map(filename => ({
    slug: filename.replace('.md', '')
  }))
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const markdownWithMeta = fs.readFileSync(path.join('app/blog', `${params.slug}.md`), 'utf-8')
  const { data: frontMatter, content } = matter(markdownWithMeta)

  return (
    <div className="container mx-auto px-4 py-8 bg-black text-green-500">
      <h1 className="text-4xl font-bold mb-4">{frontMatter.title}</h1>
      <p className="text-green-400 mb-8">Published on: {frontMatter.date}</p>
      <div className="prose lg:prose-xl dark:prose-invert prose-green max-w-none">
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          components={{
            code({node, inline, className, children, ...props}) {
              const match = /language-(\w+)/.exec(className || '')
              return !inline && match ? (
                <SyntaxHighlighter
                  style={atomDark}
                  language={match[1]}
                  PreTag="div"
                  {...props}
                >
                  {String(children).replace(/\n$/, '')}
                </SyntaxHighlighter>
              ) : (
                <code className={className} {...props}>
                  {children}
                </code>
              )
            }
          }}
        >
          {content}
        </ReactMarkdown>
      </div>
    </div>
  )
}