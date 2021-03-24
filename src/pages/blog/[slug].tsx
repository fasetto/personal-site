import React from "react";
import Image from "next/image";
import { GetStaticPaths, GetStaticProps } from "next";
import hydrate from "next-mdx-remote/hydrate";
import { MdxRemote } from "next-mdx-remote/types";
import { format, parseISO } from "date-fns";

import Header from "@/components/Header";
import Container from "@/components/Container";
import MDXComponents from "@/components/MDXComponents";
import { getFileByName, getFiles } from "@/lib/mdx";

type Props = {
    mdxSource: MdxRemote.Source;
    frontMatter: any;
}

const editUrl = (slug: string) => `https://github.com/fasetto/personal-site/edit/main/data/blog/${slug}.mdx`;

export default function Blog({ mdxSource, frontMatter }: Props) {
    const content = hydrate(mdxSource, { components: MDXComponents });

    return (
        <>
            <Header />

            <Container>
                <article className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16 w-full">
                    <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
                        {frontMatter.title}
                    </h1>
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center w-full mt-2">
                        <div className="flex items-center">
                            <Image
                                alt="Serkan Bircan"
                                height={24}
                                width={24}
                                src="/avatar.jpg"
                                className="rounded-full"
                            />
                            <p className="text-sm text-gray-700 dark:text-gray-300 ml-2">
                                {frontMatter.author}
                                {"Serkan Bircan /"}
                                {format(parseISO(frontMatter.publishedAt), 'MMMM dd, yyyy')}
                            </p>
                        </div>
                        <p className="text-sm text-gray-500 min-w-32 mt-2 md:mt-0">
                            {frontMatter.readingTime.text}
                        </p>
                    </div>

                    <div className="prose dark:prose-dark max-w-none w-full">
                        {content}
                    </div>

                    <div className="text-sm text-gray-700 dark:text-gray-300">
                        <a
                            href={editUrl(frontMatter.slug)}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {"Edit on GitHub"}
                        </a>
                    </div>
                </article>
            </Container>
        </>
    );
}

export const getStaticPaths: GetStaticPaths = async () => {
    const posts = await getFiles("data/blog");

    return {
        paths: posts.map(p => ({
            params: { slug: p.replace(/\.mdx/, "") }
        })),
        fallback: false
    };
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const post = await getFileByName(params.slug.toString(), "data/blog");

    return { props: post };
}
