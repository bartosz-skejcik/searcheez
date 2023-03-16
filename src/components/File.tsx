"use client";

import {
    ArrowUpCircleIcon,
    CloudArrowDownIcon,
    DocumentIcon,
    FolderOpenIcon,
} from "@heroicons/react/24/outline";
import { motion } from "framer-motion";

type Props = {
    file: any;
    formatFileSize: (size: number) => string;
    index: number;
};

export default function File({ file, formatFileSize, index }: Props) {
    return (
        <motion.div
            initial={{ opacity: 0, x: 1000 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.3, type: "spring", delay: index * 0.1 }}
            className="flex flex-col items-start justify-start w-11/12 gap-2 p-3 transition-all duration-300 border border-transparent rounded-md lg:w-2/3 xl:w-1/2 hover:border-tertiary bg-block text-neutral-100 md:-ml-10 xl:-ml-44"
        >
            <div className="flex flex-col items-start justify-center w-full">
                <a
                    className="flex items-center justify-center text-sm"
                    href={file.url}
                >
                    {file.parsed_url[0] + "://" + file.parsed_url[1]}
                </a>
                <a
                    className="text-xl font-medium transition-all duration-300 hover:text-secondary text-secondary/70"
                    href={file.url}
                >
                    {file.title}
                </a>
            </div>
            <a
                href={file.magnetlink}
                className="flex items-center justify-center gap-2 px-3 py-1 transition-all duration-300 rounded-md bg-white/10 hover:bg-dark"
            >
                <CloudArrowDownIcon className="w-5 h-5" />
                Magnet
            </a>
            <div className="flex items-center justify-center gap-2 py-0.5 px-2 bg-white/5 rounded-md">
                <FolderOpenIcon className="w-5 h-5" />
                <span className="text-md">{formatFileSize(file.filesize)}</span>
            </div>
            {file.leech && file.seed && (
                <div className="columns-2">
                    <div className="flex items-center justify-center gap-2 py-0.5 px-2 bg-white/5 rounded-md">
                        <ArrowUpCircleIcon className="w-5 h-5 text-primary" />
                        <span className="text-md">{file.seed ?? 0}</span>
                    </div>
                    <div className="flex items-center justify-center gap-2 py-0.5 px-2 bg-white/5 rounded-md">
                        <ArrowUpCircleIcon className="w-5 h-5 rotate-180 text-secondary" />
                        <span className="text-md">{file.leech ?? 0}</span>
                    </div>
                </div>
            )}
            <div className="flex items-center justify-center gap-2 py-0.5 px-2 bg-white/5 rounded-md">
                <DocumentIcon className="w-5 h-5" />
                <span className="text-md">{file.files ?? 1}</span>
            </div>
            <div className="flex items-end justify-end w-full pr-2 space-x-2 border-r-2 rounded-sm text-neutral-400 border-tertiary">
                {file.engines.map((engine: any, index: number) => {
                    return <p key={index}>{engine}</p>;
                })}
            </div>
        </motion.div>
    );
}
