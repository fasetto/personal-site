import "@/styles/globals.css";
import "focus-visible";

import Head from "next/head";
import { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";

function MyApp({ Component, pageProps }: AppProps) {

    return (
        <>
            <Head>
                <title>Next JS Template</title>
            </Head>

            <ThemeProvider attribute="class" defaultTheme="light">
                <Component {...pageProps} />
            </ThemeProvider>
        </>
    )
}

export default MyApp
