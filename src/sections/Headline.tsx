"use client";

import { ArrowTrendingUpIcon } from "@heroicons/react/24/outline";
import { searches } from "@/app/searches.json";
//@ts-ignore
import Typewriter from "typewriter-effect/dist/core";
import { useEffect } from "react";

type Props = {
    visible: boolean;
};

export default function Headline({ visible }: Props) {
    useEffect(() => {
        new Typewriter("#headline", {
            strings: searches.sort(() => Math.random() - 0.5),
            autoStart: true,
            delay: 60,
            loop: true,
            deleteSpeed: 35,
            pauseFor: 2500,
        });
    }, []);

    return (
        <h1
            className={`text-4xl lg:text-5xl text-secondary font-semibold text-left ${
                visible ? "flex" : "hidden"
            } flex-col items-start justify-center w-2/3 `}
        >
            <div className="text-primary flex items-center justify-start gap-5 w-full">
                <span>Search for </span>
                <ArrowTrendingUpIcon className="w-8 h-8 md:w-10 md:h-10" />
            </div>
            <div className="w-[70vw]">
                {/* this is where the text will be */}
                <span
                    id="headline"
                    className="transition-all duration-300"
                ></span>
            </div>
        </h1>
    );
}
