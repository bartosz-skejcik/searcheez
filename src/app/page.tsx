"use client";

import { Navbar } from "@/components";
import { Search, Headline } from "@/sections";
import { useEffect, useState } from "react";

export default function Home() {
    const [results, setResults] = useState([]);
    const [suggestions, setSuggestions] = useState([]);

    useEffect(() => {
        console.log(results);
    }, [results]);

    useEffect(() => {
        console.log(suggestions);
    }, [suggestions]);

    return (
        <section
            style={{
                backgroundImage:
                    "radial-gradient(rgba(255, 255, 255, 0.04) 8%, transparent 8%)",
                backgroundSize: "5vmin 5vmin",
            }}
            className={`w-screen ${
                results.length > 0 ? "" : "h-screen"
            } bg-dark relative flex flex-col gap-2 items-center justify-center overflow-x-hidden`}
        >
            <Navbar visible={results.length > 0 ? false : true} />
            <section
                className={`${
                    results.length > 0 ? "hidden" : "flex"
                } flex-col md:flex-row items-center justify-evenly w-screen h-screen`}
            >
                <Headline visible={results.length > 0 ? false : true} />
            </section>
            <Search position={results.length > 0 ? "top" : "bottom"} />
        </section>
    );
}
