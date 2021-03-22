import dynamic from "next/dynamic";
import { useTheme } from "next-themes";

import tw from "@/lib/tw";
import Nav from "./Nav";

const MoonIcon = dynamic(() => import("@/assets/MoonIcon"), { ssr: false });
const SunIcon = dynamic(() => import("@/assets/SunIcon"), { ssr: false });

export default function Header() {
    const { theme, setTheme } = useTheme();

    const toggleTheme = () => setTheme(theme == "light" ? "dark" : "light");

    return (
        <div className="header sticky z-sticky top-0 bg-white dark:bg-black bg-opacity-60 dark:bg-opacity-70 md:my-4 p-8">
            <div className="flex mx-auto justify-between items-center max-w-4xl">
                <button
                    aria-label="Toggle dark mode"
                    onClick={toggleTheme}
                    className={tw`
                        p-3 flex-none rounded-md
                        w-10 h-10
                        bg-gray-200 dark:bg-gray-800
                        focus:outline-none
                        focus:ring-gray-300 dark:focus:ring-gray-700 focus:ring-2
                    `}
                >
                    {theme === "light" && <MoonIcon />}
                    {theme === "dark" && <SunIcon />}
                </button>

                <Nav />
            </div>
        </div>
    );
}
