/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import React from "react";

type Props = {
    infobox: any;
};

export default function InfoBox({ infobox }: Props) {
    return (
        <div className="p-3 w-full flex flex-col items-center justify-center space-y-2 text-left rounded-lg border border-tertiary bg-dark text-neutral-50">
            <h1 className="text-xl font-medium self-start">
                {infobox.infobox}
            </h1>
            <img
                src={infobox.img_src}
                alt={infobox.infobox}
                className="rounded-md opacity-80 w-11/12"
            />
            <p className="text-left text-sm text-neutral-100">
                {infobox.content}
            </p>
        </div>
    );
}
