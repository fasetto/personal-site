import Image from "next/image";
import NextLink from "next/link";

function CustomLink({ href, ...rest }: JSX.IntrinsicElements["a"]) {
    const isInternal = href.startsWith("/") || href.startsWith("#");

    if (!isInternal)
        return <a target="_blank" rel="noopener noreferrer" href={href} />;

    return (
        <NextLink href={href}>
            <a {...rest} />
        </NextLink>
    );
}

const MDXComponents = {
    Image,
    a: CustomLink
};

export default MDXComponents;
