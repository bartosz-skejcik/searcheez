"use client";

import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";

type Props = {
    position: "top" | "bottom";
    inputValue?: string;
};

export default function Search({ position, inputValue }: Props) {
    const [hovering, setHovering] = useState(false);
    const [query, setQuery] = useState("");

    useEffect(() => {
        if (inputValue) {
            setQuery(inputValue);
        }
    }, [inputValue]);

    const submitSearch = async (event: any) => {
        event.preventDefault();
        window.location.href = `http://localhost:3000/search?q=${query.replace(
            " ",
            "%20"
        )}&lang=en-US`;
    };

    return (
        <>
            <form
                onMouseEnter={() => {
                    setHovering(true);
                }}
                onMouseLeave={() => {
                    setHovering(false);
                }}
                onSubmit={(e) => {
                    submitSearch(e);
                    //@ts-ignore
                    e.target.blur();
                }}
                className={`border border-neutral-800 hover:border-primary absolute z-20 flex items-center justify-start gap-4 bg-block w-[95vw] rounded-2xl ${
                    position == "bottom"
                        ? "top-[92vh] text-2xl px-4 py-3"
                        : "top-5 text-xl px-3 py-2"
                } left-1/2 -ml-[47.5vw] transition-all duration-300 ease-in-out`}
            >
                <MagnifyingGlassIcon className="w-7 h-7 text-primary" />
                <input
                    type="text"
                    autoComplete="off"
                    id="interactable"
                    name="q"
                    value={query}
                    data-type="search"
                    className="w-full h-full bg-transparent text-white/75 font-medium rounded-md focus:outline-none"
                    placeholder="Search..."
                    onChange={(e) => {
                        setQuery(e.target.value);
                    }}
                />
            </form>
            <p
                className={`${
                    hovering ? "bottom-20" : "bottom-5"
                } absolute w-[90w] ${
                    position == "bottom" ? "block" : "hidden"
                } transition-all duration-500 left-1/2 -ml-[5vw] text-tertiary/75 z-0`}
            >
                Type to begin searching...
            </p>
        </>
    );
}
