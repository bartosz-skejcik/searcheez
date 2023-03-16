/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { motion } from "framer-motion";
import React from "react";

type Props = {
    images: any[];
};

export default function ImageGallery({ images }: Props) {
    return (
        <main className="self-center w-11/12 gap-4 columns-3 2xl:columns-5 md:-ml-10 xl:-ml-44">
            {images.map((image, index) => {
                return (
                    image.img_src != "" && (
                        <motion.div
                            initial={{ opacity: 0, x: 100 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -100 }}
                            transition={{ duration: 0.3, delay: index * 0.01 }}
                            key={index}
                            className="flex flex-col items-center justify-center w-full gap-2 p-1 mb-4 overflow-hidden rounded-md md:p-2 lg:p-3 xl:p-4 bg-block"
                        >
                            <img
                                src={image.img_src}
                                className="object-contain w-full"
                            />
                            <h2 className="w-full mt-1 -mb-1 text-sm text-left md:-mb-2 md:mt-3 md:text-lg text-neutral-300">
                                {image.title.length > 55 ? (
                                    <span>
                                        {image.title.substring(0, 55) + "..."}
                                    </span>
                                ) : (
                                    <span>{image.title}</span>
                                )}
                            </h2>
                            <p className="w-full -mb-1 text-xs text-left text-secondary/50">
                                {image.parsed_url[0] + image.parsed_url[1]}
                            </p>
                        </motion.div>
                    )
                );
            })}
        </main>
    );
}
