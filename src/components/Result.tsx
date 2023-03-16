"use client";

import { motion } from "framer-motion";

type Props = {
    result: any;
    index: number;
};

export default function Result({ result, index }: Props) {
    return (
        <motion.div
            initial={{ opacity: 0, x: -1000 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.3, type: "spring", delay: index * 0.1 }}
            className="flex flex-col items-start justify-start w-full gap-1 p-3 text-white transition-all duration-300 border-l-2 rounded-l hover:scale-[1.01] border-block hover:border-tertiary h-fit bg-block rounded-r-xl"
        >
            <a
                className="flex items-center justify-center text-sm"
                href={result.url}
            >
                {result.parsed_url.map((url: any, index: number) => {
                    if (index == 0) {
                        return <p key={index}>{url}://</p>;
                    } else {
                        if (
                            result.parsed_url[index + 1] &&
                            result.parsed_url[index + 1].length != 0
                        ) {
                            return <p key={index}>{url.replace("/", " › ")}</p>;
                        }
                    }
                })}
            </a>
            <a
                className="text-xl font-medium transition-all duration-300 text-secondary underline-offset-2 hover:underline"
                href={result.url}
            >
                {result.title}
            </a>
            <p className="text-sm">{result.content}</p>
            <div className="flex items-end justify-end w-full pr-2 space-x-2 border-r-2 rounded-sm text-neutral-400 border-tertiary">
                {result.engines.map((engine: any, index: number) => {
                    return <p key={index}>{engine}</p>;
                })}
            </div>
        </motion.div>
    );
}
