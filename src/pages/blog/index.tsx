import React from "react";
import Container from "@/components/Container";
import SearchIcon from "@/assets/SearchIcon";
import Header from "@/components/Header";
import BlogPost from "@/components/BlogPost";
import tw from "@/lib/tw";

export default function Blog() {
    return (
        <>
            <Header />

            <Container>
                <h1 className="text-3xl md:text-5xl font-bold">Blog</h1>
                <p className="text-sm md:text-base text-gray-600 dark:text-gray-400 mt-4">
                    I wrote couple articles a in the past. Some of them was related to back&ndash;end development, hacking stuff etc..
                    <br />
                    From now on, I'll try to write more whenever I got time.
                </p>

                <div className="mt-4 relative flex items-center shadow-sm w-full">
                    <input
                        className={tw`
                            pl-4 pr-10 py-2 w-full
                            text-sm md:text-base
                            border border-gray-300 dark:border-gray-700
                            text-gray-900 dark:text-gray-100
                            rounded-md bg-white dark:bg-gray-800
                            focus:outline-none focus:ring-gray-300 dark:focus:ring-gray-700 focus:ring-1
                            transition-colors
                        `}
                        placeholder="Search articles"
                    />
                    <div className="pr-3 absolute right-0 inset-y-0 flex items-center pointer-events-none">
                        <SearchIcon className="w-5 h-5 text-gray-400 dark:text-gray-500" />
                    </div>
                </div>

                <h2 className="leading-7 font-bold text-2xl md:text-4xl mt-16">Latest Posts</h2>

                {/* Continue reading / Read more button */}
                <div className="mt-8 space-y-8">
                    <BlogPost
                        title="Lorem ipsum dolor sit amet consectetur adipisicing."
                        summary="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea vero excepturi repellat, sed nisi saepe optio voluptatum corrupti consequatur hic."
                        slug=""
                    />

                    <BlogPost
                        title="Lorem ipsum dolor, sit amet consectetur adipisicing elit."
                        summary="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non doloremque voluptate id velit ratione amet, quod dolore dolor rem. Dignissimos pariatur quidem accusantium est consequuntur alias ex eligendi, corporis mollitia vitae architecto tempora excepturi harum officiis deleniti quas laboriosam adipisci."
                        slug=""
                    />
                </div>

                <div className="mt-8"></div>
            </Container>
        </>
    );
}
