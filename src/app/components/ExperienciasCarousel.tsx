"use client";

import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { FaCheck } from "react-icons/fa";

export default function ExperienciasCarousel({
    experiencias,
}: {
    experiencias: {
        title: string;
        date: string;
        atividades: string[];
    }[];
}) {
    const prevRef = useRef<HTMLButtonElement | null>(null);
    const nextRef = useRef<HTMLButtonElement | null>(null);

    return (
        <div className="w-full relative">
            <Swiper
                modules={[Navigation, Pagination]}
                pagination={{ clickable: true }}
                spaceBetween={50}
                slidesPerView={1}
                className="w-full min-h-[400px] pb-16"
                onBeforeInit={(swiper) => {
                    // @ts-expect-error
                    swiper.params.navigation.prevEl = prevRef.current;
                    // @ts-expect-error
                    swiper.params.navigation.nextEl = nextRef.current;
                }}
            >
                {experiencias.map((item, index) => {
                    const words = item.title.split(" ");
                    const last = words[words.length - 1];
                    const before = words.slice(0, -1).join(" ");

                    return (
                        <SwiperSlide key={index}>
                            <div className="flex flex-col items-start gap-10">
                                <div className="flex flex-col w-full text-left gap-2">
                                    <h3 className="text-3xl lg:text-4xl xl:text-6xl font-bold leading-tight">
                                        {before && <>{before} </>}
                                        <span
                                            className={
                                                last.toLowerCase() === "ibge" ||
                                                last.toLowerCase() === "l’ibge" ||
                                                    last.toLowerCase() === "freelancer" ||
                                                    last.toLowerCase() === "freelance"
                                                    ? "text-red-500 !font-bold"
                                                    : ""
                                            }
                                        >
                                            {last}
                                        </span>
                                    </h3>

                                    <h3 className="text-lg lg:text-xl xl:text-2xl font-semibold opacity-80">
                                        {item.date}
                                    </h3>
                                </div>

                                <div className="flex flex-col w-full text-left gap-5 pb-16">
                                    {item.atividades.map((a, i) => (
                                        <div
                                            key={i}
                                            className="flex items-center gap-3 text-xl lg:text-2xl xl:text-3xl font-semibold"
                                        >
                                            <FaCheck className="text-red-500 text-3xl lg:text-4xl xl:text-5xl shrink-0" />
                                            <p className="leading-snug">{a}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </SwiperSlide>
                    );
                })}
            </Swiper>
        </div>
    );
}
