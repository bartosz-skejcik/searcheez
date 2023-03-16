"use client";

import {
    ArrowRightIcon,
    MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";

type Props = {};

export default function MouseTrailer({}: Props) {
    const [trailerType, setTrailerType] = useState<"search" | "button" | "">(
        ""
    );

    useEffect(() => {
        const trailer = document.getElementById("trailer");

        const animateTrailer = (e: MouseEvent, interacting: boolean) => {
            if (trailer) {
                const x = e.clientX - trailer.offsetWidth / 2;
                const y = e.clientY - trailer.offsetHeight / 2;

                const keyframes = {
                    transform: `translate(${x}px, ${y}px) scale(${
                        interacting ? 2 : 1
                    })`,
                };

                trailer.animate(keyframes, {
                    duration: 800,
                    fill: "forwards",
                });
            }
        };

        window.onmousemove = (e: any) => {
            const interactable = e.target.closest("#interactable"),
                interacting = interactable !== null;

            animateTrailer(e, interacting);

            //@ts-ignore
            trailer.dataset.type = interacting ? interactable.dataset.type : "";

            if (interacting) {
                if (interactable.dataset.type === "search") {
                    setTrailerType("search");
                } else if (interactable.dataset.type === "button") {
                    setTrailerType("button");
                } else {
                    setTrailerType("");
                }
            }
        };
    }, []);

    return (
        <div
            id="trailer"
            className={`${
                window && window.location.pathname != "/" && "hidden"
            } h-[25px] w-[25px] bg-white rounded-full fixed left-0 right-0 z-50 pointer-events-none flex items-center justify-center text-black`}
        >
            {trailerType === "search" ? (
                <MagnifyingGlassIcon
                    id="trailer-icon"
                    className="w-3 h-3 text-black"
                />
            ) : trailerType === "button" ? (
                <ArrowRightIcon
                    id="trailer-icon"
                    className="w-3 h-3 text-black -rotate-45"
                />
            ) : (
                ""
            )}
        </div>
    );
}
