import { Cog6ToothIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import React from "react";

type Props = {
    visible: boolean;
};

export default function Navbar({ visible }: Props) {
    return (
        <nav
            className={`fixed top-5 py-3 px-4 md:px-20 w-[95vw] md:w-2/3 rounded-3xl ${
                visible ? "flex" : "hidden"
            } items-center justify-between bg-block text-white`}
        >
            <h1 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-primary to-tertiary">
                Searcheez
            </h1>
            <button
                id="interactable"
                data-type="button"
                className="p-1 font-semibold rounded-lg bg-primary text-dark/80 flex items-center justify-center md:space-x-1"
            >
                <Cog6ToothIcon className="w-6 h-6" />
                <span className="hidden md:block">Settings</span>
            </button>
        </nav>
    );
}
