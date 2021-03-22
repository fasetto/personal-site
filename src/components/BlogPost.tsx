import NextLink from "next/link";

type Props = {
    title: string;
    summary: string;
    slug: string;
}

export default function BlogPost({ title, summary, slug }: Props) {
    return (
        <div>
            <NextLink href={`/blog/${slug}`} passHref>
                <a className="inline-block">
                    <h3 className="text-lg md:text-xl font-medium text-gray-900 dark:text-gray-100">
                        {title}
                    </h3>
                </a>
            </NextLink>

            <p className="line-clamp-4 md:line-clamp-2 mt-4 text-gray-600 dark:text-gray-400">
                {summary}
            </p>
        </div>
    );
}
