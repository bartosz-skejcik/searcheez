import React from "react";

type Props = {
    answer: string;
};

export default function Answer({ answer }: Props) {
    return (
        <div className="w-full p-4 text-xl border-l-4 rounded text-neutral-200 bg-block/80 border-tertiary">
            {answer}
        </div>
    );
}
