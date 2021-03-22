import NextLink from "next/link";
import { NextRouter, useRouter } from "next/router";
import tw from "@/lib/tw";

type Props = {
    href: string;
    exact: boolean;
    label: React.ReactNode;
}

export default function NavLink({ label, href, exact = false}: Props) {
    const router = useRouter();
    const isActive = IsActiveRoute(router, href, exact);

    const activeStyles = "";
    const inactiveStyles = "text-gray-600 dark:text-gray-300";

    return (
        <div className="flex flex-col relative items-center">
            <NextLink href={href}>
                <a
                    className={tw`
                        ${isActive ? activeStyles : inactiveStyles}
                        flex items-center
                        p-2 sm:p-3
                        dark:text-white
                        dark:hover:text-white hover:text-black
                    `}
                    aria-current={isActive ? "page" : undefined}
                >
                    {label}
                </a>
            </NextLink>

            {isActive && (
                <div className="absolute bottom-0 border-b-[3px] w-3/4 border-black dark:border-white rounded" />
            )}
        </div>
    );
}

function IsActiveRoute(router: NextRouter, href: string, exact: boolean) {
    let isActive = router.pathname.startsWith(href);

    if (exact)
        isActive = router.pathname === href;

    return isActive;
}
