import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import ReactMarkdown from 'react-markdown'; // Import ReactMarkdown
import { useEffect, useState } from 'react';

interface FrontMatter {
  title: string;
  date?: string; // Optional if you want to include a date
}

interface Params {
  slug: string;
}

export async function generateStaticParams(): Promise<Params[]> {
  const files = fs.readdirSync(path.join('app/blog'));
  return files.map(filename => ({
    slug: filename.replace('.md', ''),
  }));
}

interface BlogPostProps {
  params: Params;
}

const BlogPost: React.FC<BlogPostProps> = async ({ params }) => {
  const filePath = path.join('app/blog', `${params.slug}.md`);

  // Error handling for file read
  if (!fs.existsSync(filePath)) {
    return <div>Post not found</div>;
  }

  const markdownWithMeta = fs.readFileSync(filePath, 'utf-8');
  const { data: frontMatter, content } = matter(markdownWithMeta) as unknown as { data: FrontMatter; content: string };

  return (
    <div className="container mx-auto px-4 py-8 bg-black text-green-500">
      <h1 className="text-4xl font-bold mb-4">{frontMatter.title}</h1>
      {/* Uncomment to show publication date */}
      {/* <p className="text-green-400 mb-8">Published on: {frontMatter.date}</p> */}
      <div className="prose lg:prose-xl dark:prose-invert prose-green max-w-none">
        <ReactMarkdown>{content}</ReactMarkdown>
      </div>
    </div>
  );
};

export default BlogPost;
