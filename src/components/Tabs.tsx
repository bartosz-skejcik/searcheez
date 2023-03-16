import {
    MagnifyingGlassIcon,
    PaperClipIcon,
    PhotoIcon,
} from "@heroicons/react/24/outline";
import React, { Dispatch, SetStateAction } from "react";

type Props = {
    active: "general" | "images" | "files";
    setActive: Dispatch<SetStateAction<"general" | "images" | "files">>;
};

const tabs = [
    {
        name: "general",
        displayName: "General",
        icon: <MagnifyingGlassIcon className="w-5 h-5" />,
    },
    {
        name: "images",
        displayName: "Images",
        icon: <PhotoIcon className="w-5 h-5" />,
    },
    {
        name: "files",
        displayName: "Files",
        icon: <PaperClipIcon className="w-5 h-5" />,
    },
];

export default function Tabs({ active, setActive }: Props) {
    return (
        <nav className="flex items-center self-center justify-start w-11/12 gap-3 px-2 py-1 text-lg rounded-md xl:w-full md:-ml-10 xl:-ml-44 bg-block">
            {tabs.map((tab, index) => {
                return (
                    <button
                        key={index}
                        onClick={() => {
                            //@ts-ignore
                            setActive(tab.name);
                        }}
                        className={`flex items-center justify-center px-1 py-0.5 gap-1 border-b-2 hover:bg-dark/50 transition-all duration-300  ${
                            active == tab.name
                                ? "border-secondary text-secondary"
                                : "border-transparent text-white hover:border-primary"
                        } rounded-t-md rounded-b-sm`}
                    >
                        {tab.icon}
                        <span>{tab.displayName}</span>
                    </button>
                );
            })}
        </nav>
    );
}
