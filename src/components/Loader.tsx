import React from "react";

type Props = {};

export default function Loader({}: Props) {
    return (
        <div className="w-screen 2xl:w-[80vw] h-full flex-1 flex items-center justify-center">
            <span className="loader"></span>
        </div>
    );
}
