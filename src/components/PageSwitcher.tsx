import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import React, { Dispatch, SetStateAction } from "react";

type Props = {
    pageno: number;
    setPageno: Dispatch<SetStateAction<number>>;
    query: string;
    lang: string;
};

export default function PageSwitcher({
    pageno,
    setPageno,
    query,
    lang,
}: Props) {
    return (
        <div className="flex items-center justify-center w-full md:-ml-10 xl:-ml-32">
            <button className="flex items-center justify-center w-10 h-10 text-tertiary bg-block rounded-l-md">
                <ArrowLeftIcon className="w-6 h-6" />
            </button>
            <div className="flex items-center justify-center h-10 px-5 space-x-10 text-tertiary bg-block">
                {pageno != 1 && (
                    <p
                        onClick={() => setPageno(1)}
                        datatype="button"
                        className="transition-all duration-300 hover:underline underline-offset-2 hover:cursor-pointer hover:text-neutral-200"
                    >
                        1
                    </p>
                )}
                <p className="text-secondary">{pageno}</p>
                <p
                    onClick={() => setPageno(pageno + 1)}
                    datatype="button"
                    className="transition-all duration-300 hover:underline underline-offset-2 hover:cursor-pointer hover:text-neutral-200"
                >
                    {pageno + 1}
                </p>
                {pageno == 1 && (
                    <p
                        onClick={() => setPageno(pageno + 2)}
                        datatype="button"
                        className="transition-all duration-300 hover:underline underline-offset-2 hover:cursor-pointer hover:text-neutral-200"
                    >
                        {pageno + 2}
                    </p>
                )}
            </div>
            <button className="flex items-center justify-center w-10 h-10 text-tertiary bg-block rounded-r-md">
                <ArrowLeftIcon className="w-6 h-6 rotate-180" />
            </button>
        </div>
    );
}
