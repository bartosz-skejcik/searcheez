import { MouseTrailer } from "@/components";
import "./globals.css";
import { Lexend } from "next/font/google";

export const metadata = {
    title: "Searcheez",
    description:
        "Discover the world of Searcheez, a fast and reliable search engine that delivers accurate and relevant results. With advanced search algorithms and user-friendly interface, Searcheez helps you find what you're looking for quickly and efficiently. Try Searcheez today and unlock the power of search",
};

const lexend = Lexend({ subsets: ["latin"] });

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body
                style={{
                    overflowX: "hidden",
                }}
                className={lexend.className}
            >
                <MouseTrailer />
                {children}
            </body>
        </html>
    );
}
