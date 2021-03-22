import { PropsWithChildren } from "react";

export default function Container({ children }: PropsWithChildren<{}>) {
    return (
        <main className="w-full px-8">
            <div className="flex flex-col items-start mx-auto max-w-2xl">
                {children}
            </div>
        </main>
    )
}
