import React from "react";
import { Answer, Result } from "@/components";

type Props = {
    results: any[];
    answer: string;
};

export default function Results({ results, answer }: Props) {
    console.log(answer);
    return (
        <main className="flex flex-col items-start justify-start w-5/6 space-y-4 lg:w-3/4 xl:w-2/3 2xl:w-1/2">
            {answer && <Answer answer={answer} />}
            {results.map((result, index) => {
                return result.content ? (
                    <Result index={index} key={index} result={result} />
                ) : null;
            })}
        </main>
    );
}
