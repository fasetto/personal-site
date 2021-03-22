import React from "react";
import Container from "@/components/Container";
import Header from "@/components/Header";
import BlogPost from "@/components/BlogPost";

export default function Home() {
    return (
        <>
            <Header />

            <Container>
                <h1 className="text-3xl md:text-5xl font-bold">Hey, I am Serkan (;</h1>

                <p className="mt-4 leading-7 text-gray-600 dark:text-gray-400">
                    I'm a full&ndash;stack developer. Although, I also interested in 🐱‍💻 cyber&ndash;security. This is my personal web site, I'll share my knowledge &amp; my experiences with you.
                </p>

                <h2 className="leading-7 font-bold text-2xl md:text-4xl mt-16">Latest Posts</h2>

                <div className="mt-4 space-y-8">
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

            </Container>
        </>
    );
}
