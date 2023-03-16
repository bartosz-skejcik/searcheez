"use client";

import { InfoBox, Loader, PageSwitcher, Suggestions, Tabs } from "@/components";
import { Search, Results, ImageGallery, FileGallery } from "@/sections";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

type Props = {};

const getData = async (query: string, lang: string, pageno: number) => {
    const data = fetch("http://localhost:4000/search", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept-Encoding": "gzip, compress, br",
        },
        body: JSON.stringify({
            query,
            lang: lang,
            categories: "general,images,files",
            pageno,
        }),
    })
        .then((res) => res.json())
        .then((res) => {
            return res;
        });
    return data;
};

export default function Page({}: Props) {
    const searchParams = useSearchParams();
    const query = searchParams.get("q");
    const lang = searchParams.get("lang");

    const [pageno, setPageno] = useState(1);

    const [general, setGeneral] = useState<any[]>([]);
    const [images, setImages] = useState<any[]>([]);
    const [files, setFiles] = useState<any[]>([]);

    const [answers, setAnswers] = useState<any[]>([]);

    const [suggestions, setSuggestions] = useState([]);
    const [infobox, setInfobox] = useState({});

    const [active, setActive] = useState<"general" | "images" | "files">(
        "general"
    );

    useEffect(() => {
        (async () => {
            setGeneral([]);
            const { answers, results, suggestions, infoboxes } = await getData(
                query!,
                lang!,
                pageno
            );
            console.log(results);
            // save images, files, general
            const gen: any = [];
            const img: any = [];
            const fil: any = [];
            results.forEach((result: any) => {
                if (result.category === "general") {
                    gen.push(result);
                    setGeneral(gen);
                } else if (result.category === "images") {
                    img.push(result);
                    setImages(img);
                } else if (result.magnetlink != null) {
                    fil.push(result);
                    setFiles(fil);
                } else {
                    console.log("error");
                }
            });
            setAnswers(answers);
            setSuggestions(suggestions);
            setInfobox(infoboxes[0]);
        })();
    }, [lang, query, pageno]);

    return (
        <section
            style={{
                backgroundImage:
                    "radial-gradient(rgba(255, 255, 255, 0.04) 8%, transparent 8%)",
                backgroundSize: "5vmin 5vmin",
            }}
            className={`w-[100vw] min-h-screen pt-16 bg-dark relative flex flex-col items-center lg:items-start justify-center lg:justify-start`}
        >
            <Search inputValue={query!} position="top" />
            <main className="flex flex-col items-start justify-start w-screen min-h-screen gap-3 my-3 md:pl-10 xl:pl-44">
                <Tabs setActive={setActive} active={active} />
                {general.length > 0 ? (
                    active === "general" ? (
                        <div className="flex flex-col-reverse items-center justify-center gap-20 lg:flex-row lg:items-start lg:justify-start">
                            <Results results={general} answer={answers[0]} />
                            <div className="flex flex-col items-start justify-center w-1/4 gap-10">
                                {infobox && <InfoBox infobox={infobox} />}
                                {suggestions.length > 0 && (
                                    <Suggestions suggestions={suggestions} />
                                )}
                            </div>
                        </div>
                    ) : active === "images" ? (
                        <ImageGallery images={images} />
                    ) : (
                        <FileGallery files={files} />
                    )
                ) : (
                    <Loader />
                )}
                <PageSwitcher
                    pageno={pageno}
                    setPageno={setPageno}
                    query={query!}
                    lang={lang!}
                />
            </main>
        </section>
    );
}
