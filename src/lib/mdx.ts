import fs from "fs";
import path from "path";
import matter from "gray-matter";
import mdxPrism from "mdx-prism";
import readingTime from "reading-time";
import renderToString from "next-mdx-remote/render-to-string";
import { MdxRemote } from "next-mdx-remote/types";

import MDXComponents from "@/components/MDXComponents";

const rootDir = process.cwd();

export async function getFiles(directory: string) {
    return fs.readdirSync(path.join(rootDir, directory));
}

export async function getFileByName(slug: string, directory = "") {
    const source = fs.readFileSync(path.join(rootDir, directory, `${slug}.mdx`), "utf-8")

    const { data, content } = matter(source);
    const mdxSource = await renderToString(content, {
        components: MDXComponents,
        mdxOptions: {
            remarkPlugins: [
                require("remark-autolink-headings"),
                require("remark-code-titles"),
                require("remark-slug"),
            ],
            rehypePlugins: [mdxPrism]
        }
    });

    return {
        mdxSource,
        frontMatter: {
            wordCount: content.split(/\s+/gu).length,
            readingTime: readingTime(content),
            slug,
            ...data,
        }
    };
}

export async function getAllFilesFrontMatter(directory: string) {
    const files = await getFiles(directory);

    return files.reduce((allFiles, filename) => {
        const source = fs.readFileSync(path.join(rootDir, directory, filename), "utf-8");
        const { data } = matter(source);

        return [
            {
                data,
                slug: filename.replace(".mdx", ""),
            },
            ...allFiles,
        ];

    }, [])
}
